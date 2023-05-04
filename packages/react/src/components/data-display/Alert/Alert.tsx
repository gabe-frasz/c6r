"use client";

import { Transition } from "@headlessui/react";
import * as Primitive from "@radix-ui/react-alert-dialog";
import { forwardRef, Fragment, useContext } from "react";

import {
  Button,
  Heading,
  Text,
  type ButtonProps,
  type HeadingProps,
  type TextProps,
} from "@/components";
import { c } from "@/utils";
import { AlertContext } from "./AlertContext";

export interface AlertProps extends Primitive.AlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const Alert = ({ open, ...props }: AlertProps) => {
  return (
    <AlertContext.Provider value={{ open }}>
      <Primitive.Root {...props} open={open} />
    </AlertContext.Provider>
  );
};

export interface AlertTriggerProps extends Primitive.AlertDialogTriggerProps {}

export const AlertTrigger = forwardRef<HTMLButtonElement, AlertTriggerProps>(
  (props, ref) => {
    return <Primitive.Trigger {...props} ref={ref} />;
  },
);
AlertTrigger.displayName = "Alert.Trigger";

export interface AlertContentProps extends Primitive.AlertDialogContentProps {
  overlayClassName?: string;
}

export const AlertContent = forwardRef<HTMLDivElement, AlertContentProps>(
  (props, ref) => {
    const { open } = useContext(AlertContext);

    return (
      <Transition show={open} className="absolute">
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-100"
          leaveTo="opacity-0"
        >
          <Primitive.Overlay
            forceMount
            className={c(
              "fixed inset-0 backdrop-blur-sm bg-black/50 z-50",
              props.overlayClassName,
            )}
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 translate-y-full sm:translate-y-auto sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:translate-y-auto sm:scale-100"
          leave="ease-in duration-100"
          leaveTo="opacity-0 translate-y-full sm:translate-y-auto sm:scale-95"
        >
          <Primitive.Content
            {...props}
            ref={ref}
            forceMount
            className={c(
              "w-full fixed p-6 bg-base-100 rounded shadow z-50 left-0 bottom-0 sm:max-w-md sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
              props.className,
            )}
          />
        </Transition.Child>
      </Transition>
    );
  },
);
AlertContent.displayName = "Alert.Content";

export interface AlertTitleProps extends HeadingProps {}

export const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  (props, ref) => {
    return (
      <Primitive.Title asChild>
        <Heading {...props} ref={ref} className={c("mb-2", props.className)} />
      </Primitive.Title>
    );
  },
);
AlertTitle.displayName = "Alert.Title";

export interface AlertDescriptionProps extends TextProps {}

export const AlertDescription = forwardRef<HTMLElement, AlertDescriptionProps>(
  (props, ref) => {
    return (
      <Primitive.Description asChild>
        <Text {...props} ref={ref} className={c("mb-4", props.className)} />
      </Primitive.Description>
    );
  },
);
AlertDescription.displayName = "Alert.Description";

export interface AlertCancelProps extends ButtonProps {}

export const AlertCancel = forwardRef<HTMLButtonElement, AlertCancelProps>(
  (props, ref) => {
    return (
      <Primitive.Cancel asChild>
        <Button
          variant="ghost"
          {...props}
          ref={ref}
          className={c("bg-neutral-500/50", props.className)}
        />
      </Primitive.Cancel>
    );
  },
);
AlertCancel.displayName = "Alert.Cancel";

export interface AlertActionProps extends ButtonProps {}

export const AlertAction = forwardRef<HTMLButtonElement, AlertActionProps>(
  (props, ref) => {
    return (
      <Primitive.Action asChild>
        <Button theme="error" {...props} ref={ref} />
      </Primitive.Action>
    );
  },
);
AlertAction.displayName = "Alert.Action";
