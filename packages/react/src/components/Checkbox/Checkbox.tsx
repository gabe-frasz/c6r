import { Transition } from "@headlessui/react";
import * as Primitive from "@radix-ui/react-checkbox";
import { VariantProps } from "class-variance-authority";
import { Check } from "phosphor-react";

import { c } from "@/utils";
import { indicator } from "./Checkbox.styles";

export interface CheckboxProps
  extends Primitive.CheckboxProps,
    VariantProps<typeof indicator> {}

export const Checkbox = ({
  checked = false,
  onCheckedChange,
  variant,
  className = "",
  ...props
}: CheckboxProps) => {
  const isIndeterminate = checked === "indeterminate" ? true : false;
  const showIndicator = isIndeterminate ? false : (checked as boolean);

  return (
    <Primitive.Root
      {...props}
      checked={checked}
      onCheckedChange={onCheckedChange}
      className={c(
        "w-6 h-6 bg-base-200 rounded overflow-hidden outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-300 focus:ring-offset-base-100",
        className,
      )}
    >
      <Transition
        show={showIndicator}
        enter="transition-opacity"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity"
        leaveTo="opacity-0"
      >
        <Primitive.Indicator forceMount asChild>
          <Check weight="bold" className={indicator({ variant })} />
        </Primitive.Indicator>
      </Transition>
    </Primitive.Root>
  );
};
