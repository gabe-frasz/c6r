"use client";

import * as Primitive from "@radix-ui/react-separator";
import { forwardRef, type ElementRef } from "react";

import { c } from "@/utils";

export type SeparatorProps = Primitive.SeparatorProps;

export const Separator = forwardRef<
  ElementRef<typeof Primitive.Root>,
  SeparatorProps
>((props, ref) => {
  return (
    <Primitive.Root
      {...props}
      ref={ref}
      className={c("bg-primary-300 my-2 h-px", props.className)}
    />
  );
});
Separator.displayName = Primitive.Root.displayName;
