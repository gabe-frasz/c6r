"use client";

import * as Primitive from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { forwardRef } from "react";

import { Heading, Text, type HeadingProps, type TextProps } from "@/components";
import { c } from "@/utils";

export type ModalProps = Primitive.DialogProps;

export const Modal = (props: ModalProps) => <Primitive.Root {...props} />;

export type ModalTriggerProps = Primitive.DialogTriggerProps;

export const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(
  (props, ref) => <Primitive.Trigger {...props} ref={ref} />,
);
ModalTrigger.displayName = "Modal.Trigger";

export interface ModalContentProps extends Primitive.DialogContentProps {
  overlayClassName?: string;
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
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
            "w-full fixed p-6 bg-base-100 rounded shadow z-50 left-0 bottom-0 sm:max-w-md sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
            "data-[state=open]:animate-open-dialog-mobile data-[state=closed]:animate-close-dialog-mobile sm:data-[state=open]:animate-open-dialog-desktop sm:data-[state=closed]:animate-close-dialog-desktop",
            props.className,
          )}
        />
      </Primitive.Portal>
    );
  },
);
ModalContent.displayName = "Modal.Content";

export type ModalCloseProps = Primitive.DialogCloseProps;

export const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(
  (props, ref) => {
    return (
      <Primitive.Close
        {...props}
        ref={ref}
        className={c(
          "w-5 h-5 p-1 absolute top-2 right-2 flex justify-center items-center rounded-full outline-none transition-colors hover:bg-primary-300/20 focus:bg-primary-300/20",
          props.className,
        )}
      >
        {props.children ? (
          props.children
        ) : (
          <X weight="bold" size={16} className="text-primary-300" />
        )}

        <span className="sr-only">Close</span>
      </Primitive.Close>
    );
  },
);
ModalClose.displayName = "Modal.Close";

export type ModalTitleProps = HeadingProps;

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  (props, ref) => {
    return (
      <Primitive.Title asChild>
        <Heading {...props} ref={ref} className={c("mb-2", props.className)} />
      </Primitive.Title>
    );
  },
);
ModalTitle.displayName = "Modal.Title";

export type ModalDescriptionProps = TextProps;

export const ModalDescription = forwardRef<HTMLElement, ModalDescriptionProps>(
  (props, ref) => {
    return (
      <Primitive.Description asChild>
        <Text {...props} ref={ref} className={c("mb-4", props.className)} />
      </Primitive.Description>
    );
  },
);
ModalDescription.displayName = "Modal.Description";
