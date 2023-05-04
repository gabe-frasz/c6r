import { AlertDemo } from "@/components/AlertDemo";
import { ModalDemo } from "@/components/ModalDemo";
import { PopoverDemo } from "@/components/PopoverDemo";
import { ProgressDemo } from "@/components/ProgressDemo";
import { TooltipDemo } from "@/components/TooltipDemo";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Checkbox,
  Divider,
  Heading,
  Input,
  InputField,
  InputIcon,
  Label,
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  Skeleton,
  SkeletonText,
  Spinner,
  Switch,
  SwitchThumb,
  Text,
} from "@c6r/react";

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
          <Avatar>
            <AvatarImage src="https://github.com/gabe-frasz.png" />

            <AvatarFallback />
          </Avatar>

          <Avatar>
            <AvatarFallback />
          </Avatar>

          <Avatar className="rounded-none w-fit aspect-auto">
            <AvatarFallback>custom fallback</AvatarFallback>
          </Avatar>
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
          <Label>
            <Text>Without icon</Text>

            <Input>
              <InputField placeholder="Type something..." />
            </Input>
          </Label>

          <Label>
            <Text>Left icon</Text>

            <Input>
              <InputIcon>
                <span>🎉</span>
              </InputIcon>

              <InputField placeholder="Type something..." />
            </Input>
          </Label>

          <Label>
            <Text>Right icon</Text>

            <Input>
              <InputField placeholder="Type something..." />

              <InputIcon>
                <span>🎉</span>
              </InputIcon>
            </Input>
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
          <RadioGroup>
            <RadioGroupItem value="esqueca">
              Esqueça
              <RadioGroupIndicator />
            </RadioGroupItem>

            <RadioGroupItem value="ai">
              Ai
              <RadioGroupIndicator />
            </RadioGroupItem>

            <RadioGroupItem value="toma">
              Toma
              <RadioGroupIndicator />
            </RadioGroupItem>
          </RadioGroup>
        </div>
      </section>

      <section>
        <Heading>Select</Heading>

        <div>
          <Select>
            <SelectTrigger placeholder="Choose some item">
              <SelectIcon />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup label="Group 1">
                <SelectItem value="item-1">Item 1</SelectItem>
                <SelectItem value="item-2">Item 2</SelectItem>
                <SelectItem value="item-3">Item 3</SelectItem>
                <SelectItem value="item-4">Item 4</SelectItem>
                <SelectItem value="item-5">Item 5</SelectItem>
                <SelectItem value="item-6">Item 6</SelectItem>
                <SelectItem value="item-7">Item 7</SelectItem>
                <SelectItem value="item-8">Item 8</SelectItem>
                <SelectItem value="item-9">Item 9</SelectItem>
                <SelectItem value="item-10">Item 10</SelectItem>
                <SelectItem value="item-11">Item 11</SelectItem>
                <SelectItem value="item-12">Item 12</SelectItem>
                <SelectItem value="item-13">Item 13</SelectItem>
              </SelectGroup>

              <Divider />

              <SelectGroup label="Group 2">
                <SelectItem disabled value="item-14">
                  Item 14
                </SelectItem>
                <SelectItem value="item-15">Item 15</SelectItem>
                <SelectItem value="item-16">Item 16</SelectItem>
                <SelectItem value="item-17">Item 17</SelectItem>
                <SelectItem value="item-18">Item 18</SelectItem>
                <SelectItem value="item-19">Item 19</SelectItem>
                <SelectItem value="item-20">Item 20</SelectItem>
                <SelectItem value="item-21">Item 21</SelectItem>
                <SelectItem value="item-22">Item 22</SelectItem>
                <SelectItem value="item-23">Item 23</SelectItem>
                <SelectItem value="item-24">Item 24</SelectItem>
                <SelectItem value="item-25">Item 25</SelectItem>
                <SelectItem value="item-26">Item 26</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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

            <SkeletonText lines={4} className="gap-4" />
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
          <Switch defaultChecked size="sm" disabled>
            <SwitchThumb />
          </Switch>

          <Switch defaultChecked theme="secondary">
            <SwitchThumb />
          </Switch>

          <Switch defaultChecked size="lg" theme="success">
            <SwitchThumb />
          </Switch>

          <Switch defaultChecked size="xl">
            <SwitchThumb />
          </Switch>
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
