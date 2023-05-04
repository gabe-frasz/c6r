"use client";

import * as Primitive from "@radix-ui/react-separator";
import { forwardRef } from "react";

import { c } from "@/utils";

export interface DividerProps extends Primitive.SeparatorProps {}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (props, ref) => {
    return (
      <Primitive.Root
        {...props}
        ref={ref}
        className={c("h-px my-2 bg-primary-300", props.className)}
      />
    );
  },
);
Divider.displayName = "Divider";
