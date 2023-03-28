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
  Skeleton,
  SkeletonText,
  Switch,
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
        <Heading>Alert</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Avatar</Heading>

        <div>
          <Avatar.Root>
            <Avatar.Image src="https://github.com/gabe-frasz.png" />

            <Avatar.Fallback />
          </Avatar.Root>

          <Avatar.Root>
            <Avatar.Fallback />
          </Avatar.Root>

          <Avatar.Root className="rounded-none w-fit aspect-auto">
            <Avatar.Fallback>custom fallback</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </section>

      <section>
        <Heading>Badge</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Breadcrumb</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Buttons</Heading>

        <div>
          <Button>Default</Button>
          <Button variant="outline" theme="secondary">
            Outline
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button theme="success">Success</Button>
          <Button theme="error">Error</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading={true}>Whatever</Button>
        </div>
      </section>

      <section>
        <Heading>Checkbox</Heading>

        <div>
          <Checkbox defaultChecked />
          <Checkbox defaultChecked variant="light" theme="secondary" />
          <Checkbox defaultChecked theme="success" />
        </div>
      </section>

      <section>
        <Heading>Code</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Divider</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Highlight</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Input + Label</Heading>

        <div>
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
        </div>
      </section>

      <section>
        <Heading>Link</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Modal</Heading>

        <div>
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, magni quia? Tempore, cumque deleniti facilis minus nam
                doloremque iste. Saepe, quaerat architecto! Nisi cum nobis hic
                alias dicta voluptatibus iusto.
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

        <div>
          <Popover.Root
            open={firstPopoverOpen}
            onOpenChange={() => setFirstPopoverOpen((prev) => !prev)}
          >
            <Popover.Trigger>Show popover</Popover.Trigger>

            <Popover.Content>
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

        <div>
          <div className="flex-1 flex flex-col gap-2">
            <Progress.Root value={firstProgress}>
              <Progress.Indicator />
            </Progress.Root>

            <Button onClick={changeProgress}>Change progress</Button>
          </div>
        </div>
      </section>

      <section>
        <Heading>Radio Group</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Select</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Skeleton</Heading>

        <div>
          <div className="flex-1 w-full ">
            <div className="flex gap-4">
              <Skeleton className="mb-4 w-12 aspect-square rounded-full" />
              <Skeleton className="flex-1 h-12" />
            </div>
            <SkeletonText lines={4} className="gap-4" />
          </div>
        </div>
      </section>

      <section>
        <Heading>Spinner</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Switch</Heading>

        <div>
          <Switch.Root defaultChecked size="sm" disabled>
            <Switch.Thumb />
          </Switch.Root>

          <Switch.Root defaultChecked theme="secondary">
            <Switch.Thumb />
          </Switch.Root>

          <Switch.Root defaultChecked size="lg" theme="success">
            <Switch.Thumb />
          </Switch.Root>
        </div>
      </section>

      <section>
        <Heading>Tooltip</Heading>

        <div>soon</div>
      </section>
    </div>
  );
}
