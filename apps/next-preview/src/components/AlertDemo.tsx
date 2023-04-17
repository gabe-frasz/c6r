"use client";

import { Alert } from "@c6r/react";
import { useState } from "react";

export const AlertDemo = () => {
  const [firstAlertOpen, setFirstAlertOpen] = useState(false);

  return (
    <Alert.Root open={firstAlertOpen} onOpenChange={setFirstAlertOpen}>
      <Alert.Trigger>Alert</Alert.Trigger>

      <Alert.Content>
        <Alert.Title>Some title</Alert.Title>

        <Alert.Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
          magni quia? Tempore, cumque deleniti facilis minus nam doloremque
          iste. Saepe, quaerat architecto! Nisi cum nobis hic alias dicta
          voluptatibus iusto.
        </Alert.Description>

        <footer className="mt-4 flex gap-4 justify-end">
          <Alert.Cancel>Cancel</Alert.Cancel>
          <Alert.Action>Do something bad</Alert.Action>
        </footer>
      </Alert.Content>
    </Alert.Root>
  );
};
