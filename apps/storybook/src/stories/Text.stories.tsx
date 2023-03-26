import { Text, TextProps } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: "base",
    weight: "normal",
    children:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus quidem exercitationem necessitatibus qui, facere voluptatum molestiae? Amet modi mollitia eveniet sed explicabo aperiam sapiente iure officia ipsa. Reiciendis, error est?",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
    weight: {
      options: [
        "extra-light",
        "light",
        "normal",
        "medium",
        "semibold",
        "bold",
        "extra-bold",
        "black",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Base: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with `p` tag</p>,
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
          "The Text defaults to the `span` tag but can be changed via `asChild` prop.",
      },
    },
  },
};
