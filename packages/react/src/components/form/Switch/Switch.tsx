"use client";

import * as Primitive from "@radix-ui/react-switch";
import { VariantProps } from "class-variance-authority";
import { forwardRef, useContext } from "react";

import { c } from "@/utils";
import { switchRoot, switchThumb } from "./Switch.styles";
import { SwitchContext } from "./SwitchContext";

interface SwitchProps
  extends Primitive.SwitchProps,
    VariantProps<typeof switchRoot> {}

const Root = forwardRef<HTMLButtonElement, SwitchProps>(
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
Root.displayName = "Switch.Root";

interface SwitchThumbProps extends Primitive.SwitchThumbProps {}

const Thumb = forwardRef<HTMLSpanElement, SwitchThumbProps>((props, ref) => {
  const { size } = useContext(SwitchContext);

  return (
    <Primitive.Thumb
      {...props}
      ref={ref}
      className={c(switchThumb({ size }), props.className)}
    />
  );
});
Thumb.displayName = "Switch.Thumb";

export const Switch = {
  Root,
  Thumb,
};
