import { Slot } from "@radix-ui/react-slot";
import c from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  asChild?: boolean;
}

export const Button = ({
  className,
  asChild,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={c(
        "w-full px-4 py-3 bg-cyan-500 text-black text-sm font-semibold rounded transition-colors",
        "hover:bg-cyan-300",
        "focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none",
        className
      )}
    >
      {children}
    </Comp>
  );
};
