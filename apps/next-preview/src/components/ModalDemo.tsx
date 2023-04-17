"use client";

import { Button, Modal } from "@c6r/react";
import { useState } from "react";

export const ModalDemo = () => {
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  return (
    <>
      <Modal.Root
        open={firstModalOpen}
        onOpenChange={() => setFirstModalOpen((prev) => !prev)}
      >
        <Modal.Trigger asChild>
          <Button>With close button</Button>
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Title>Some text</Modal.Title>

          <Modal.Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
            magni quia? Tempore, cumque deleniti facilis minus nam doloremque
            iste. Saepe, quaerat architecto! Nisi cum nobis hic alias dicta
            voluptatibus iusto.
          </Modal.Description>
        </Modal.Content>
      </Modal.Root>

      <Modal.Root
        open={secondModalOpen}
        onOpenChange={() => setSecondModalOpen((prev) => !prev)}
        hideCloseButton
      >
        <Modal.Trigger asChild>
          <Button>Without close button</Button>
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Title>Some text</Modal.Title>

          <Modal.Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
            magni quia? Tempore, cumque deleniti facilis minus nam doloremque
            iste. Saepe, quaerat architecto! Nisi cum nobis hic alias dicta
            voluptatibus iusto.
          </Modal.Description>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};
