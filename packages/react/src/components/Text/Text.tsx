import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { c } from "@/utils";
import { text } from "./Text.styles";

export interface TextProps extends VariantProps<typeof text> {
  className?: string;
  asChild?: boolean;
  children: ReactNode;
}

export const Text = ({
  size,
  weight,
  className,
  asChild,
  children,
}: TextProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp className={c(text({ size, weight, className }))}>{children}</Comp>
  );
};
