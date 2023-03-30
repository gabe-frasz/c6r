"use client";

import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { Spinner } from "@/components";
import { c } from "@/utils";
import { button } from "./Button.styles";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, theme, ...props }, ref) => {
    const isButtonDisabled = props.isLoading || props.disabled;

    return (
      <button
        {...props}
        ref={ref}
        disabled={isButtonDisabled}
        className={c(button({ variant, theme }), props.className)}
      >
        {props.isLoading ? (
          <>
            <Spinner /> Please wait
          </>
        ) : (
          props.children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
