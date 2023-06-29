"use client";

import * as Primitive from "@radix-ui/react-progress";
import { createContext, forwardRef, useContext, type ElementRef } from "react";

import { c } from "@/utils";

const ProgressContext = createContext({} as { value: number });

export interface ProgressProps extends Primitive.ProgressProps {
  value: number;
}

export const Progress = forwardRef<
  ElementRef<typeof Primitive.Root>,
  ProgressProps
>(({ value, ...props }, ref) => {
  return (
    <ProgressContext.Provider value={{ value }}>
      <Primitive.Root
        {...props}
        ref={ref}
        value={value}
        className={c(
          "bg-base-200 relative h-6 min-w-[100px] overflow-hidden rounded-full",
          props.className,
        )}
      />
    </ProgressContext.Provider>
  );
});
Progress.displayName = Primitive.Root.displayName;

export type ProgressIndicatorProps = Primitive.ProgressIndicatorProps;

export const ProgressIndicator = forwardRef<
  ElementRef<typeof Primitive.Indicator>,
  ProgressIndicatorProps
>((props, ref) => {
  const { value } = useContext(ProgressContext);

  return (
    <Primitive.Indicator
      {...props}
      ref={ref}
      className={c(
        "bg-primary-500 h-full w-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65,0,0.35,1)]",
      )}
      style={{ transform: `translateX(-${100 - value}%)` }}
    />
  );
});
ProgressIndicator.displayName = Primitive.Indicator.displayName;
