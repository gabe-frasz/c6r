import { Parameters } from "@storybook/addons";
import { themes } from "@storybook/theming";

import "../src/globals.css";

export const parameters: Parameters = {
  backgrounds: {
    default: "dark",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
