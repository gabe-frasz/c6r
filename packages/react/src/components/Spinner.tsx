import { Loader2, type LucideProps } from "lucide-react";

import { c } from "@/utils";

export type SpinnerProps = LucideProps;

export const Spinner = (props: SpinnerProps) => {
  return (
    <Loader2
      {...props}
      strokeWidth={props.strokeWidth ?? 3}
      className={c("animate-spin", props.className)}
    />
  );
};
