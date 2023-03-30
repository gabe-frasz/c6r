"use client";

import { Transition } from "@headlessui/react";
import * as Primitive from "@radix-ui/react-tooltip";
import { forwardRef, Fragment, useContext } from "react";

import { Button, type ButtonProps } from "@/components";
import { c } from "@/utils";
import { TooltipContext } from "./TooltipContext";

export interface TooltipProps extends Primitive.TooltipProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Provider = Primitive.Provider;

const Root = (props: TooltipProps) => {
  const context = {
    open: props.open,
  };

  return (
    <TooltipContext.Provider value={context}>
      <Primitive.Root {...props} />
    </TooltipContext.Provider>
  );
};

export interface TooltipTriggerProps extends ButtonProps {}

const Trigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  (props, ref) => {
    return (
      <Primitive.Trigger asChild>
        <Button
          variant="ghost"
          {...props}
          ref={ref}
          className={c("rounded-full", props.className)}
        />
      </Primitive.Trigger>
    );
  },
);
Trigger.displayName = "Tooltip.Trigger";

export interface TooltipContentProps extends Primitive.TooltipContentProps {}

const Content = forwardRef<HTMLDivElement, TooltipContentProps>(
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
Content.displayName = "Tooltip.Content";

export const Tooltip = {
  Provider,
  Root,
  Trigger,
  Content,
};
