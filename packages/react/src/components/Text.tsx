import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type HTMLAttributes } from "react";

import { c } from "@/utils";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        {...props}
        ref={ref}
        className={c(
          "text-base-content selection:bg-primary-400/50 selection:text-white",
          props.className,
        )}
      />
    );
  },
);
Text.displayName = "Text";
