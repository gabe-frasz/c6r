import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type HTMLAttributes } from "react";

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
        className={c("animate-pulse rounded bg-neutral-700", props.className)}
      />
    );
  },
);
Skeleton.displayName = "Skeleton";
