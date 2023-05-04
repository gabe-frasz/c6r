"use client";

import { Transition } from "@headlessui/react";
import * as Primitive from "@radix-ui/react-tooltip";
import { forwardRef, Fragment, useContext } from "react";

import { c } from "@/utils";
import { TooltipContext } from "./TooltipContext";

export interface TooltipProps extends Primitive.TooltipProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export interface TooltipProviderProps extends Primitive.TooltipProviderProps {}

export const TooltipProvider = (props: TooltipProviderProps) => (
  <Primitive.Provider {...props} />
);

export const Tooltip = ({ open, ...props }: TooltipProps) => {
  return (
    <TooltipContext.Provider value={{ open }}>
      <Primitive.Root {...props} open={open} />
    </TooltipContext.Provider>
  );
};

export interface TooltipTriggerProps extends Primitive.TooltipTriggerProps {}

export const TooltipTrigger = forwardRef<
  HTMLButtonElement,
  TooltipTriggerProps
>((props, ref) => {
  return <Primitive.Trigger {...props} ref={ref} />;
});
TooltipTrigger.displayName = "Tooltip.Trigger";

export interface TooltipContentProps extends Primitive.TooltipContentProps {}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (props, ref) => {
    const { open } = useContext(TooltipContext);

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
          sideOffset={15}
          {...props}
          ref={ref}
          forceMount
          className={c(
            "max-w-xs px-3 py-2 bg-base-200 text-sm font-medium select-none rounded",
            props.className,
          )}
        />
      </Transition>
    );
  },
);
TooltipContent.displayName = "Tooltip.Content";
