"use client";

import { Transition } from "@headlessui/react";
import * as Primitive from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { forwardRef, Fragment } from "react";

import { c } from "@/utils";
import { Heading, HeadingProps } from "../Heading";
import { Text, TextProps } from "../Text";

export interface ModalRootProps extends Primitive.DialogProps {}

const Root = forwardRef<HTMLDivElement, ModalRootProps>(
  ({ open, ...props }) => {
    return <Primitive.Root {...props} />;
  },
);

Root.displayName = "Modal.Root";

export interface ModalTriggerProps extends Primitive.DialogTriggerProps {}

const Trigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(
  (props, ref) => {
    return <Primitive.Trigger {...props} ref={ref} />;
  },
);

Trigger.displayName = "Modal.Trigger";

export interface ModalContentProps extends Primitive.DialogContentProps {
  open: boolean;
  hideCloseButton?: boolean;
}

const Content = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ open, hideCloseButton = false, className, children, ...props }, ref) => {
    return (
      <Transition show={open} className="absolute">
        <Transition.Child
          as={Fragment}
          enter="transition-opacity duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100 duration-100"
          leave="transition-opacity"
          leaveTo="opacity-0"
        >
          <Primitive.Overlay
            ref={ref}
            forceMount
            className="fixed inset-0 backdrop-blur-sm bg-black/50 z-50"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100"
          leaveTo="opacity-0 scale-95"
        >
          <Primitive.Content
            {...props}
            ref={ref}
            forceMount
            className={c(
              "max-w-md fixed p-6 bg-base-100 rounded shadow top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50",
              className,
            )}
          >
            {hideCloseButton ? null : (
              <Primitive.Close className="w-5 h-5 p-0.5 absolute top-4 right-4 rounded-full outline-none transition-colors hover:bg-primary-300/20 focus:bg-primary-300/20">
                <X
                  size={16}
                  weight="bold"
                  className="w-full h-full text-primary-300"
                />
              </Primitive.Close>
            )}

            {children}
          </Primitive.Content>
        </Transition.Child>
      </Transition>
    );
  },
);

Content.displayName = "Modal.Content";

export interface ModalTitleProps extends HeadingProps {}

const Title = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Primitive.Title asChild>
        <Heading {...props} ref={ref} className={c("mb-2", className)}>
          {children}
        </Heading>
      </Primitive.Title>
    );
  },
);

Title.displayName = "Modal.Title";

export interface ModalDescriptionProps extends TextProps {}

const Description = forwardRef<HTMLElement, ModalDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Primitive.Description asChild>
        <Text {...props} ref={ref} className={c("mb-4", className)}>
          {children}
        </Text>
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
