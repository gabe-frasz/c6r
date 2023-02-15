import { Input, Label, LabelProps } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Form/Label",
  component: Label,
  args: {
    children: (
      <>
        User{" "}
        <Input.Root>
          <Input.Field placeholder="Type your username here" />
        </Input.Root>
      </>
    ),
  },
  argTypes: {
    flex: {
      options: ["column", "row"],
      control: {
        type: "inline-radio",
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<LabelProps>;

export const FlexColumn: StoryObj<LabelProps> = {
  args: {
    flex: "column",
  },
};

export const FlexRow: StoryObj<LabelProps> = {
  args: {
    flex: "row",
  },
};
