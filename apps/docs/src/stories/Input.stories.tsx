import { Input, InputRootProps } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";
import { At } from "phosphor-react";

export default {
  title: "Form/Input",
  component: Input.Root,
  args: {
    children: [
      <Input.Icon key={1}>
        <At />
      </Input.Icon>,
      <Input.Field key={2} placeholder="e.g. johndoe@example.com" />,
    ],
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {};

export const RightIcon: StoryObj<InputRootProps> = {
  args: {
    children: [
      <Input.Field key={2} placeholder="e.g. johndoe@example.com" />,
      <Input.Icon key={1}>
        <At />
      </Input.Icon>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "`Input.Root` uses flex by default. Place the `Input.Icon` after `Input.Field` to move it to the right side.",
      },
    },
  },
};

export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: (
      <Input.Field type="password" placeholder="Type your password here" />
    ),
  },
};
