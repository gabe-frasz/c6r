import { Modal } from "@c6r/react";
import { useState } from "react";

export const ModalDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal.Root open={open} onOpenChange={setOpen}>
      <Modal.Trigger>Open Modal</Modal.Trigger>

      <Modal.Content open={open}>
        <Modal.Title>Modal</Modal.Title>

        <Modal.Description>
          A window overlaid on either the primary window or another dialog
          window, rendering the content underneath inert.
        </Modal.Description>
      </Modal.Content>
    </Modal.Root>
  );
};
