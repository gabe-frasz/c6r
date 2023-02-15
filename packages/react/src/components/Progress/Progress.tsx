import { c } from "@/utils";
import * as Primitive from "@radix-ui/react-progress";
import { forwardRef } from "react";

export interface ProgressRootProps extends Primitive.ProgressProps {}

const Root = forwardRef<HTMLDivElement, ProgressRootProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Primitive.Root
        {...props}
        ref={ref}
        className={c(
          "min-w-[100px] h-6 relative bg-neutral-800 rounded-full overflow-hidden",
          className,
        )}
      >
        {children}
      </Primitive.Root>
    );
  },
);

Root.displayName = "Progress.Root";

export interface ProgressIndicatorProps
  extends Primitive.ProgressIndicatorProps {
  progress: number;
}

const Indicator = forwardRef<HTMLDivElement, ProgressIndicatorProps>(
  ({ progress, className, ...props }, ref) => {
    return (
      <Primitive.Indicator
        {...props}
        ref={ref}
        className={c(
          "w-full h-full bg-primary-500 transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]",
        )}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    );
  },
);

Indicator.displayName = "Progress.Indicator";

export const Progress = {
  Root,
  Indicator,
};
