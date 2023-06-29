"use client";

import * as Primitive from "@radix-ui/react-select";
import { CaretDown, CaretUp, Check } from "phosphor-react";
import { forwardRef } from "react";

import { Text } from "@/components";
import { c } from "@/utils";

export type SelectProps = Primitive.SelectProps;
export const Select = Primitive.Root;

export type SelectTriggerProps = Primitive.SelectTriggerProps;
export const SelectTrigger = Primitive.Trigger;

export type SelectValueProps = Primitive.SelectValueProps;
export const SelectValue = Primitive.Value;

export type SelectIconProps = Primitive.SelectIconProps;

export const SelectIcon = (props: SelectIconProps) => {
  return (
    <Primitive.Icon {...props}>
      {props.children ?? <CaretDown weight="bold" />}
    </Primitive.Icon>
  );
};

export type SelectContentProps = Primitive.SelectContentProps;

export const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  (props, ref) => {
    return (
      <Primitive.Content
        {...props}
        ref={ref}
        className={c("bg-base-200 z-50 rounded", props.className)}
      >
        <Primitive.ScrollUpButton className="text-primary-500 flex justify-center py-1">
          <CaretUp weight="bold" size={16} />
        </Primitive.ScrollUpButton>

        <Primitive.Viewport className="p-2">
          {props.children}
        </Primitive.Viewport>

        <Primitive.ScrollDownButton className="text-primary-500 flex justify-center py-1">
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
              "text-base-content mb-2 block select-none px-6 text-sm font-semibold",
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

export type SelectItemProps = Primitive.SelectItemProps;

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  (props, ref) => {
    return (
      <Primitive.Item
        {...props}
        ref={ref}
        className="text-base-content/70 data-[highlighted]:bg-primary-500 data-[highlighted]:text-primary-50 data-[highlighted]:data-[state=checked]:text-primary-50 data-[state=checked]:text-primary-500 relative flex cursor-pointer select-none items-center rounded py-0.5 pl-6 pr-8 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:cursor-default data-[disabled]:opacity-30"
      >
        <Primitive.ItemIndicator className="absolute left-0 inline-flex w-6 items-center justify-center">
          <Check weight="bold" />
        </Primitive.ItemIndicator>

        <Primitive.ItemText asChild>
          <Text className="font-medium text-inherit">{props.children}</Text>
        </Primitive.ItemText>
      </Primitive.Item>
    );
  },
);
SelectItem.displayName = "Select.Item";
