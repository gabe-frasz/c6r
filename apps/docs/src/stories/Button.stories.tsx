import { Button, ButtonProps } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Click me",
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
