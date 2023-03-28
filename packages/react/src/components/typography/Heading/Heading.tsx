import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

import { c } from "@/utils";
import { heading } from "./Heading.styles";

export interface HeadingProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof heading> {
  asChild?: boolean;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ size, ...props }, ref) => {
    const Comp = props.asChild ? Slot : "h2";

    return (
      <Comp ref={ref} className={c(heading({ size }), props.className)}>
        {props.children}
      </Comp>
    );
  },
);
Heading.displayName = "Heading";
