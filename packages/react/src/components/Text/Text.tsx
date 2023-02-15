import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { forwardRef, ReactNode } from "react";

import { c } from "@/utils";
import { text } from "./Text.styles";

export interface TextProps extends VariantProps<typeof text> {
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ size, weight, className, asChild, children }, ref) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp ref={ref} className={c(text({ size, weight, className }))}>
        {children}
      </Comp>
    );
  },
);

Text.displayName = "Text";
