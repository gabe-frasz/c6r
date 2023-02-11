import { cva } from "class-variance-authority";

export const text = cva("text-base-content", {
  variants: {
    size: {
      xxs: "text-[0.625rem]",
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    weight: {
      "extra-light": "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      "extra-bold": "font-extrabold",
      black: "font-black",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
  },
});
