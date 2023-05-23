import { ProgressDemo } from "@/components/ProgressDemo";
import {
  Alert,
  AlertAction,
  AlertCancel,
  AlertContent,
  AlertDescription,
  AlertTitle,
  AlertTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Checkbox,
  CheckboxIndicator,
  Divider,
  Heading,
  Input,
  InputField,
  InputIcon,
  Label,
  Modal,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
  SkeletonText,
  Spinner,
  Switch,
  SwitchThumb,
  Text,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
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
          <Alert>
            <AlertTrigger asChild>
              <Button>Alert</Button>
            </AlertTrigger>

            <AlertContent>
              <AlertTitle>Some title</AlertTitle>

              <AlertDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, magni quia? Tempore, cumque deleniti facilis minus nam
                doloremque iste. Saepe, quaerat architecto! Nisi cum nobis hic
                alias dicta voluptatibus iusto.
              </AlertDescription>

              <footer className="mt-4 flex gap-4 justify-end">
                <AlertCancel>Cancel</AlertCancel>
                <AlertAction>Do something bad</AlertAction>
              </footer>
            </AlertContent>
          </Alert>
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
          <Checkbox defaultChecked>
            <CheckboxIndicator />
          </Checkbox>

          <Checkbox defaultChecked variant="light" theme="secondary">
            <CheckboxIndicator />
          </Checkbox>

          <Checkbox defaultChecked theme="success">
            <CheckboxIndicator>
              <span>😎</span>
            </CheckboxIndicator>
          </Checkbox>
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
          <Modal>
            <ModalTrigger asChild>
              <Button>With close button</Button>
            </ModalTrigger>

            <ModalContent>
              <ModalClose />

              <ModalTitle>Some text</ModalTitle>

              <ModalDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, magni quia? Tempore, cumque deleniti facilis minus nam
                doloremque iste. Saepe, quaerat architecto! Nisi cum nobis hic
                alias dicta voluptatibus iusto.
              </ModalDescription>
            </ModalContent>
          </Modal>

          <Modal>
            <ModalTrigger asChild>
              <Button>Without close button</Button>
            </ModalTrigger>

            <ModalContent>
              <ModalTitle>Some text</ModalTitle>

              <ModalDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, magni quia? Tempore, cumque deleniti facilis minus nam
                doloremque iste. Saepe, quaerat architecto! Nisi cum nobis hic
                alias dicta voluptatibus iusto.
              </ModalDescription>
            </ModalContent>
          </Modal>
        </div>
      </section>

      <section>
        <Heading>Popover</Heading>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" theme="secondary">
                Show popover
              </Button>
            </PopoverTrigger>

            <PopoverContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              autem facilis ut accusamus eligendi. Libero, dolor repellendus.
              Enim corporis laborum repudiandae, esse necessitatibus dolore!
              Perspiciatis ut at numquam cupiditate aperiam.
            </PopoverContent>
          </Popover>
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
            <RadioGroupItem value="lorem">
              Lorem
              <RadioGroupIndicator />
            </RadioGroupItem>

            <RadioGroupItem value="ipsum">
              Ipsum
              <RadioGroupIndicator />
            </RadioGroupItem>

            <RadioGroupItem value="dolor">
              Dolor
              <RadioGroupIndicator />
            </RadioGroupItem>
          </RadioGroup>
        </div>
      </section>

      <section>
        <Heading>Select</Heading>

        <div>
          <Select>
            <SelectTrigger asChild>
              <Button className="min-w-[160px] justify-between gap-4 bg-base-200 text-base-content">
                <SelectValue placeholder="Choose some item" />

                <SelectIcon />
              </Button>
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="w-10 h-10 rounded-full">
                  🎉
                </Button>
              </TooltipTrigger>

              <TooltipContent>Lorem ipsum, dolor sit amet</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </section>
    </main>
  );
}
