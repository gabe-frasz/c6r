"use client";

import * as Primitive from "@radix-ui/react-checkbox";
import { VariantProps } from "class-variance-authority";
import { Check } from "phosphor-react";

import { c } from "@/utils";
import { forwardRef, useContext } from "react";
import { indicator } from "./Checkbox.styles";
import { CheckboxContext } from "./CheckboxContext";

export interface CheckboxProps
  extends Primitive.CheckboxProps,
    VariantProps<typeof indicator> {}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ variant, theme, ...props }, ref) => {
    return (
      <CheckboxContext.Provider
        value={{
          variant,
          theme,
        }}
      >
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
        />
      </CheckboxContext.Provider>
    );
  },
);
Checkbox.displayName = "Checkbox";

export interface CheckboxIndicatorProps
  extends Primitive.CheckboxIndicatorProps {}

export const CheckboxIndicator = forwardRef<
  HTMLElement,
  CheckboxIndicatorProps
>(({ children, ...props }, ref) => {
  const { variant, theme } = useContext(CheckboxContext);

  return (
    <Primitive.Indicator
      {...props}
      ref={ref}
      forceMount
      asChild
      className={c(indicator({ variant, theme }), props.className)}
    >
      {children ? children : <Check weight="bold" />}
    </Primitive.Indicator>
  );
});
CheckboxIndicator.displayName = "Checkbox.Indicator";
