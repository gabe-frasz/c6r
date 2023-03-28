"use client";

import { Transition } from "@headlessui/react";
import * as Primitive from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { forwardRef, Fragment, useContext } from "react";

import { Heading, HeadingProps, Text, TextProps } from "@/components";
import { c } from "@/utils";
import { ModalContext } from "./ModalContext";

export interface ModalProps extends Primitive.DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hideCloseButton?: boolean;
}

const Root = ({ open, hideCloseButton = false, ...props }: ModalProps) => {
  return (
    <ModalContext.Provider value={{ open, hideCloseButton }}>
      <Primitive.Root {...props} open={open} />
    </ModalContext.Provider>
  );
};

export interface ModalTriggerProps extends Primitive.DialogTriggerProps {}

const Trigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(
  (props, ref) => {
    return <Primitive.Trigger {...props} ref={ref} />;
  },
);
Trigger.displayName = "Modal.Trigger";

export interface ModalContentProps extends Primitive.DialogContentProps {}

const Content = forwardRef<HTMLDivElement, ModalContentProps>((props, ref) => {
  const { open, hideCloseButton } = useContext(ModalContext);

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
          className="fixed inset-0 backdrop-blur-sm bg-black/50 z-50"
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
            "w-full fixed p-6 bg-base-100 rounded shadow z-50 left-0 bottom-0 sm:max-w-md sm:left-auto sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2",
            props.className,
          )}
        >
          {hideCloseButton ? null : (
            <Primitive.Close className="w-5 h-5 p-1 absolute top-2 right-2 rounded-full outline-none transition-colors hover:bg-primary-300/20 focus:bg-primary-300/20">
              <X weight="bold" className="w-full h-full text-primary-300" />
            </Primitive.Close>
          )}

          {props.children}
        </Primitive.Content>
      </Transition.Child>
    </Transition>
  );
});
Content.displayName = "Modal.Content";

export interface ModalTitleProps extends HeadingProps {}

const Title = forwardRef<HTMLHeadingElement, ModalTitleProps>((props, ref) => {
  return (
    <Primitive.Title asChild>
      <Heading {...props} ref={ref} className={c("mb-2", props.className)} />
    </Primitive.Title>
  );
});
Title.displayName = "Modal.Title";

export interface ModalDescriptionProps extends TextProps {}

const Description = forwardRef<HTMLElement, ModalDescriptionProps>(
  (props, ref) => {
    return (
      <Primitive.Description asChild>
        <Text {...props} ref={ref} className={c("mb-4", props.className)} />
      </Primitive.Description>
    );
  },
);
Description.displayName = "Modal.Description";

export const Modal = {
  Root,
  Trigger,
  Content,
  Title,
  Description,
};
