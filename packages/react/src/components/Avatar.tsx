"use client";

import * as Primitive from "@radix-ui/react-avatar";
import { UserCircle } from "lucide-react";
import { forwardRef, type ElementRef } from "react";

import { c } from "@/utils";

export type AvatarProps = Primitive.AvatarProps;

export const Avatar = forwardRef<
  ElementRef<typeof Primitive.Root>,
  AvatarProps
>((props, ref) => {
  return (
    <Primitive.Root
      {...props}
      ref={ref}
      className={c(
        "inline-flex aspect-square w-12 select-none items-center justify-center rounded-full",
        props.className,
      )}
    />
  );
});
Avatar.displayName = Primitive.Root.displayName;

export type AvatarImageProps = Primitive.AvatarImageProps;

export const AvatarImage = forwardRef<
  ElementRef<typeof Primitive.Image>,
  AvatarImageProps
>((props, ref) => {
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
AvatarImage.displayName = Primitive.Image.displayName;

export type AvatarFallbackProps = Primitive.AvatarFallbackProps;

export const AvatarFallback = forwardRef<
  ElementRef<typeof Primitive.Fallback>,
  AvatarFallbackProps
>((props, ref) => {
  return (
    <Primitive.Fallback
      {...props}
      ref={ref}
      delayMs={props.delayMs ?? 600}
      className={c(
        "flex h-full w-full items-center justify-center",
        props.className,
      )}
    >
      {props.children ?? (
        <UserCircle
          strokeWidth={1.5}
          className="text-base-content h-full w-full"
        />
      )}
    </Primitive.Fallback>
  );
});
AvatarFallback.displayName = Primitive.Fallback.displayName;
