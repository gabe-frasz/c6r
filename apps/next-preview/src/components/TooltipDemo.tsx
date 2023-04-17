"use client";

import { Tooltip } from "@c6r/react";
import { useState } from "react";

export const TooltipDemo = () => {
  const [firstTooltip, setFirstTooltip] = useState(false);

  return (
    <Tooltip.Provider>
      <Tooltip.Root open={firstTooltip} onOpenChange={setFirstTooltip}>
        <Tooltip.Trigger className="w-10 h-10">🎉</Tooltip.Trigger>

        <Tooltip.Content>Lorem ipsum, dolor sit amet</Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
