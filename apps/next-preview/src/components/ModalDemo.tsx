"use client";

import {
  Button,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger,
} from "@c6r/react";
import { useState } from "react";

export const ModalDemo = () => {
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);

  return (
    <>
      <Modal
        open={firstModalOpen}
        onOpenChange={() => setFirstModalOpen((prev) => !prev)}
      >
        <ModalTrigger asChild>
          <Button>With close button</Button>
        </ModalTrigger>

        <ModalContent>
          <ModalClose />

          <ModalTitle>Some text</ModalTitle>

          <ModalDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
            magni quia? Tempore, cumque deleniti facilis minus nam doloremque
            iste. Saepe, quaerat architecto! Nisi cum nobis hic alias dicta
            voluptatibus iusto.
          </ModalDescription>
        </ModalContent>
      </Modal>

      <Modal
        open={secondModalOpen}
        onOpenChange={() => setSecondModalOpen((prev) => !prev)}
      >
        <ModalTrigger asChild>
          <Button>Without close button</Button>
        </ModalTrigger>

        <ModalContent>
          <ModalTitle>Some text</ModalTitle>

          <ModalDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
            magni quia? Tempore, cumque deleniti facilis minus nam doloremque
            iste. Saepe, quaerat architecto! Nisi cum nobis hic alias dicta
            voluptatibus iusto.
          </ModalDescription>
        </ModalContent>
      </Modal>
    </>
  );
};
