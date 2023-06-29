"use client";

import * as Primitive from "@radix-ui/react-alert-dialog";
import { forwardRef, type ElementRef } from "react";

import { c } from "@/utils";
import { Button, type ButtonProps } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";

export type AlertDialogProps = Primitive.AlertDialogProps;
export const AlertDialog = Primitive.Root;

export type AlertDialogTriggerProps = Primitive.AlertDialogTriggerProps;
export const AlertDialogTrigger = Primitive.Trigger;

export interface AlertDialogContentProps
  extends Primitive.AlertDialogContentProps {
  overlayClassName?: string;
}

export const AlertDialogContent = forwardRef<
  ElementRef<typeof Primitive.Content>,
  AlertDialogContentProps
>((props, ref) => {
  return (
    <Primitive.Portal>
      <Primitive.Overlay
        className={c(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
          "data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
          props.overlayClassName,
        )}
      />

      <Primitive.Content
        {...props}
        ref={ref}
        className={c(
          "bg-base-100/60 fixed bottom-0 left-0 z-50 w-full rounded p-6 shadow",
          "sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2",
          "data-[state=open]:animate-open-dialog-mobile data-[state=closed]:animate-close-dialog-mobile",
          "sm:data-[state=open]:animate-open-dialog-desktop sm:data-[state=closed]:animate-close-dialog-desktop",
          props.className,
        )}
      />
    </Primitive.Portal>
  );
});
AlertDialogContent.displayName = Primitive.Content.displayName;

export type AlertDialogTitleProps = Primitive.AlertDialogTitleProps;

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof Primitive.Title>,
  AlertDialogTitleProps
>(({ asChild, children, ...props }, ref) => {
  return (
    <Primitive.Title {...props} ref={ref} asChild>
      <Heading asChild={asChild} className={c("mb-2", props.className)}>
        {children}
      </Heading>
    </Primitive.Title>
  );
});
AlertDialogTitle.displayName = Primitive.Title.displayName;

export type AlertDialogDescriptionProps = Primitive.AlertDialogDescriptionProps;

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof Primitive.Description>,
  AlertDialogDescriptionProps
>(({ asChild, children, ...props }, ref) => {
  return (
    <Primitive.Description {...props} ref={ref} asChild>
      <Text asChild={asChild} className={c("mb-4", props.className)}>
        {children}
      </Text>
    </Primitive.Description>
  );
});
AlertDialogDescription.displayName = Primitive.Description.displayName;

export type AlertDialogCancelProps = ButtonProps;

export const AlertDialogCancel = forwardRef<
  ElementRef<typeof Button>,
  AlertDialogCancelProps
>((props, ref) => {
  return (
    <Primitive.Cancel asChild>
      <Button
        {...props}
        ref={ref}
        variant={props.variant ?? "ghost"}
        className={c("bg-base-200/80", props.className)}
      />
    </Primitive.Cancel>
  );
});
AlertDialogCancel.displayName = Primitive.Cancel.displayName;

export type AlertDialogActionProps = ButtonProps;

export const AlertDialogAction = forwardRef<
  ElementRef<typeof Button>,
  AlertDialogActionProps
>((props, ref) => {
  return (
    <Primitive.Action asChild>
      <Button
        {...props}
        ref={ref}
        theme={props.theme ?? "error"}
        className={props.className}
      />
    </Primitive.Action>
  );
});
AlertDialogAction.displayName = Primitive.Action.displayName;
