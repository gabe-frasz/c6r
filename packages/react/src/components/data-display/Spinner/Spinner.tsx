"use client";

import { CircleNotch, type IconProps } from "phosphor-react";
import { forwardRef } from "react";

import { c } from "@/utils";

export interface SpinnerProps extends IconProps {}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>((props, ref) => {
  return (
    <CircleNotch
      weight="bold"
      {...props}
      ref={ref}
      className={c("animate-spin", props.className)}
    />
  );
});
Spinner.displayName = "Spinner";
