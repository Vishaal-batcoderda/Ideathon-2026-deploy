import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,

        background: {
          color: "transparent",
        },

        particles: {
          number: {
            value: 45,
          },

          color: {
            value: "#6366f1",
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: { min: 2, max: 5 },
          },

          move: {
            enable: true,
            speed: 0.6,
          },

          links: {
            enable: true,
            distance: 150,
            color: "#a5b4fc",
            opacity: 0.2,
            width: 1,
          },
        },

        detectRetina: true,
      }}
    />
  );
}