import * as Primitive from "@radix-ui/react-separator";
import { forwardRef } from "react";

export interface DividerProps extends Primitive.SeparatorProps {}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    return (
      <Primitive.Root
        {...props}
        ref={ref}
        className="h-px my-2 bg-primary-300"
      />
    );
  },
);
Divider.displayName = "Divider";
