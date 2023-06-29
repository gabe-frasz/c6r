import { tv } from "tailwind-variants";

export const button = tv({
  base: [
    "w-fit px-3 py-2 flex justify-center items-center gap-2 text-sm font-medium rounded outline-none transition-all",
    "selection:bg-primary-400 selection:text-white",
    "active:scale-95",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-base-200",
    "disabled:opacity-50 disabled:active:scale-100",
  ],
  variants: {
    variant: {
      default: "",
      outline: "",
      ghost: "",
    },
    theme: {
      primary: [
        "bg-primary-500 text-white border-primary-500",
        "hover:bg-primary-500/80 focus-visible:ring-primary-500 disabled:hover:bg-primary-500",
      ],
      secondary: [
        "bg-secondary-500 text-white border-secondary-500",
        "hover:bg-secondary-500/80 focus-visible:ring-secondary-500 disabled:hover:bg-secondary-500",
      ],
      success: [
        "bg-success-500 text-white border-success-500",
        "hover:bg-success-500/80 focus-visible:ring-success-500 disabled:hover:bg-success-500",
      ],
      warning: [
        "bg-warning-500 text-white border-warning-500",
        "hover:bg-warning-500/80 focus-visible:ring-warning-500 disabled:hover:bg-warning-500",
      ],
      error: [
        "bg-error-500 text-white border-error-500",
        "hover:bg-error-500/80 focus-visible:ring-error-500 disabled:hover:bg-error-500",
      ],
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      theme: ["primary", "secondary", "success", "warning", "error"],
      className: "bg-transparent border-2 disabled:hover:bg-transparent",
    },
    {
      variant: "outline",
      theme: "primary",
      className: [
        "text-primary-500",
        "hover:bg-primary-500 hover:text-primary-50 focus-visible:ring-primary-500",
        "disabled:hover:text-primary-500",
      ],
    },
    {
      variant: "outline",
      theme: "secondary",
      className: [
        "text-secondary-500",
        "hover:bg-secondary-500 hover:text-secondary-50 focus-visible:ring-secondary-500",
        "disabled:hover:text-secondary-500",
      ],
    },
    {
      variant: "outline",
      theme: "success",
      className: [
        "text-success-500",
        "hover:bg-success-500 hover:text-success-50 focus-visible:ring-success-500",
        "disabled:hover:text-success-500",
      ],
    },
    {
      variant: "outline",
      theme: "warning",
      className: [
        "text-warning-500",
        "hover:bg-warning-500 hover:text-warning-50 focus-visible:ring-warning-500",
        "disabled:hover:text-warning-500",
      ],
    },
    {
      variant: "outline",
      theme: "error",
      className: [
        "text-error-500",
        "hover:bg-error-500 hover:text-error-50 focus-visible:ring-error-500",
        "disabled:hover:text-error-500",
      ],
    },
    {
      variant: "ghost",
      theme: ["primary", "secondary", "success", "warning", "error"],
      className: [
        "bg-transparent text-base-content",
        "hover:bg-neutral-500/30 focus-visible:ring-neutral-500",
        "disabled:hover:bg-transparent",
      ],
    },
  ],
  defaultVariants: {
    variant: "default",
    theme: "primary",
  },
});
