"use client";

import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

import { c } from "@/utils";
import { text } from "./Text.styles";

export interface TextProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof text> {
  asChild?: boolean;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ size, weight, ...props }, ref) => {
    const Comp = props.asChild ? Slot : "span";

    return (
      <Comp ref={ref} className={c(text({ size, weight }), props.className)}>
        {props.children}
      </Comp>
    );
  },
);

Text.displayName = "Text";
