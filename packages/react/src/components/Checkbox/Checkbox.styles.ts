import { cva } from "class-variance-authority";

export const indicator = cva("w-full h-full p-0.5", {
  variants: {
    variant: {
      fill: "text-white bg-primary-300",
      light: "text-primary-300",
      success: "text-white bg-emerald-500",
    },
  },
  defaultVariants: {
    variant: "fill",
  },
});
