"use client";

import { VariantProps } from "class-variance-authority";
import { HTMLMotionProps, motion } from "framer-motion";
import { CircleNotch } from "phosphor-react";
import { forwardRef } from "react";

import { c } from "@/utils";
import { variants } from "./animation-variants";
import { button } from "./Button.styles";

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, theme, className, ...props }, ref) => {
    const isButtonDisabled = props.isLoading || props.disabled;

    return (
      <motion.button
        {...props}
        ref={ref}
        disabled={isButtonDisabled}
        variants={variants}
        initial="initial"
        whileTap={isButtonDisabled ? "disabled" : "active"}
        className={c(button({ variant, theme }), className)}
      >
        {props.isLoading ? (
          <>
            <CircleNotch className="w-4 h-4 animate-spin" /> Please wait
          </>
        ) : (
          props.children
        )}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
