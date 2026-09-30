import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Html, Lightformer, RoundedBox } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

const c = { cyan: "#57e7f2", violet: "#9874ff", magenta: "#ec59cd", blue: "#4f8cff", dark: "#070912" };
const javaTags = ["Java", "React", "JavaScript", "HTML", "CSS", "SQL", "Git"];
const sfTags = ["Salesforce CRM", "Flow Builder", "Reports & Dashboards"];

function Tag({ label, position, color }: { label: string; position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.4} rotationIntensity={0} floatIntensity={0.6}>
      <Html position={position} center distanceFactor={5} zIndexRange={[5, 0]} style={{ pointerEvents: "none" }}>
        <span className="scene-tag" style={{ borderColor: color, color }}>{label}</span>
      </Html>
    </Float>
  );
}

function Rig({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const cloud = useRef<THREE.Group>(null);
  const { pointer, viewport } = useThree();
  // Scene content spans ~9 x 5.5 world units; shrink it to always fit inside the box.
  const fit = Math.min(1, viewport.width / 11, viewport.height / 6.4);
  const java = mobile ? [] : javaTags;
  const sf = mobile ? [] : sfTags;
  useFrame((state, raw) => {
    const dt = Math.min(raw, 0.05);
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.25, 4, dt);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * 0.12, 4, dt);
    }
    if (cloud.current) cloud.current.rotation.y = state.clock.elapsedTime * 0.25;
  });
  return (
    <group scale={fit}><group ref={group}>
      {/* Java Full Stack: laptop */}
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <group position={[-1.1, 0, 0]} rotation={[-0.05, 0.35, 0]} scale={0.8}>
          <RoundedBox args={[3.4, 2.1, 0.14]} radius={0.08} position={[0, 0.65, 0]}>
            <meshStandardMaterial color={c.dark} metalness={0.7} roughness={0.25} />
          </RoundedBox>
          <mesh position={[0, 0.65, 0.08]}>
            <planeGeometry args={[3.1, 1.8]} />
            <meshStandardMaterial color={c.cyan} emissive={c.cyan} emissiveIntensity={0.18} />
          </mesh>
          {[0.36, 0.12, -0.12, -0.36].map((y, i) => (
            <mesh key={y} position={[-0.5 + (i % 2) * 0.2, 0.65 + y, 0.1]}>
              <boxGeometry args={[1.5 - i * 0.18, 0.05, 0.02]} />
              <meshBasicMaterial color={i === 1 ? c.magenta : c.dark} />
            </mesh>
          ))}
          <RoundedBox args={[3.8, 0.14, 2]} radius={0.07} position={[0, -0.55, 0.85]} rotation={[-0.24, 0, 0]}>
            <meshStandardMaterial color={c.dark} metalness={0.85} roughness={0.3} />
          </RoundedBox>
        </group>
      </Float>
      {/* Salesforce: glowing cloud */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.7}>
        <group ref={cloud} position={[2.1, 1.1, -0.4]} scale={0.75}>
          {[[0, 0, 0, 0.62], [-0.6, -0.15, 0, 0.45], [0.6, -0.12, 0, 0.5], [0.2, 0.35, 0, 0.45]].map(([x, y, z, r], i) => (
            <mesh key={i} position={[x!, y!, z!]}>
              <sphereGeometry args={[r!, mobile ? 16 : 28, mobile ? 16 : 28]} />
              <meshStandardMaterial color={c.blue} emissive={c.violet} emissiveIntensity={0.45} metalness={0.2} roughness={0.35} transparent opacity={0.9} />
            </mesh>
          ))}
        </group>
      </Float>
      {!mobile && (
        <Float speed={1.3} rotationIntensity={0.8} floatIntensity={0.6}>
          <mesh position={[2.3, -1.3, 0.6]}>
            <octahedronGeometry args={[0.38, 0]} />
            <meshStandardMaterial color={c.violet} emissive={c.violet} emissiveIntensity={0.4} wireframe />
          </mesh>
        </Float>
      )}
      {java.map((t, i) => {
        const a = (i / java.length) * Math.PI * 1.2 + Math.PI * 0.6;
        return <Tag key={t} label={t} color={c.cyan} position={[-1.1 + Math.cos(a) * 1.9, Math.sin(a) * 1.6 + 0.3, 0.6]} />;
      })}
      {sf.map((t, i) => <Tag key={t} label={t} color={c.violet} position={[1.9, 0.1 - i * 0.5, 0.8]} />)}
    </group></group>
  );
}

export function DeveloperScene() {
  const [mobile, setMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  // Tags are also DOM overlays; keep them inside the canvas box.
  return (
    <>
      <Canvas dpr={mobile ? [1, 1.25] : [1, 1.5]} camera={{ position: [0, 0.3, 7.5], fov: 45 }} gl={{ antialias: !mobile, alpha: true }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 4, 5]} intensity={18} color={c.cyan} />
        <pointLight position={[-4, -1, 3]} intensity={12} color={c.magenta} />
        <Suspense fallback={null}>
          <Rig mobile={mobile} />
          <Environment><Lightformer intensity={2} position={[0, 5, 2]} scale={[8, 8, 1]} /></Environment>
        </Suspense>
      </Canvas>
      <div className="scene-mobile-skills" aria-label="Technologies shown in the scene">
        <div>{javaTags.slice(0, 4).map((label) => <span className="scene-tag scene-tag-java" key={label}>{label}</span>)}</div>
        <div>{[...javaTags.slice(4), ...sfTags].map((label) => <span className={sfTags.includes(label) ? "scene-tag scene-tag-salesforce" : "scene-tag scene-tag-java"} key={label}>{label}</span>)}</div>
      </div>
    </>
  );
}
