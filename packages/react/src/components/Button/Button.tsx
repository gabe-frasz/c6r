import { VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

import { c } from "@/utils";
import { button } from "./Button.styles";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          type: "spring",
          bounce: 0.7,
        },
      }}
      className={c(button({ variant, className }))}
    >
      Hello World
    </motion.button>
  );
}
