import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParTicles = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async () => {
        return particlesLoaded
      }, []);
  return (
    <div className="-z-50">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
       
        },
        fpsLimit: 1100,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 100,
            },
            repulse: {
              distance: 100,
              duration: 5,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "",
            distance: 500,
            enable: true,
            opacity: 0.5,
            width: 5,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 80,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    </div>
  )
}

export default ParTicles
