"use client";

import { Button, Popover, PopoverContent, PopoverTrigger } from "@c6r/react";
import { useState } from "react";

export const PopoverDemo = () => {
  const [firstPopover, setFirstPopover] = useState(false);

  return (
    <Popover open={firstPopover} onOpenChange={setFirstPopover}>
      <PopoverTrigger asChild>
        <Button variant="outline" theme="secondary">
          Show popover
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam autem
        facilis ut accusamus eligendi. Libero, dolor repellendus. Enim corporis
        laborum repudiandae, esse necessitatibus dolore! Perspiciatis ut at
        numquam cupiditate aperiam.
      </PopoverContent>
    </Popover>
  );
};
