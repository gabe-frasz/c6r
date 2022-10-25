import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Widgets/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story: typeof Checkbox) => {
      return (
        <label className="flex items-centerg gap-3">
          {Story()} <Text size="sm">Checkbox component</Text>
        </label>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
