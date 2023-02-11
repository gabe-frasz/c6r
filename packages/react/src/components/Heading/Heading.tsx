import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { c } from "@/utils";
import { heading } from "./Heading.styles";

export interface HeadingProps extends VariantProps<typeof heading> {
  className?: string;
  asChild?: boolean;
  children?: ReactNode;
}

export const Heading = ({
  size,
  className,
  asChild,
  children,
}: HeadingProps) => {
  const Comp = asChild ? Slot : "h2";

  return <Comp className={c(heading({ size, className }))}>{children}</Comp>;
};
