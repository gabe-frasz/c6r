import { Avatar, AvatarProps } from "@c6r/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/gabe-frasz.png",
    alt: "gabe-frasz GitHub avatar image",
  },
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fallback element when Image is not available. It has a delay of 600ms to show.",
      },
    },
  },
};

export const CustomSize: StoryObj<AvatarProps> = {
  args: {
    className: "w-20",
  },
  parameters: {
    docs: {
      description: {
        story: "Only the width is needed as the Avatar aspect-ratio is 1/1.",
      },
    },
  },
};
