"use client";

import { Transition } from "@headlessui/react";
import * as Primitive from "@radix-ui/react-popover";
import { forwardRef, Fragment, useContext } from "react";

import { c } from "@/utils";
import { PopoverContext } from "./PopoverContext";

export interface PopoverProps extends Primitive.PopoverProps {
  open: boolean;
}

const Root = (props: PopoverProps) => {
  const context = {
    open: props.open,
  };

  return (
    <PopoverContext.Provider value={context}>
      <Primitive.Root {...props} />
    </PopoverContext.Provider>
  );
};

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
          <Primitive.Arrow className="fill-inherit" />

          {props.children}
        </Primitive.Content>
      </Transition>
    );
  },
);
Content.displayName = "Popover.Content";

export const Popover = {
  Root,
  Trigger,
  Content,
};
