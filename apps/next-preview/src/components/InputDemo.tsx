"use client";

import { Input, Label, Text } from "@c6r/react";

export const InputDemo = () => {
  return (
    <>
      <Label>
        <Text>Without icon</Text>

        <Input.Root>
          <Input.Field placeholder="Type something..." />
        </Input.Root>
      </Label>

      <Label>
        <Text>Left icon</Text>

        <Input.Root>
          <Input.Icon>
            <span>🎉</span>
          </Input.Icon>

          <Input.Field placeholder="Type something..." />
        </Input.Root>
      </Label>

      <Label>
        <Text>Right icon</Text>

        <Input.Root>
          <Input.Field placeholder="Type something..." />

          <Input.Icon>
            <span>🎉</span>
          </Input.Icon>
        </Input.Root>
      </Label>
    </>
  );
};
