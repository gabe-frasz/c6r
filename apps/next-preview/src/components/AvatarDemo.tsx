"use client";

import { Avatar } from "@c6r/react";

export const AvatarDemo = () => {
  return (
    <>
      <Avatar.Root>
        <Avatar.Image src="https://github.com/gabe-frasz.png" />

        <Avatar.Fallback />
      </Avatar.Root>

      <Avatar.Root>
        <Avatar.Fallback />
      </Avatar.Root>

      <Avatar.Root className="rounded-none w-fit aspect-auto">
        <Avatar.Fallback>custom fallback</Avatar.Fallback>
      </Avatar.Root>
    </>
  );
};
