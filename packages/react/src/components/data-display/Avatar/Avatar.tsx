"use client";

import * as Primitive from "@radix-ui/react-avatar";
import { UserCircle } from "phosphor-react";
import { forwardRef } from "react";

import { c } from "@/utils";

export interface AvatarProps extends Primitive.AvatarProps {}

const Root = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  return (
    <Primitive.Root
      {...props}
      ref={ref}
      className={c(
        "inline-flex w-12 aspect-square select-none items-center justify-center overflow-hidden rounded-full",
        props.className,
      )}
    />
  );
});
Root.displayName = "Avatar.Root";

export interface AvatarImageProps extends Primitive.AvatarImageProps {}

const Image = forwardRef<HTMLImageElement, AvatarImageProps>((props, ref) => {
  return (
    <Primitive.Image
      {...props}
      ref={ref}
      className={c(
        "h-full w-full rounded-[inherit] object-cover",
        props.className,
      )}
    />
  );
});
Image.displayName = "Avatar.Image";

export interface AvatarFallbackProps extends Primitive.AvatarFallbackProps {}

const Fallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  (props, ref) => {
    return (
      <Primitive.Fallback
        delayMs={600}
        {...props}
        ref={ref}
        className={c(
          "leading-1 flex h-full w-full items-center justify-center",
          props.className,
        )}
      >
        {props.children ? (
          props.children
        ) : (
          <UserCircle
            weight="light"
            className="text-base-content w-full h-full"
          />
        )}
      </Primitive.Fallback>
    );
  },
);
Fallback.displayName = "Avatar.Fallback";

export const Avatar = {
  Root,
  Image,
  Fallback,
};
