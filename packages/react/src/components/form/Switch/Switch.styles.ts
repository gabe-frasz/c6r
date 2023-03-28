import { cva } from "class-variance-authority";

export const switchRoot = cva(
  "bg-base-200 rounded-full relative outline-none transition-colors disabled:opacity-50",
  {
    variants: {
      size: { sm: "w-10 h-5", md: "w-12 h-6", lg: "w-16 h-8" },
      theme: {
        primary: "data-[state=checked]:bg-primary-500",
        secondary: "data-[state=checked]:bg-secondary-500",
        success: "data-[state=checked]:bg-emerald-500",
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
        sm: "w-4 h-4 translate-x-1 data-[state=checked]:translate-x-5",
        md: "w-5 h-5 translate-x-1 data-[state=checked]:translate-x-6",
        lg: "w-7 h-7 translate-x-1 data-[state=checked]:translate-x-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
