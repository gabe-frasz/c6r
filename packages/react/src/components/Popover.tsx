"use client";

import * as Primitive from "@radix-ui/react-popover";
import { forwardRef, type ElementRef } from "react";

import { c } from "@/utils";

export type PopoverProps = Primitive.PopoverProps;
export const Popover = Primitive.Root;

export type PopoverTriggerProps = Primitive.PopoverTriggerProps;
export const PopoverTrigger = Primitive.Trigger;

export type PopoverArrowProps = Primitive.PopoverArrowProps;
export const PopoverArrow = Primitive.Arrow;

export type PopoverContentProps = Primitive.PopoverContentProps;

export const PopoverContent = forwardRef<
  ElementRef<typeof Primitive.Content>,
  PopoverContentProps
>((props, ref) => {
  return (
    <Primitive.Portal>
      <Primitive.Content
        {...props}
        ref={ref}
        sideOffset={props.sideOffset ?? 5}
        className={c(
          "bg-base-200/70 text-base-content z-50 w-screen max-w-md rounded p-3 shadow backdrop-blur-md sm:w-fit",
          "data-[state=open]:data-[side=top]:animate-open-popup-top",
          "data-[state=open]:data-[side=right]:animate-open-popup-right",
          "data-[state=open]:data-[side=bottom]:animate-open-popup-bottom",
          "data-[state=open]:data-[side=left]:animate-open-popup-left",
          "data-[state=closed]:animate-close-popup",
          props.className,
        )}
      />
    </Primitive.Portal>
  );
});
PopoverContent.displayName = Primitive.Content.displayName;
