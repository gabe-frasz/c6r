import { cva } from "class-variance-authority";

export const button = cva(
  [
    "w-fit px-2 py-1 flex justify-center items-center gap-2 text-sm font-semibold selection:bg-primary-400 uppercase rounded outline-none transition-colors",
    "focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-200",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2",
        ghost: "",
      },
      theme: {
        primary: [
          "bg-primary-500 text-white border-primary-500",
          "hover:bg-primary-500/80 focus:ring-primary-500 disabled:hover:bg-primary-500",
        ],
        secondary: [
          "bg-secondary-500 text-white border-secondary-500",
          "hover:bg-secondary-500/80 focus:ring-secondary-500 disabled:hover:bg-secondary-500",
        ],
        success: [
          "bg-emerald-500 text-white border-emerald-500",
          "hover:bg-emerald-500/80 focus:ring-emerald-500 disabled:hover:bg-emerald-500",
        ],
        error: [
          "bg-rose-500 text-white border-rose-500",
          "hover:bg-rose-500/80 focus:ring-rose-500 disabled:hover:bg-rose-500",
        ],
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        theme: "primary",
        className: [
          "bg-transparent text-primary-500",
          "hover:bg-primary-500 hover:text-primary-50 focus:ring-primary-500",
          "disabled:hover:text-primary-500 disabled:hover:bg-transparent disabled:hover:bg-transparent",
        ],
      },
      {
        variant: "outline",
        theme: "secondary",
        className: [
          "bg-transparent text-secondary-500",
          "hover:bg-secondary-500 hover:text-secondary-50 focus:ring-secondary-500",
          "disabled:hover:text-secondary-500 disabled:hover:bg-transparent disabled:hover:bg-transparent",
        ],
      },
      {
        variant: "outline",
        theme: "success",
        className: [
          "bg-transparent text-emerald-500",
          "hover:bg-emerald-500 hover:text-emerald-50 focus:ring-emerald-500",
          "disabled:hover:text-emerald-500 disabled:hover:bg-transparent disabled:hover:bg-transparent",
        ],
      },
      {
        variant: "outline",
        theme: "error",
        className: [
          "bg-transparent text-rose-500",
          "hover:bg-rose-500 hover:text-rose-50 focus:ring-rose-500",
          "disabled:hover:text-rose-500 disabled:hover:bg-transparent disabled:hover:bg-transparent",
        ],
      },
      {
        variant: "ghost",
        theme: ["primary", "secondary", "success", "error"],
        className: [
          "bg-transparent text-base-content",
          "hover:bg-neutral-500/30 focus:ring-neutral-500",
          "disabled:hover:bg-transparent",
        ],
      },
    ],
    defaultVariants: {
      variant: "default",
      theme: "primary",
    },
  },
);
