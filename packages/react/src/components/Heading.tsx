import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type HTMLAttributes } from "react";

import { c } from "@/utils";

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "h2";

    return (
      <Comp
        {...props}
        ref={ref}
        className={c(
          "text-base-content selection:bg-primary-400/50 text-2xl font-semibold leading-tight selection:text-white",
          props.className,
        )}
      />
    );
  },
);
Heading.displayName = "Heading";
