"use client";

import { Slot } from "@radix-ui/react-slot";
import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { c } from "@/utils";

export type InputProps = HTMLAttributes<HTMLDivElement>;

export const Input = (props: InputProps) => {
  return (
    <div
      {...props}
      className={c(
        "bg-base-200 text-base-content focus-within:ring-primary-300 focus-within:ring-offset-base-100 flex h-12 w-full items-center justify-center gap-3 rounded px-3 py-4 focus-within:ring-2 focus-within:ring-offset-2",
        props.className,
      )}
    />
  );
};

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={c(
          "flex-1 rounded bg-transparent py-4 text-sm placeholder:text-gray-400 focus:outline-none",
          props.className,
        )}
      />
    );
  },
);
InputField.displayName = "Input.Field";

export interface InputIconProps {
  className?: string;
  children: ReactNode;
}

export const InputIcon = forwardRef<HTMLSlotElement, InputIconProps>(
  (props, ref) => {
    return (
      <Slot
        {...props}
        ref={ref}
        className={c("text-primary-300 h-6 w-6", props.className)}
      />
    );
  },
);
InputIcon.displayName = "Input.Icon";
