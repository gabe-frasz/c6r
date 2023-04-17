"use client";

import { Button, Progress } from "@c6r/react";
import { useState } from "react";

export const ProgressDemo = () => {
  const [firstProgress, setFirstProgress] = useState(39);

  function changeProgress() {
    const randomProgress = Math.floor(Math.random() * 101); // 0% <-> 100%
    setFirstProgress(randomProgress);
  }

  return (
    <div className="flex-1 flex flex-col gap-2">
      <Progress.Root className="z-40" value={firstProgress}>
        <Progress.Indicator />
      </Progress.Root>

      <Button onClick={changeProgress}>Change progress</Button>
    </div>
  );
};
