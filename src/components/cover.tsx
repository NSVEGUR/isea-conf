"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "./grid-pattern";

interface CoverProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children?: React.ReactNode;
}

export function Cover({ title, className, children, ...props }: CoverProps) {
  return (
    <div
      className={cn(
        "relative flex h-[30vh] mb-10 w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 via-background to-background",
        className
      )}
      {...props}
    >
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        {title}
      </p>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      {children}
    </div>
  );
}
