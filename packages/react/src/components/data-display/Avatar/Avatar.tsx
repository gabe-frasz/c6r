"use client";

import * as Primitive from "@radix-ui/react-avatar";
import { UserCircle } from "phosphor-react";
import { forwardRef } from "react";

import { c } from "@/utils";

export type AvatarProps = Primitive.AvatarProps

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
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
Avatar.displayName = Primitive.Root.displayName;

export type AvatarImageProps = Primitive.AvatarImageProps

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  (props, ref) => {
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
  },
);
AvatarImage.displayName = Primitive.Image.displayName;

export type AvatarFallbackProps = Primitive.AvatarFallbackProps

export const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  (props, ref) => {
    return (
      <Primitive.Fallback
        {...props}
        ref={ref}
        delayMs={props.delayMs ?? 600}
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
AvatarFallback.displayName = Primitive.Fallback.displayName;
