import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer, RoundedBox } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const sceneColors = { cyan: "#57e7f2", violet: "#9874ff", magenta: "#ec59cd", dark: "#070912" };

function Rig() {
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((_, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.22, 4, dt);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * 0.12, 4, dt);
  });
  return (
    <group ref={group} rotation={[-0.08, -0.25, 0.04]}>
      <Float speed={1.25} rotationIntensity={0.18} floatIntensity={0.45}>
        <RoundedBox args={[3.8, 2.35, 0.15]} radius={0.08} position={[0, 0.65, 0]} castShadow>
          <meshStandardMaterial color={sceneColors.dark} metalness={0.7} roughness={0.25} />
        </RoundedBox>
        <mesh position={[0, 0.65, 0.085]}>
          <planeGeometry args={[3.45, 2.02]} />
          <meshStandardMaterial color={sceneColors.cyan} emissive={sceneColors.cyan} emissiveIntensity={0.2} />
        </mesh>
        {[0.36, 0, -0.36].map((y, index) => (
          <mesh key={y} position={[-0.52 + index * 0.22, 0.65 + y, 0.1]}>
            <boxGeometry args={[1.65 - index * 0.22, 0.055, 0.025]} />
            <meshBasicMaterial color={index === 1 ? sceneColors.magenta : sceneColors.dark} />
          </mesh>
        ))}
        <RoundedBox args={[4.25, 0.15, 2.25]} radius={0.08} position={[0, -0.63, 0.92]} rotation={[-0.24, 0, 0]} castShadow>
          <meshStandardMaterial color={sceneColors.dark} metalness={0.85} roughness={0.3} />
        </RoundedBox>
      </Float>
      {[[2.6, 1.8, -0.7], [-2.45, 0.8, 0.4], [2.4, -1.25, 0.8]].map((position, index) => (
        <Float key={index} speed={1 + index * 0.2} rotationIntensity={0.8} floatIntensity={0.65}>
          <mesh position={position as [number, number, number]}>
            {index === 0 ? <icosahedronGeometry args={[0.36, 0]} /> : index === 1 ? <torusGeometry args={[0.36, 0.1, 12, 28]} /> : <octahedronGeometry args={[0.42, 0]} />}
            <meshStandardMaterial color={index === 1 ? sceneColors.magenta : sceneColors.violet} emissive={index === 1 ? sceneColors.magenta : sceneColors.violet} emissiveIntensity={0.4} wireframe={index === 2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function DeveloperScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.3, 7.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 5]} intensity={18} color={sceneColors.cyan} />
      <pointLight position={[-4, -1, 3]} intensity={12} color={sceneColors.magenta} />
      <Suspense fallback={null}>
        <Rig />
        <Environment>
          <Lightformer intensity={2} position={[0, 5, 2]} scale={[8, 8, 1]} />
        </Environment>
      </Suspense>
    </Canvas>
  );
}