import { Popover } from "@c6r/react";
import { useState } from "react";

export const PopoverDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root onOpenChange={setOpen}>
      <Popover.Trigger>Open Popover</Popover.Trigger>

      <Popover.Content open={open}>Popover</Popover.Content>
    </Popover.Root>
  );
};
