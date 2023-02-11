import { Slot } from "@radix-ui/react-slot";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import { c } from "@/utils";

export interface InputRootProps {
  className?: string;
  children: ReactNode | ReactNode[];
}

const Root = forwardRef<HTMLDivElement, InputRootProps>(
  ({ className = "", children }, ref) => {
    return (
      <div
        ref={ref}
        className={c(
          "w-full h-12 px-3 py-4 flex justify-center items-center gap-3 bg-base-200 text-base-content rounded focus-within:ring-2 focus-within:ring-primary-300",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Root.displayName = "Input.Root";

export interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={c(
          "flex-1 py-4 bg-transparent text-sm rounded placeholder:text-gray-400 focus:outline-none",
          className,
        )}
      />
    );
  },
);

Field.displayName = "Input.Field";

export interface InputIconProps {
  className?: string;
  children: ReactNode;
}

const Icon = forwardRef<HTMLSlotElement, InputIconProps>(
  ({ className = "", children }) => {
    return (
      <Slot className={c("w-6 h-6 text-base-content", className)}>
        {children}
      </Slot>
    );
  },
);

Icon.displayName = "Input.Icon";

export const Input = {
  Root,
  Field,
  Icon,
};
