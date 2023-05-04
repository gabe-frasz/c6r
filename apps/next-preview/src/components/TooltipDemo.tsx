"use client";

import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@c6r/react";
import { useState } from "react";

export const TooltipDemo = () => {
  const [firstTooltip, setFirstTooltip] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip open={firstTooltip} onOpenChange={setFirstTooltip}>
        <TooltipTrigger asChild>
          <Button variant="ghost" className="w-10 h-10 rounded-full">
            🎉
          </Button>
        </TooltipTrigger>

        <TooltipContent>Lorem ipsum, dolor sit amet</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
