import { Variants } from "framer-motion";

export const variants: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 0.95,
    transition: {
      type: "spring",
      bounce: 0.7,
    },
  },
  disabled: {
    scale: 1,
  },
};
