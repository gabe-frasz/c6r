"use client";

import { RadioGroup } from "@c6r/react";

export const RadioGroupDemo = () => {
  return (
    <RadioGroup.Root>
      <RadioGroup.Item value="esqueca">
        Esqueça
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <RadioGroup.Item value="ai">
        Ai
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <RadioGroup.Item value="toma">
        Toma
        <RadioGroup.Indicator />
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
};
