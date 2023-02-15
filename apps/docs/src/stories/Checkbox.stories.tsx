import { Checkbox, CheckboxProps, Label } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Label flex="row">
          {Story()}
          Keep me logged in for 30 days.
        </Label>
      );
    },
  ],
  args: {
    checked: true,
  },
  argTypes: {
    variant: {
      options: ["fill", "light", "success"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<CheckboxProps>;

export const Fill: StoryObj<CheckboxProps> = {
  args: {
    variant: "fill",
  },
};

export const Light: StoryObj<CheckboxProps> = {
  args: {
    variant: "light",
  },
};

export const Success: StoryObj<CheckboxProps> = {
  args: {
    variant: "success",
  },
};
