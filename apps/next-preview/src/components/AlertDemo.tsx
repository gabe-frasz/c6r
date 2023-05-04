"use client";

import {
  Alert,
  AlertAction,
  AlertCancel,
  AlertContent,
  AlertDescription,
  AlertTitle,
  AlertTrigger,
  Button,
} from "@c6r/react";
import { useState } from "react";

export const AlertDemo = () => {
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <Alert open={alertOpen} onOpenChange={setAlertOpen}>
      <AlertTrigger asChild>
        <Button>Alert</Button>
      </AlertTrigger>

      <AlertContent>
        <AlertTitle>Some title</AlertTitle>

        <AlertDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
          magni quia? Tempore, cumque deleniti facilis minus nam doloremque
          iste. Saepe, quaerat architecto! Nisi cum nobis hic alias dicta
          voluptatibus iusto.
        </AlertDescription>

        <footer className="mt-4 flex gap-4 justify-end">
          <AlertCancel>Cancel</AlertCancel>
          <AlertAction>Do something bad</AlertAction>
        </footer>
      </AlertContent>
    </Alert>
  );
};
