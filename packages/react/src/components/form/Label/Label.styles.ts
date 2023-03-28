import { cva } from "class-variance-authority";

export const label = cva("flex gap-2 text-base-content", {
  variants: {
    flex: {
      column: "flex-col",
      row: "flex-row items-center",
    },
  },
  defaultVariants: {
    flex: "column",
  },
});
