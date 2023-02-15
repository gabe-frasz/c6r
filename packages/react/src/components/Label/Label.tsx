import { Root } from "@radix-ui/react-label";
import { forwardRef, LabelHTMLAttributes } from "react";

import { c } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { Text } from "../Text";
import { label } from "./Label.styles";

export interface LabelProps
  extends VariantProps<typeof label>,
    LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ htmlFor, flex, className, children }, ref) => {
    return (
      <Text weight="semibold" asChild>
        <Root
          ref={ref}
          htmlFor={htmlFor}
          className={c(label({ flex, className }))}
        >
          {children}
        </Root>
      </Text>
    );
  },
);

Label.displayName = "Label";
