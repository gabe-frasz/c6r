"use client";

import * as Primitive from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

import { c } from "@/utils";

export interface TooltipProps extends Primitive.TooltipProps {}

export interface TooltipProviderProps extends Primitive.TooltipProviderProps {}

export const TooltipProvider = (props: TooltipProviderProps) => (
  <Primitive.Provider {...props} />
);

export const Tooltip = (props: TooltipProps) => <Primitive.Root {...props} />;

export interface TooltipTriggerProps extends Primitive.TooltipTriggerProps {}

export const TooltipTrigger = forwardRef<
  HTMLButtonElement,
  TooltipTriggerProps
>((props, ref) => <Primitive.Trigger {...props} ref={ref} />);
TooltipTrigger.displayName = "Tooltip.Trigger";

export interface TooltipContentProps extends Primitive.TooltipContentProps {}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (props, ref) => {
    return (
      <Primitive.Portal>
        <Primitive.Content
          {...props}
          ref={ref}
          sideOffset={props.sideOffset ?? 15}
          className={c(
            "max-w-xs px-3 py-2 bg-base-200 text-sm font-medium select-none rounded",
            "data-[state=open]:animate-open-tooltip data-[state=closed]:animate-close-tooltip",
            props.className,
          )}
        />
      </Primitive.Portal>
    );
  },
);
TooltipContent.displayName = "Tooltip.Content";
