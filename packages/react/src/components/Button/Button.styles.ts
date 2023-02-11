import { cva } from "class-variance-authority";

export const button = cva(
  [
    "w-fit px-2 py-1 flex items-center gap-2 font-semibold uppercase border-2 rounded transition-colors",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-primary-500 text-primary-50 border-transparent hover:bg-primary-500/80",
          "disabled:hover:bg-primary-500",
        ],
        outline: [
          "bg-transparent text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-primary-50",
          "disabled:hover:bg-transparent disabled:hover:text-primary-500",
        ],
        ghost: [
          "bg-transparent text-black border-transparent hover:bg-neutral-500/30 dark:text-white",
          "disabled:hover:bg-transparent",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
