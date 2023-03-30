import { cva } from "class-variance-authority";

export const switchRoot = cva(
  [
    "bg-base-200 rounded-full relative outline-none transition-colors",
    "focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-300",
    "disabled:opacity-50",
  ],
  {
    variants: {
      size: { sm: "w-8 h-4", md: "w-10 h-5", lg: "w-12 h-6", xl: "w-16 h-8" },
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
        sm: "w-3 h-3 translate-x-1 data-[state=checked]:translate-x-4",
        md: "w-4 h-4 translate-x-1 data-[state=checked]:translate-x-5",
        lg: "w-5 h-5 translate-x-1 data-[state=checked]:translate-x-6",
        xl: "w-7 h-7 translate-x-1 data-[state=checked]:translate-x-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
