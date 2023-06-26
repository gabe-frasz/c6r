"use client";

import * as Primitive from "@radix-ui/react-radio-group";
import { CheckCircle } from "phosphor-react";
import { forwardRef } from "react";

import { c } from "@/utils";

export type RadioGroupProps = Primitive.RadioGroupProps

export const RadioGroup = (props: RadioGroupProps) => (
  <Primitive.Root
    {...props}
    className={c("flex flex-col gap-2", props.className)}
  />
);

export type RadioGroupItemProps = Primitive.RadioGroupItemProps

export const RadioGroupItem = forwardRef<
  HTMLButtonElement,
  RadioGroupItemProps
>((props, ref) => {
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
});
RadioGroupItem.displayName = "RadioGroup.Item";

export type RadioGroupIndicatorProps = Primitive.RadioGroupIndicatorProps

export const RadioGroupIndicator = forwardRef<
  HTMLSpanElement,
  RadioGroupIndicatorProps
>((props, ref) => {
  return (
    <Primitive.Indicator
      {...props}
      ref={ref}
      forceMount
      className={c(
        "opacity-0 transition-opacity data-[state=checked]:opacity-100",
        props.className,
      )}
    >
      {props.children ? props.children : <CheckCircle size={24} />}
    </Primitive.Indicator>
  );
});
RadioGroupIndicator.displayName = "RadioGroup.Indicator";
