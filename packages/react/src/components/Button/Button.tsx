"use client"

import { VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "framer-motion";
import { CircleNotch } from "phosphor-react";
import { forwardRef } from "react";

import { c } from "@/utils";
import { button } from "./Button.styles";
import { variants } from "./variants";

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      isLoading,
      disabled,
      className,
      children,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    return (
      <motion.button
        {...props}
        ref={ref}
        disabled={isLoading || disabled}
        variants={variants}
        initial="initial"
        whileTap={disabled ? "disabled" : "hover"}
        className={c(button({ variant, className }))}
      >
        {isLoading ? (
          <>
            <CircleNotch className="w-4 h-4 animate-spin" /> Please wait
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
