"use client";

import { Slot } from "@radix-ui/react-slot";
import { forwardRef, HTMLAttributes } from "react";

import { c } from "@/utils";

interface SkeletonProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Skeleton = forwardRef<HTMLElement, SkeletonProps>((props, ref) => {
  const Comp = props.asChild ? Slot : "div";

  return (
    <Comp
      {...props}
      ref={ref}
      className={c("bg-neutral-700 animate-pulse rounded-sm", props.className)}
    >
      {props.children}
    </Comp>
  );
});
Skeleton.displayName = "Skeleton";

interface SkeletonTextProps extends HTMLAttributes<HTMLElement> {
  lines: number;
  asChild?: boolean;
}

export const SkeletonText = forwardRef<HTMLElement, SkeletonTextProps>(
  (props, ref) => {
    const Comp = props.asChild ? Slot : "div";

    return (
      <Comp
        {...props}
        ref={ref}
        className={c("flex flex-col gap-4", props.className)}
      >
        {Array.from({ length: props.lines }).map((_, i) => {
          const isLastLine = i + 1 === props.lines;

          return (
            <Skeleton
              key={i}
              className={`w-full h-4 ${isLastLine ? "w-3/4" : ""}`}
            />
          );
        })}
      </Comp>
    );
  },
);
SkeletonText.displayName = "SkeletonText";
