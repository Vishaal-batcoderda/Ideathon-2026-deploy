import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticlesBg() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        particles: {
          number: { value: 40 },
          color: { value: "#6366f1" },
          opacity: { value: 0.2 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            opacity: 0.2,
            color: "#6366f1"
          }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  );
}