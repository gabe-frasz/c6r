import { AlertDemo } from "@/components/AlertDemo";
import { AvatarDemo } from "@/components/AvatarDemo";
import { InputDemo } from "@/components/InputDemo";
import { ModalDemo } from "@/components/ModalDemo";
import { PopoverDemo } from "@/components/PopoverDemo";
import { ProgressDemo } from "@/components/ProgressDemo";
import { RadioGroupDemo } from "@/components/RadioGroupDemo";
import { SelectDemo } from "@/components/SelectDemo";
import { SwitchDemo } from "@/components/SwitchDemo";
import { TooltipDemo } from "@/components/TooltipDemo";
import { Button, Checkbox, Heading, Skeleton, Spinner } from "@c6r/react";

export default function Home() {
  return (
    <main className="py-16 flex flex-col gap-8 container mx-auto px-4">
      <Heading size="3xl" asChild>
        <h1>C6R Next Preview</h1>
      </Heading>

      <section>
        <Heading>Alert</Heading>

        <div>
          <AlertDemo />
        </div>
      </section>

      <section>
        <Heading>Avatar</Heading>

        <div>
          <AvatarDemo />
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
        <Heading>Highlight</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Input + Label</Heading>

        <div>
          <InputDemo />
        </div>
      </section>

      <section>
        <Heading>Link</Heading>

        <div>soon</div>
      </section>

      <section>
        <Heading>Modal</Heading>

        <div>
          <ModalDemo />
        </div>
      </section>

      <section>
        <Heading>Popover</Heading>

        <div>
          <PopoverDemo />
        </div>
      </section>

      <section>
        <Heading>Progress</Heading>

        <div>
          <ProgressDemo />
        </div>
      </section>

      <section>
        <Heading>Radio Group</Heading>

        <div>
          <RadioGroupDemo />
        </div>
      </section>

      <section>
        <Heading>Select</Heading>

        <div>
          <SelectDemo />
        </div>
      </section>

      <section>
        <Heading>Skeleton</Heading>

        <div>
          <div className="flex-1 w-full ">
            <div className="flex gap-4">
              <Skeleton className="mb-4 w-12 aspect-square rounded-full" />
              <Skeleton className="flex-1 h-12" />
            </div>
            {/* <SkeletonText lines={4} className="gap-4" /> */}
          </div>
        </div>
      </section>

      <section>
        <Heading>Spinner</Heading>

        <div>
          <Spinner size={32} />
        </div>
      </section>

      <section>
        <Heading>Switch</Heading>

        <div>
          <SwitchDemo />
        </div>
      </section>

      <section>
        <Heading>Tooltip</Heading>

        <div>
          <TooltipDemo />
        </div>
      </section>
    </main>
  );
}
