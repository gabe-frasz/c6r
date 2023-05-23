import { cva } from "class-variance-authority";

export const switchRoot = cva(
  [
    "p-1 bg-base-200 rounded-full relative outline-none transition-all",
    "focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-300",
    "disabled:opacity-50",
  ],
  {
    variants: {
      size: {
        sm: "w-7 h-4",
        md: "w-9 h-5",
        lg: "w-11 h-6",
        xl: "w-[3.75rem] h-8",
      },
      theme: {
        primary: "data-[state=checked]:bg-primary-500 focus:ring-primary-500",
        secondary:
          "data-[state=checked]:bg-secondary-500 focus:ring-secondary-500",
        success: "data-[state=checked]:bg-emerald-500 focus:ring-emerald-500",
      },
    },
    defaultVariants: {
      size: "md",
      theme: "primary",
    },
  },
);

export const switchThumb = cva(
  "block bg-white rounded-full transition-transform duration-100 will-change-transform",
  {
    variants: {
      size: {
        sm: "w-2 h-2 data-[state=checked]:translate-x-3",
        md: "w-3 h-3 data-[state=checked]:translate-x-4",
        lg: "w-4 h-4 data-[state=checked]:translate-x-5",
        xl: "w-6 h-6 data-[state=checked]:translate-x-7",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
