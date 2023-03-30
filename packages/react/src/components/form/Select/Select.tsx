"use client";

import * as Primitive from "@radix-ui/react-select";
import { CaretDown, CaretUp, Check } from "phosphor-react";
import { forwardRef } from "react";

import {
  Button,
  Divider as LocalDivider,
  Text,
  type ButtonProps,
  type DividerProps,
} from "@/components";
import { c } from "@/utils";

export interface SelectProps extends Primitive.SelectProps {}

const Root = (props: SelectProps) => <Primitive.Root {...props} />;

export interface SelectTriggerProps extends ButtonProps {
  placeholder: string;
}

const Trigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (props, ref) => {
    return (
      <Primitive.Trigger asChild>
        <Button
          {...props}
          ref={ref}
          className={c(
            "min-w-[160px] justify-between gap-4 bg-base-200 text-base-content",
            props.className,
          )}
        >
          <Primitive.Value placeholder={props.placeholder} />

          <Primitive.Icon asChild>
            <CaretDown />
          </Primitive.Icon>
        </Button>
      </Primitive.Trigger>
    );
  },
);
Trigger.displayName = "Select.Trigger";

export interface SelectContentProps extends Primitive.SelectContentProps {}

const Content = forwardRef<HTMLDivElement, SelectContentProps>((props, ref) => {
  return (
    <Primitive.Content
      {...props}
      ref={ref}
      className={c("bg-base-200 rounded z-50", props.className)}
    >
      <Primitive.ScrollUpButton className="flex justify-center py-1 text-primary-500">
        <CaretUp weight="bold" size={16} />
      </Primitive.ScrollUpButton>

      <Primitive.Viewport className="p-2">{props.children}</Primitive.Viewport>

      <Primitive.ScrollDownButton className="flex justify-center py-1 text-primary-500">
        <CaretDown weight="bold" size={16} />
      </Primitive.ScrollDownButton>
    </Primitive.Content>
  );
});
Content.displayName = "Select.Content";

export interface SelectGroupProps extends Primitive.SelectGroupProps {
  label: string;
}

const Group = forwardRef<HTMLDivElement, SelectGroupProps>((props, ref) => {
  return (
    <Primitive.Group {...props} ref={ref}>
      <Primitive.Label asChild>
        <Text className="block mb-2 px-6 text-sm font-semibold text-base-content select-none">
          {props.label}
        </Text>
      </Primitive.Label>

      {props.children}
    </Primitive.Group>
  );
});
Group.displayName = "Select.Group";

export interface SelectItemProps extends Primitive.SelectItemProps {}

const Item = forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
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
});
Item.displayName = "Select.Item";

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  return <LocalDivider {...props} ref={ref} />;
});
Divider.displayName = "Select.Divider";

export const Select = {
  Root,
  Trigger,
  Content,
  Group,
  Item,
  Divider,
};
