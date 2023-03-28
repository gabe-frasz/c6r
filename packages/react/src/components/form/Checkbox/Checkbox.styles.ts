import { cva } from "class-variance-authority";

export const indicator = cva(
  "w-full h-full p-0.5 opacity-0 group-data-[state=checked]:opacity-100 transition-opacity",
  {
    variants: {
      variant: {
        fill: "",
        light: "",
      },
      theme: {
        primary: "",
        secondary: "",
        success: "",
      },
    },
    compoundVariants: [
      {
        variant: "fill",
        theme: "primary",
        className: "text-white bg-primary-300",
      },
      {
        variant: "fill",
        theme: "secondary",
        className: "text-white bg-secondary-300",
      },
      {
        variant: "fill",
        theme: "success",
        className: "text-white bg-emerald-300",
      },
      {
        variant: "light",
        theme: "primary",
        className: "text-primary-500 bg-transparent",
      },
      {
        variant: "light",
        theme: "secondary",
        className: "text-secondary-500 bg-transparent",
      },
      {
        variant: "light",
        theme: "success",
        className: "text-emerald-500 bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "fill",
      theme: "primary",
    },
  },
);
