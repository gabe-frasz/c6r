import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";

import { c } from "@/utils";
import { heading } from "./Heading.styles";

export interface HeadingProps extends VariantProps<typeof heading> {
  className?: string;
  asChild?: boolean;
  children?: ReactNode;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ size, className, asChild, children }, ref) => {
    const Comp = asChild ? Slot : "h2";

    return (
      <Comp ref={ref} className={c(heading({ size, className }))}>
        {children}
      </Comp>
    );
  },
);

Heading.displayName = "Heading";
