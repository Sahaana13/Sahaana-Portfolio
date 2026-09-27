import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void initParticlesEngine(async (engine) => loadSlim(engine)).then(() => setReady(true));
  }, []);

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