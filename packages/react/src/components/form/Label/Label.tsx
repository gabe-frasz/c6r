"use client";

import { Root } from "@radix-ui/react-label";
import { VariantProps } from "class-variance-authority";
import { forwardRef, LabelHTMLAttributes } from "react";

import { Text } from "@/components";
import { c } from "@/utils";
import { label } from "./Label.styles";

export interface LabelProps
  extends VariantProps<typeof label>,
    LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ flex, ...props }, ref) => {
    return (
      <Text weight="semibold" asChild>
        <Root
          {...props}
          ref={ref}
          htmlFor={props.htmlFor}
          className={c(label({ flex }), props.className)}
        />
      </Text>
    );
  },
);
Label.displayName = "Label";
