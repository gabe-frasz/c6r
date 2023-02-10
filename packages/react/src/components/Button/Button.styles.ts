import { cva } from "class-variance-authority";

export const button = cva(
  "bg-blue-500 uppercase font-semibold rounded px-2 py-1",
  {
    variants: {
      variant: {
        default: ["px-2"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
