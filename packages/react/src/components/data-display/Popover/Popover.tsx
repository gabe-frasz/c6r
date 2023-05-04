"use client";

import { Transition } from "@headlessui/react";
import * as Primitive from "@radix-ui/react-popover";
import { forwardRef, Fragment, useContext } from "react";

import { c } from "@/utils";
import { PopoverContext } from "./PopoverContext";

export interface PopoverProps extends Primitive.PopoverProps {
  open: boolean;
}

export const Popover = ({ open, ...props }: PopoverProps) => {
  return (
    <PopoverContext.Provider value={{ open }}>
      <Primitive.Root {...props} open={open} />
    </PopoverContext.Provider>
  );
};

export interface PopoverTriggerProps extends Primitive.PopoverTriggerProps {}

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>((props, ref) => {
  return <Primitive.Trigger {...props} ref={ref} />;
});
PopoverTrigger.displayName = "Popover.Trigger";

export interface PopoverContentProps extends Primitive.PopoverContentProps {
  arrowClassName?: string;
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  (props, ref) => {
    const { open } = useContext(PopoverContext);

    return (
      <Transition
        as={Fragment}
        show={open}
        unmount={false}
        enter="ease-out duration-100"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="ease-in duration-100"
        leaveTo="opacity-0 translate-y-1"
      >
        <Primitive.Content
          sideOffset={5}
          {...props}
          ref={ref}
          forceMount
          className={c(
            "w-screen max-w-md bg-base-200 fill-base-200 p-3 rounded shadow text-base-content z-50 sm:w-fit",
            props.className,
          )}
        >
          <Primitive.Arrow
            className={c("fill-inherit", props.arrowClassName)}
          />

          {props.children}
        </Primitive.Content>
      </Transition>
    );
  },
);
PopoverContent.displayName = "Popover.Content";
