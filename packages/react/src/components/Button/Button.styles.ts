import { cva } from "class-variance-authority";

export const button = cva(
  [
    "w-fit px-2 py-1 flex items-center gap-2 font-semibold uppercase border-2 rounded transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 outline-none",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-primary-500 text-primary-50 border-transparent hover:bg-primary-500/80 focus:ring-primary-500",
          "disabled:hover:bg-primary-500",
        ],
        outline: [
          "bg-transparent text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-primary-50 focus:ring-primary-500",
          "disabled:hover:bg-transparent disabled:hover:text-primary-500",
        ],
        ghost: [
          "bg-transparent text-base-content border-transparent hover:bg-neutral-500/30 focus:ring-neutral-500",
          "disabled:hover:bg-transparent",
        ],
        success: [
          "bg-emerald-500 text-emerald-900 border-transparent hover:bg-emerald-500/80 focus:ring-emerald-500",
          "disabled:hover:bg-emerald-500",
        ],
        error: [
          "bg-rose-500 text-rose-900 border-transparent hover:bg-rose-500/80 focus:ring-rose-500",
          "disabled:hover:bg-rose-500",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
