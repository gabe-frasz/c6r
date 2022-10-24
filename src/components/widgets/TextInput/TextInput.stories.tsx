import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: "Components/Widgets/TextInput",
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder="TextInput placeholder" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
