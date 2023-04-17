"use client";

import { Button, Popover } from "@c6r/react";
import { useState } from "react";

export const PopoverDemo = () => {
  const [firstPopover, setFirstPopover] = useState(false);

  return (
    <Popover.Root open={firstPopover} onOpenChange={setFirstPopover}>
      <Popover.Trigger asChild>
        <Button variant="outline" theme="secondary">
          Show popover
        </Button>
      </Popover.Trigger>

      <Popover.Content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam autem
        facilis ut accusamus eligendi. Libero, dolor repellendus. Enim corporis
        laborum repudiandae, esse necessitatibus dolore! Perspiciatis ut at
        numquam cupiditate aperiam.
      </Popover.Content>
    </Popover.Root>
  );
};
