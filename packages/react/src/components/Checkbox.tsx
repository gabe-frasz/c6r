"use client";

import * as Primitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { forwardRef } from "react";

import { c } from "@/utils";

export interface CheckboxProps extends Primitive.CheckboxProps {
  variant?: "filled" | "light";
  theme?: "primary" | "secondary" | "success";
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ variant, theme, ...props }, ref) => {
    return (
      <Primitive.Root
        {...props}
        ref={ref}
        data-variant={variant ?? "filled"}
        data-theme={theme ?? "primary"}
        className={c(
          "bg-base-200 group h-6 w-6 overflow-hidden rounded outline-none",
          "focus-visible:ring-offset-base-100 focus-visible:ring-2 focus-visible:ring-offset-2",
          "data-[theme=primary]:focus-visible:ring-primary-300",
          "data-[theme=secondary]:focus-visible:ring-secondary-300",
          "data-[theme=success]:focus-visible:ring-success-300",
          props.className,
        )}
      />
    );
  },
);
Checkbox.displayName = Primitive.Root.displayName;

export type CheckboxIndicatorProps = Primitive.CheckboxIndicatorProps;

export const CheckboxIndicator = forwardRef<
  HTMLElement,
  CheckboxIndicatorProps
>(({ children, ...props }, ref) => {
  return (
    <Primitive.Indicator
      {...props}
      ref={ref}
      forceMount
      asChild
      className={c(
        "flex h-full w-full items-center justify-center p-0.5 opacity-0 transition-opacity",
        "group-data-[state=checked]:opacity-100",
        "group-data-[theme=primary]:bg-primary-300 group-data-[theme=primary]:text-primary-500",
        "group-data-[theme=secondary]:bg-secondary-300 group-data-[theme=secondary]:text-secondary-500",
        "group-data-[theme=success]:bg-success-300 group-data-[theme=success]:text-success-500",
        "group-data-[variant=light]:bg-transparent group-data-[variant=filled]:text-white",
        props.className,
      )}
    >
      {children ?? <Check strokeWidth={3} />}
    </Primitive.Indicator>
  );
});
CheckboxIndicator.displayName = Primitive.Indicator.displayName;
