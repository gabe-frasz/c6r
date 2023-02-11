import { Button, ButtonProps } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Click me",
  },
  argTypes: {
    variant: {
      options: ["default", "outline", "ghost"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    variant: "default",
  },
};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: "outline",
  },
};

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: "ghost",
  },
};

export const Loading: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    isLoading: true,
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};
