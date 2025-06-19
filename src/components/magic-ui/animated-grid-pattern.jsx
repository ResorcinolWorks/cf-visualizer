"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useMemo, useRef } from "react";

export const AnimatedGridPattern = ({
  numSquares = 30,
  maxOpacity = 0.5,
  duration = 3,
  repeatDelay = 1,
  className,
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  const columns = useMemo(() => {
    return Array(numSquares).fill(1);
  }, [numSquares]);

  const rows = useMemo(() => {
    return Array(numSquares).fill(1);
  }, [numSquares]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: maxOpacity, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn("absolute inset-0 z-0", className)}
      style={{
        maskImage: "radial-gradient(ellipse at center, white, transparent 70%)",
      }}
    >
      <div className="absolute inset-0 z-0 h-full w-full">
        {rows.map((_, i) => (
          <motion.div
            key={`row-${i}`}
            className="relative flex h-auto w-full"
          >
            {columns.map((_, j) => (
              <motion.div
                key={`col-${j}`}
                animate={{
                  opacity: [0, maxOpacity, 0],
                  transition: {
                    duration,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: Math.random() * 5,
                    repeatDelay,
                  },
                }}
                className="h-3 w-3 border border-neutral-700 bg-neutral-900"
              ></motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}; 