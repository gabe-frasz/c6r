import { tv } from "tailwind-variants";

export const label = tv({
  base: "flex gap-2 text-base-content",
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
