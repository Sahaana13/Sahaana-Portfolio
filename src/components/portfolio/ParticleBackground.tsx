import { useMemo } from "react";
import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const initEngine = async (engine: Engine) => {
  await loadSlim(engine);
};

export function ParticleBackground() {
  return (
    <ParticlesProvider init={initEngine}>
      <ParticleLayer />
    </ParticlesProvider>
  );
}

function ParticleLayer() {
  const { loaded: ready } = useParticlesProvider();


  const options = useMemo<ISourceOptions>(() => ({
    fullScreen: { enable: false },
    fpsLimit: 50,
    detectRetina: true,
    particles: {
      number: { value: 48, density: { enable: true, width: 1000, height: 800 } },
      color: { value: ["#56dff5", "#9d7bff", "#f05bd8"] },
      opacity: { value: { min: 0.1, max: 0.38 } },
      size: { value: { min: 1, max: 2.4 } },
      links: { enable: true, distance: 130, color: "#64dff2", opacity: 0.08, width: 1 },
      move: { enable: true, speed: 0.35, direction: "none", outModes: { default: "out" } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" }, resize: { enable: true } },
      modes: { grab: { distance: 150, links: { opacity: 0.16 } } },
    },
  }), []);

  if (!ready) return null;
  return <Particles id="portfolio-particles" className="pointer-events-none fixed inset-0 z-0" options={options} />;
}