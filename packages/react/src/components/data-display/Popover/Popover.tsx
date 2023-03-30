"use client";

import * as Primitive from "@radix-ui/react-popover";
import { forwardRef } from "react";

import { c } from "@/utils";

export interface PopoverProps extends Primitive.PopoverProps {}

const Root = (props: PopoverProps) => <Primitive.Root {...props} />;

export interface PopoverTriggerProps extends Primitive.PopoverTriggerProps {}

const Trigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  (props, ref) => {
    return <Primitive.Trigger {...props} ref={ref} />;
  },
);
Trigger.displayName = "Popover.Trigger";

export interface PopoverContentProps extends Primitive.PopoverContentProps {}

const Content = forwardRef<HTMLDivElement, PopoverContentProps>(
  (props, ref) => {
    return (
      <Primitive.Content
        sideOffset={5}
        {...props}
        ref={ref}
        className={c(
          "w-screen max-w-md bg-base-200 fill-base-200 p-3 rounded shadow text-base-content z-50 sm:w-fit",
          props.className,
        )}
      >
        <Primitive.Arrow className="fill-inherit" />

        {props.children}
      </Primitive.Content>
    );
  },
);
Content.displayName = "Popover.Content";

export const Popover = {
  Root,
  Trigger,
  Content,
};
