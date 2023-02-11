import { cva } from "class-variance-authority";

export const heading = cva("text-base-content leading-tight font-semibold", {
  variants: {
    size: {
      sm: "text-xl",
      base: "text-2xl",
      lg: "text-4xl",
      "2xl": "text-5xl",
      "3xl": "text-6xl",
      "4xl": "text-7xl",
      "5xl": "text-8xl",
      "6xl": "text-9xl",
    },
  },
  defaultVariants: {
    size: "base",
  },
});
