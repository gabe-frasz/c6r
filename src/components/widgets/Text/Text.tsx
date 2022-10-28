import { Slot } from "@radix-ui/react-slot";
import c from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "sm" | "base" | "lg";
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

export const Text = ({
  size = "base",
  className = "",
  asChild = false,
  children,
}: TextProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={c(
        "text-gray-100 font-sans",
        {
          "text-sm": size === "sm",
          "text-base": size === "base",
          "text-md": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};
