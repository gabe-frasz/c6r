"use client";

import * as Primitive from "@radix-ui/react-switch";
import { VariantProps } from "class-variance-authority";
import { forwardRef, useContext } from "react";

import { c } from "@/utils";
import { switchRoot, switchThumb } from "./Switch.styles";
import { SwitchContext } from "./SwitchContext";

export interface SwitchProps
  extends Primitive.SwitchProps,
    VariantProps<typeof switchRoot> {}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, size, theme, ...props }, ref) => {
    return (
      <SwitchContext.Provider value={{ size }}>
        <Primitive.Root
          {...props}
          ref={ref}
          className={c(switchRoot({ size, theme }), props.className)}
        />
      </SwitchContext.Provider>
    );
  },
);
Switch.displayName = "Switch.Root";

export interface SwitchThumbProps extends Primitive.SwitchThumbProps {}

export const SwitchThumb = forwardRef<HTMLSpanElement, SwitchThumbProps>(
  (props, ref) => {
    const { size } = useContext(SwitchContext);

    return (
      <Primitive.Thumb
        {...props}
        ref={ref}
        className={c(switchThumb({ size }), props.className)}
      />
    );
  },
);
SwitchThumb.displayName = "Switch.Thumb";
