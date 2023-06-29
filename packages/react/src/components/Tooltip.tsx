"use client";

import * as Primitive from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

import { c } from "@/utils";

export type TooltipProviderProps = Primitive.TooltipProviderProps;
export const TooltipProvider = Primitive.Provider;

export type TooltipProps = Primitive.TooltipProps;
export const Tooltip = Primitive.Root;

export type TooltipTriggerProps = Primitive.TooltipTriggerProps;
export const TooltipTrigger = Primitive.Trigger;

export type TooltipContentProps = Primitive.TooltipContentProps;

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (props, ref) => {
    return (
      <Primitive.Portal>
        <Primitive.Content
          {...props}
          ref={ref}
          sideOffset={props.sideOffset ?? 15}
          className={c(
            "bg-base-200/70 max-w-xs select-none rounded px-3 py-2 text-sm font-medium backdrop-blur-md",
            "data-[state=delayed-open]:data-[side=top]:animate-open-popup-top",
            "data-[state=delayed-open]:data-[side=right]:animate-open-popup-right",
            "data-[state=delayed-open]:data-[side=bottom]:animate-open-popup-bottom",
            "data-[state=delayed-open]:data-[side=left]:animate-open-popup-left",
            "data-[state=closed]:animate-close-popup",
            props.className,
          )}
        />
      </Primitive.Portal>
    );
  },
);
TooltipContent.displayName = Primitive.Content.displayName;
