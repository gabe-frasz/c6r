"use client";

import { CircleNotch, type IconProps } from "phosphor-react";

import { c } from "@/utils";

export interface SpinnerProps extends IconProps {}

export const Spinner = (props: SpinnerProps) => {
  return (
    <CircleNotch
      weight="bold"
      {...props}
      className={c("animate-spin", props.className)}
    />
  );
};
