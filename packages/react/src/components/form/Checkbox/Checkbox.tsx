"use client";

import * as Primitive from "@radix-ui/react-checkbox";
import { VariantProps } from "class-variance-authority";
import { Check } from "phosphor-react";

import { c } from "@/utils";
import { forwardRef } from "react";
import { indicator } from "./Checkbox.styles";

export interface CheckboxProps
  extends Primitive.CheckboxProps,
    VariantProps<typeof indicator> {}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ variant, theme, ...props }, ref) => {
    return (
      <Primitive.Root
        {...props}
        ref={ref}
        className={c(
          "group w-6 h-6 bg-base-200 rounded overflow-hidden outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100",
          {
            "focus:ring-primary-300": theme === "primary",
            "focus:ring-secondary-300": theme === "secondary",
            "focus:ring-emerald-300": theme === "success",
          },
          props.className,
        )}
      >
        <Primitive.Indicator forceMount asChild>
          <Check weight="bold" className={indicator({ variant, theme })} />
        </Primitive.Indicator>
      </Primitive.Root>
    );
  },
);
Checkbox.displayName = "Checkbox";
