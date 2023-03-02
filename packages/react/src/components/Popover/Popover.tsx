import { Transition } from "@headlessui/react";
import * as Primitive from "@radix-ui/react-popover";
import { forwardRef, Fragment } from "react";

import { c } from "@/utils";

export interface PopoverRootProps extends Primitive.PopoverProps {}

const Root = forwardRef<HTMLElement, PopoverRootProps>(
  ({ children, ...props }) => {
    return <Primitive.Root {...props}>{children}</Primitive.Root>;
  },
);

Root.displayName = "Popover.Root";

export interface PopoverTriggerProps extends Primitive.PopoverTriggerProps {}

const Trigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ children, ...props }, ref) => {
    return (
      <Primitive.Trigger {...props} ref={ref}>
        {children}
      </Primitive.Trigger>
    );
  },
);

Trigger.displayName = "Popover.Trigger";

export interface PopoverContentProps extends Primitive.PopoverContentProps {
  open: boolean;
}

const Content = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ open, className, children, ...props }, ref) => {
    return (
      <Transition
        show={open}
        as={Fragment}
        enter="ease-out duration-1000"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-100"
        leaveTo="opacity-0 scale-95"
      >
        <Primitive.Content
          {...props}
          ref={ref}
          forceMount
          className={c(
            "bg-base-200 p-3 rounded shadow text-base-content",
            className,
          )}
        >
          <Primitive.Arrow className="fill-base-200" />

          {children}
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
