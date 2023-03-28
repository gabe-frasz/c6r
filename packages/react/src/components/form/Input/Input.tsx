"use client";

import { Slot } from "@radix-ui/react-slot";
import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

import { c } from "@/utils";

export interface InputProps extends HTMLAttributes<HTMLDivElement> {}

const Root = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      className={c(
        "w-full h-12 px-3 py-4 flex justify-center items-center gap-3 bg-base-200 text-base-content rounded focus-within:ring-2 focus-within:ring-primary-300 focus-within:ring-offset-2 focus-within:ring-offset-base-100",
        props.className,
      )}
    />
  );
});
Root.displayName = "Input.Root";

export interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const Field = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
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
});
Field.displayName = "Input.Field";

export interface InputIconProps {
  className?: string;
  children: ReactNode;
}

const Icon = forwardRef<HTMLSlotElement, InputIconProps>((props, ref) => {
  return (
    <Slot
      {...props}
      ref={ref}
      className={c("w-6 h-6 text-primary-300", props.className)}
    />
  );
});
Icon.displayName = "Input.Icon";

export const Input = {
  Root,
  Field,
  Icon,
};
