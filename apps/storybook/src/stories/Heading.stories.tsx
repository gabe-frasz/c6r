import { Heading, HeadingProps } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum dolor sit amet",
  },
  argTypes: {
    size: {
      options: ["sm", "base", "lg", "2xl", "3xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with `h1` tag</h1>,
  },
  argTypes: {
    asChild: {
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
  parameters: {
    docs: {
      description: {
        story:
          "The Heading defaults to the `h2` but can be changed via `asChild` prop.",
      },
    },
  },
};
