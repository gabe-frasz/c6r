import * as Primitive from "@radix-ui/react-visually-hidden";

interface VisuallyHiddenProps extends Primitive.VisuallyHiddenProps {}

export const VisuallyHidden = (props: VisuallyHiddenProps) => (
  <Primitive.Root {...props} />
);
