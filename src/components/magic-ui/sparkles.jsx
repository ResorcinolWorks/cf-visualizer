"use client";
import React, { useEffect, useState } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

export const SparklesCore = (props) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (init) {
      return;
    }
    loadSlim(tsParticles).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="w-full h-full">
      {init && (
        <Particles
          id={props.id}
          className={props.className}
          options={{
            fullScreen: {
              enable: false,
            },
            particles: {
              number: {
                value: props.particleDensity || 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: props.particleColor || "#ff0000",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                },
              },
              size: {
                value: props.minSize || 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                  size_min: props.minSize || 1,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: false,
                },
                onclick: {
                  enable: false,
                },
                resize: true,
              },
            },
            retina_detect: true,
          }}
        />
      )}
    </div>
  );
}; 