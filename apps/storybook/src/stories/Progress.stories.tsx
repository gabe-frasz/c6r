import { Progress, ProgressRootProps } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data display/Progress",
  component: Progress.Root,
  args: {
    value: 39,
    children: <Progress.Indicator progress={39} />,
  },
  argTypes: {
    value: {
      control: {
        type: null,
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ProgressRootProps>;

export const Default: StoryObj<ProgressRootProps> = {};
