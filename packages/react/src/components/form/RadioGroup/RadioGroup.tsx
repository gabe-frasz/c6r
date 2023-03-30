"use client";

import * as Primitive from "@radix-ui/react-radio-group";
import { CheckCircle, type IconProps } from "phosphor-react";
import { forwardRef } from "react";

import { c } from "@/utils";

export interface RadioGroupProps extends Primitive.RadioGroupProps {}

const Root = (props: RadioGroupProps) => (
  <Primitive.Root
    {...props}
    className={c("flex flex-col gap-2", props.className)}
  />
);

export interface RadioGroupItemProps extends Primitive.RadioGroupItemProps {}

const Item = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  (props, ref) => {
    return (
      <Primitive.Item
        {...props}
        ref={ref}
        className={c(
          "flex justify-between items-center gap-4 min-w-[160px] px-3 py-2 bg-base-200 font-medium rounded transition-colors outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-base-300 hover:opacity-90 data-[state=checked]:bg-primary-500 disabled:opacity-50",
          props.className,
        )}
      />
    );
  },
);
Item.displayName = "RadioGroup.Item";

export interface RadioGroupIndicatorProps extends IconProps {}

const Indicator = forwardRef<SVGSVGElement, RadioGroupIndicatorProps>(
  (props, ref) => {
    return (
      <Primitive.Indicator forceMount asChild>
        <CheckCircle
          size={24}
          {...props}
          ref={ref}
          className="opacity-0 transition-opacity data-[state=checked]:opacity-100"
        />
      </Primitive.Indicator>
    );
  },
);
Indicator.displayName = "RadioGroup.Indicator";

export const RadioGroup = {
  Root,
  Item,
  Indicator,
};
