import * as Primitive from "@radix-ui/react-checkbox";
import { VariantProps } from "class-variance-authority";
import { Check } from "phosphor-react";

import { c } from "@/utils";
import { indicator } from "./Checkbox.styles";

export interface CheckboxProps
  extends Primitive.CheckboxProps,
    VariantProps<typeof indicator> {}

export const Checkbox = ({
  variant,
  className = "",
  ...props
}: CheckboxProps) => {
  return (
    <Primitive.Root
      {...props}
      className={c(
        "group w-6 h-6 bg-base-200 rounded overflow-hidden outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100",
        {
          "focus:ring-primary-300": variant !== "success",
          "focus:ring-emerald-300": variant === "success",
        },
        className,
      )}
    >
      <Primitive.Indicator forceMount asChild>
        <Check weight="bold" className={indicator({ variant })} />
      </Primitive.Indicator>
    </Primitive.Root>
  );
};
