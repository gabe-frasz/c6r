"use client";

import * as Primitive from "@radix-ui/react-alert-dialog";
import { forwardRef } from "react";

import {
  Button,
  Heading,
  Text,
  type ButtonProps,
  type HeadingProps,
  type TextProps,
} from "@/components";
import { c } from "@/utils";

export interface AlertProps extends Primitive.AlertDialogProps {}

export const Alert = (props: AlertProps) => {
  return <Primitive.Root {...props} />;
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
    return (
      <Primitive.Portal>
        <Primitive.Overlay
          className={c(
            "fixed inset-0 backdrop-blur-sm bg-black/50 z-50",
            "data-[state=open]:animate-open-dialog-overlay data-[state=closed]:animate-close-dialog-overlay",
            props.overlayClassName,
          )}
        />

        <Primitive.Content
          {...props}
          ref={ref}
          className={c(
            "w-full fixed left-0 bottom-0 p-6 bg-base-100 rounded shadow z-50 sm:max-w-md sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
            "data-[state=open]:animate-open-dialog-mobile data-[state=closed]:animate-close-dialog-mobile sm:data-[state=open]:animate-open-dialog-desktop sm:data-[state=closed]:animate-close-dialog-desktop",
            props.className,
          )}
        />
      </Primitive.Portal>
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
