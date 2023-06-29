"use client";

import * as Primitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { forwardRef, type ElementRef } from "react";

import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";
import { c } from "@/utils";

export type ModalProps = Primitive.DialogProps;
export const Modal = Primitive.Root;

export type ModalTriggerProps = Primitive.DialogTriggerProps;
export const ModalTrigger = Primitive.Trigger;

export interface ModalContentProps extends Primitive.DialogContentProps {
  overlayClassName?: string;
}

export const ModalContent = forwardRef<
  ElementRef<typeof Primitive.Content>,
  ModalContentProps
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
          "bg-base-100/60 fixed bottom-0 left-0 z-50 w-full rounded p-6 shadow sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:max-w-md sm:-translate-x-1/2 sm:-translate-y-1/2",
          "data-[state=open]:animate-open-dialog-mobile data-[state=closed]:animate-close-dialog-mobile",
          "sm:data-[state=open]:animate-open-dialog-desktop sm:data-[state=closed]:animate-close-dialog-desktop",
          props.className,
        )}
      />
    </Primitive.Portal>
  );
});
ModalContent.displayName = Primitive.Content.displayName;

export type ModalCloseProps = Primitive.DialogCloseProps;

export const ModalClose = forwardRef<
  ElementRef<typeof Primitive.Close>,
  ModalCloseProps
>((props, ref) => {
  return (
    <Primitive.Close
      {...props}
      ref={ref}
      className={c(
        "hover:bg-primary-300/20 focus-visible:bg-primary-300/20 absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full p-1 outline-none transition-colors",
        props.className,
      )}
    >
      {props.children ?? <X strokeWidth={3} className="text-primary-300" />}

      <span className="sr-only">Close modal</span>
    </Primitive.Close>
  );
});
ModalClose.displayName = Primitive.Close.displayName;

export type ModalTitleProps = Primitive.DialogTitleProps;

export const ModalTitle = forwardRef<
  ElementRef<typeof Primitive.Title>,
  ModalTitleProps
>(({ asChild, children, ...props }, ref) => {
  return (
    <Primitive.Title {...props} ref={ref} asChild>
      <Heading asChild={asChild} className={c("mb-2", props.className)}>
        {children}
      </Heading>
    </Primitive.Title>
  );
});
ModalTitle.displayName = Primitive.Title.displayName;

export type ModalDescriptionProps = Primitive.DialogDescriptionProps;

export const ModalDescription = forwardRef<
  ElementRef<typeof Primitive.Description>,
  ModalDescriptionProps
>(({ asChild, children, ...props }, ref) => {
  return (
    <Primitive.Description {...props} ref={ref} asChild>
      <Text asChild={asChild} className={c("mb-2", props.className)}>
        {children}
      </Text>
    </Primitive.Description>
  );
});
ModalDescription.displayName = Primitive.Description.displayName;
