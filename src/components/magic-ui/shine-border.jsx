"use client";

import { cn } from "@/lib/utils";

const ShineBorder = ({
  children,
  className,
  duration = 2,
  shineColor = "#ffffff",
  borderWidth = 2,
  style,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full p-[2px]",
        className,
      )}
      style={{
        "--border-width": `${borderWidth}px`,
        "--shine-color": shineColor,
        "--duration": `${duration}s`,
        ...style,
      }}
      {...props}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from 0deg, transparent 220deg, var(--shine-color) 280deg, transparent 320deg)`,
          animation: `spin var(--duration) linear infinite`,
        }}
      />
      <div className="relative z-10 rounded-full bg-gray-900">
        {children}
      </div>
    </div>
  );
};

export default ShineBorder; 