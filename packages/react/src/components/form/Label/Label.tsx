"use client";

import { Root } from "@radix-ui/react-label";
import { forwardRef, type LabelHTMLAttributes } from "react";
import { type VariantProps } from "tailwind-variants";

import { Text } from "@/components";
import { c } from "@/utils";
import { label } from "./Label.styles";

export interface LabelProps
  extends VariantProps<typeof label>,
    LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ flex, ...props }, ref) => {
    return (
      <Text className="font-semibold" asChild>
        <Root
          {...props}
          ref={ref}
          className={c(label({ flex }), props.className)}
        />
      </Text>
    );
  },
);
Label.displayName = "Label";
