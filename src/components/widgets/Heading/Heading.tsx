import { Slot } from "@radix-ui/react-slot";
import c from "clsx";
import { ReactNode } from "react";

export interface HeadingProps {
  size?: "sm" | "base" | "lg";
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

export const Heading = ({
  size = "base",
  className = "",
  asChild = false,
  children,
}: HeadingProps) => {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={c(
        "text-gray-100 font-bold font-sans",
        {
          "text-lg": size === "sm",
          "text-xl": size === "base",
          "text-2xl": size === "lg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
};
