"use client";

import * as Primitive from "@radix-ui/react-select";
import { CaretDown, CaretUp, Check } from "phosphor-react";
import { forwardRef } from "react";

import { Text } from "@/components";
import { c } from "@/utils";

export type SelectProps = Primitive.SelectProps

export const Select = (props: SelectProps) => <Primitive.Root {...props} />;

export type SelectTriggerProps = Primitive.SelectTriggerProps

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (props, ref) => <Primitive.Trigger {...props} ref={ref} />,
);
SelectTrigger.displayName = "Select.Trigger";

export type SelectValueProps = Primitive.SelectValueProps

export const SelectValue = forwardRef<HTMLSpanElement, SelectValueProps>(
  (props, ref) => <Primitive.Value {...props} ref={ref} />,
);
SelectValue.displayName = "Select.Value";

export type SelectIconProps = Primitive.SelectIconProps

export const SelectIcon = (props: SelectIconProps) => {
  return (
    <Primitive.Icon {...props}>
      {props.children ? props.children : <CaretDown weight="bold" />}
    </Primitive.Icon>
  );
};

export type SelectContentProps = Primitive.SelectContentProps

export const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  (props, ref) => {
    return (
      <Primitive.Content
        {...props}
        ref={ref}
        className={c("bg-base-200 rounded z-50", props.className)}
      >
        <Primitive.ScrollUpButton className="flex justify-center py-1 text-primary-500">
          <CaretUp weight="bold" size={16} />
        </Primitive.ScrollUpButton>

        <Primitive.Viewport className="p-2">
          {props.children}
        </Primitive.Viewport>

        <Primitive.ScrollDownButton className="flex justify-center py-1 text-primary-500">
          <CaretDown weight="bold" size={16} />
        </Primitive.ScrollDownButton>
      </Primitive.Content>
    );
  },
);
SelectContent.displayName = "Select.Content";

export interface SelectGroupProps extends Primitive.SelectGroupProps {
  label: string;
  labelClassName?: string;
}

export const SelectGroup = forwardRef<HTMLDivElement, SelectGroupProps>(
  (props, ref) => {
    return (
      <Primitive.Group {...props} ref={ref}>
        <Primitive.Label asChild>
          <Text
            className={c(
              "block mb-2 px-6 text-sm font-semibold text-base-content select-none",
              props.labelClassName,
            )}
          >
            {props.label}
          </Text>
        </Primitive.Label>

        {props.children}
      </Primitive.Group>
    );
  },
);
SelectGroup.displayName = "Select.Group";

export type SelectItemProps = Primitive.SelectItemProps

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  (props, ref) => {
    return (
      <Primitive.Item
        {...props}
        ref={ref}
        className="relative flex items-center pr-8 pl-6 py-0.5 text-sm select-none text-base-content/70 rounded cursor-pointer outline-none data-[disabled]:cursor-default data-[disabled]:opacity-30 data-[disabled]:pointer-events-none data-[highlighted]:bg-primary-500 data-[highlighted]:text-primary-50 data-[highlighted]:data-[state=checked]:text-primary-50 data-[state=checked]:text-primary-500 transition-colors"
      >
        <Primitive.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center">
          <Check weight="bold" />
        </Primitive.ItemIndicator>

        <Primitive.ItemText asChild>
          <Text className="text-inherit font-medium">{props.children}</Text>
        </Primitive.ItemText>
      </Primitive.Item>
    );
  },
);
SelectItem.displayName = "Select.Item";
