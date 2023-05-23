"use client";

import * as Primitive from "@radix-ui/react-popover";
import { forwardRef } from "react";

import { c } from "@/utils";

export interface PopoverProps extends Primitive.PopoverProps {}

export const Popover = (props: PopoverProps) => <Primitive.Root {...props} />;

export interface PopoverTriggerProps extends Primitive.PopoverTriggerProps {}

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>((props, ref) => <Primitive.Trigger {...props} ref={ref} />);
PopoverTrigger.displayName = "Popover.Trigger";

export interface PopoverContentProps extends Primitive.PopoverContentProps {
  arrowClassName?: string;
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  (props, ref) => {
    return (
      <Primitive.Portal>
        <Primitive.Content
          {...props}
          ref={ref}
          sideOffset={props.sideOffset ?? 5}
          className={c(
            "w-screen max-w-md bg-base-200 fill-base-200 p-3 rounded shadow text-base-content z-50 sm:w-fit",
            "data-[state=open]:animate-open-popover data-[state=closed]:animate-close-popover",
            props.className,
          )}
        >
          <Primitive.Arrow
            className={c("fill-inherit", props.arrowClassName)}
          />

          {props.children}
        </Primitive.Content>
      </Primitive.Portal>
    );
  },
);
PopoverContent.displayName = "Popover.Content";
