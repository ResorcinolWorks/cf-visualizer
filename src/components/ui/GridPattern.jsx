import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magic-ui/animated-grid-pattern";

export function GridPattern({ className }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[--color:white] h-full w-full",
          className,
        )}
      />
    </div>
  );
} 