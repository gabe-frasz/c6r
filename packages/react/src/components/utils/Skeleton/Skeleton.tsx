"use client";

import { Slot } from "@radix-ui/react-slot";
import { forwardRef, HTMLAttributes } from "react";

import { c } from "@/utils";

export interface SkeletonProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Skeleton = forwardRef<HTMLElement, SkeletonProps>(
  ({ asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        {...props}
        ref={ref}
        className={c(
          "bg-neutral-700 animate-pulse rounded-sm",
          props.className,
        )}
      />
    );
  },
);
Skeleton.displayName = "Skeleton";

export interface SkeletonTextProps extends HTMLAttributes<HTMLElement> {
  lines: number;
  asChild?: boolean;
}

export const SkeletonText = forwardRef<HTMLElement, SkeletonTextProps>(
  ({ asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

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
              className={c("w-full h-4", { "w-3/4": isLastLine })}
            />
          );
        })}
      </Comp>
    );
  },
);
SkeletonText.displayName = "SkeletonText";
