"use client";

import { Slot } from "@radix-ui/react-slot";
import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { c } from "@/utils";

export type InputProps = HTMLAttributes<HTMLDivElement>

export const Input = (props: InputProps) => {
  return (
    <div
      {...props}
      className={c(
        "w-full h-12 px-3 py-4 flex justify-center items-center gap-3 bg-base-200 text-base-content rounded focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-2 focus-within:ring-offset-base-100",
        props.className,
      )}
    />
  );
};

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement>

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={c(
          "flex-1 py-4 bg-transparent text-sm rounded placeholder:text-gray-400 focus:outline-none",
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
        className={c("w-6 h-6 text-primary-300", props.className)}
      />
    );
  },
);
InputIcon.displayName = "Input.Icon";
