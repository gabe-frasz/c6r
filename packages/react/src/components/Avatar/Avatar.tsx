import * as Primitive from "@radix-ui/react-avatar";
import { UserCircle } from "phosphor-react";
import { forwardRef, ImgHTMLAttributes } from "react";

import { c } from "@/utils";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, ...props }, ref) => {
    return (
      <Primitive.Root
        className={c(
          "inline-flex w-12 aspect-square select-none items-center justify-center overflow-hidden rounded-full",
          className,
        )}
      >
        <Primitive.Image
          {...props}
          ref={ref}
          className="h-full w-full rounded-[inherit] object-cover"
        />

        <Primitive.Fallback
          delayMs={600}
          className="leading-1 flex h-full w-full items-center justify-center"
        >
          <UserCircle
            weight="light"
            className="text-base-content w-full h-full"
          />
        </Primitive.Fallback>
      </Primitive.Root>
    );
  },
);

Avatar.displayName = "Avatar";
