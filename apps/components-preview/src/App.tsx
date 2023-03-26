import {
  Avatar,
  Button,
  Checkbox,
  Heading,
  Input,
  Label,
  Modal,
  Popover,
  Progress,
  Text,
} from "@c6r/react";
import { useState } from "react";

export default function App() {
  const [firstModalOpen, setFirstModalOpen] = useState(false);
  const [secondModalOpen, setSecondModalOpen] = useState(false);
  const [firstPopoverOpen, setFirstPopoverOpen] = useState(false);
  const [firstProgress, setFirstProgress] = useState(39);

  function changeProgress() {
    const randomProgress = Math.floor(Math.random() * 101); // 0% <-> 100%
    setFirstProgress(randomProgress);
  }

  return (
    <div className="py-16 flex flex-col gap-8 container mx-auto px-4">
      <Heading size="3xl" asChild>
        <h1>C6R</h1>
      </Heading>

      <section>
        <Heading>Avatar</Heading>

        <div className="flex gap-4">
          <Avatar src="https://github.com/gabe-frasz.png" />
          <Avatar />
        </div>
      </section>

      <section>
        <Heading>Buttons</Heading>

        <div className="flex gap-4">
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="success">Success</Button>
        </div>
      </section>

      <section>
        <Heading>Checkbox</Heading>

        <div className="flex gap-4">
          <Checkbox />
          <Checkbox variant="light" />
          <Checkbox variant="success" />
        </div>
      </section>

      <section>
        <Heading>Input + Label</Heading>

        <div className="flex gap-4">
          <Label>
            <Text>Input 1</Text>

            <Input.Root>
              <Input.Field />
            </Input.Root>
          </Label>

          <Label>
            <Text>Input 2</Text>

            <Input.Root>
              <Input.Icon>
                <span>🎉</span>
              </Input.Icon>

              <Input.Field />
            </Input.Root>
          </Label>

          <Label>
            <Text>Input 3</Text>

            <Input.Root>
              <Input.Field />

              <Input.Icon>
                <span>🎉</span>
              </Input.Icon>
            </Input.Root>
          </Label>
        </div>
      </section>

      <section>
        <Heading>Modal</Heading>

        <div className="flex gap-4">
          <Modal.Root onOpenChange={() => setFirstModalOpen((prev) => !prev)}>
            <Modal.Trigger asChild>
              <Button>With close button</Button>
            </Modal.Trigger>

            <Modal.Content open={firstModalOpen}>
              <Modal.Title>Some text</Modal.Title>

              <Modal.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, magni quia? Tempore, cumque deleniti facilis minus nam
                doloremque iste. Saepe, quaerat architecto! Nisi cum nobis hic
                alias dicta voluptatibus iusto.
              </Modal.Description>
            </Modal.Content>
          </Modal.Root>

          <Modal.Root onOpenChange={() => setSecondModalOpen((prev) => !prev)}>
            <Modal.Trigger asChild>
              <Button>Without close button</Button>
            </Modal.Trigger>

            <Modal.Content open={secondModalOpen} hideCloseButton>
              <Modal.Title>Some text</Modal.Title>

              <Modal.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, magni quia? Tempore, cumque deleniti facilis minus nam
                doloremque iste. Saepe, quaerat architecto! Nisi cum nobis hic
                alias dicta voluptatibus iusto.
              </Modal.Description>
            </Modal.Content>
          </Modal.Root>
        </div>
      </section>

      <section>
        <Heading>Popover</Heading>

        <div className="flex gap-4">
          <Popover.Root
            onOpenChange={() => setFirstPopoverOpen((prev) => !prev)}
          >
            <Popover.Trigger>Popover</Popover.Trigger>

            <Popover.Content open={firstPopoverOpen}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              autem facilis ut accusamus eligendi. Libero, dolor repellendus.
              Enim corporis laborum repudiandae, esse necessitatibus dolore!
              Perspiciatis ut at numquam cupiditate aperiam.
            </Popover.Content>
          </Popover.Root>
        </div>
      </section>

      <section>
        <Heading>Progress</Heading>

        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <Progress.Root>
              <Progress.Indicator progress={firstProgress} />
            </Progress.Root>

            <Button onClick={changeProgress}>Change progress</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
