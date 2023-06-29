"use client";

import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { type VariantProps } from "tailwind-variants";

import { c } from "@/utils";
import { button } from "./styles";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, theme, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        {...props}
        ref={ref}
        className={c(button({ variant, theme }), props.className)}
      />
    );
  },
);
Button.displayName = "Button";
