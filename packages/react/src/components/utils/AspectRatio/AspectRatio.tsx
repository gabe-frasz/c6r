"use client";

import * as Primitive from "@radix-ui/react-aspect-ratio";
import { forwardRef } from "react";

export interface AspectRatioProps extends Primitive.AspectRatioProps {}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (props, ref) => {
    return <Primitive.Root {...props} ref={ref} />;
  },
);
AspectRatio.displayName = "AspectRatio";
