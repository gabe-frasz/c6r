"use client";

import * as Primitive from "@radix-ui/react-progress";
import { forwardRef, useContext } from "react";

import { c } from "@/utils";
import { ProgressContext } from "./ProgressContext";

export interface ProgressProps extends Primitive.ProgressProps {
  value: number;
}

const Root = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, ...props }, ref) => {
    return (
      <ProgressContext.Provider value={{ value }}>
        <Primitive.Root
          {...props}
          ref={ref}
          value={value}
          className={c(
            "min-w-[100px] h-6 relative bg-base-200 rounded-full overflow-hidden",
            props.className,
          )}
        />
      </ProgressContext.Provider>
    );
  },
);
Root.displayName = "Progress.Root";

export interface ProgressIndicatorProps
  extends Primitive.ProgressIndicatorProps {}

const Indicator = forwardRef<HTMLDivElement, ProgressIndicatorProps>(
  (props, ref) => {
    const { value } = useContext(ProgressContext);

    return (
      <Primitive.Indicator
        {...props}
        ref={ref}
        className={c(
          "w-full h-full bg-primary-500 transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]",
        )}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    );
  },
);
Indicator.displayName = "Progress.Indicator";

export const Progress = {
  Root,
  Indicator,
};
