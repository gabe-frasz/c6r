"use client";

import * as Primitive from "@radix-ui/react-visually-hidden";

export interface VisuallyHiddenProps extends Primitive.VisuallyHiddenProps {}

export const VisuallyHidden = (props: VisuallyHiddenProps) => (
  <Primitive.Root {...props} />
);
