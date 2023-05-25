# ![C6R logo](/.github/docs/logo-white.png)

[![My Github](https://img.shields.io/badge/Gabe%20Frasz-c6r-gold?style=flat-square)](https://github.com/gabe-frasz)
[![Github issues](https://img.shields.io/github/issues/gabe-frasz/c6r?color=red&style=flat-square)](https://github.com/gabe-frasz/c6r/issues)
[![GitHub license](https://img.shields.io/github/license/gabe-frasz/c6r?style=flat-square)](https://github.com/gabe-frasz/c6r/blob/main/LICENSE)
[![Github commit](https://img.shields.io/github/last-commit/gabe-frasz/c6r?color=blue&style=flat-square)](https://github.com/gabe-frasz/c6r/commits/main)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

> C6R sounds like "COR" and stands for "Cellular"

# Table of Contents

- [General Info](#general-info)
- [Documentation](#documentation)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Components](#components)
- [Contributing](#contributing)
- [Used by](#used-by)
- [Acknowledgement](#acknowledgement)
- [License & Contact](#license--contact)

# General Info

**C6R** is a comprehensive UI kit designed to enhance the user interface of web applications. It offers a versatile collection of pre-styled components that are fully customizable, allowing developers to create visually appealing and consistent UIs effortlessly. With a strong emphasis on accessibility and flexibility, **C6R** simplifies the process of building engaging user interfaces.

This package was primarily developed to address a personal pain point of repeatedly recreating the same components for small side projects. The aim was to provide a comprehensive UI kit that would save time and effort. **C6R** has been built with a focus on ease and accessibility, leveraging the power of [Tailwind CSS](https://tailwindcss.com/) and [Radix](https://www.radix-ui.com/).

> C6R is currently under development

> For more information about my dev journey, consider visiting my [LinkedIn](https://linkedin.com/in/gabriel-vs-frasao)

# Documentation

> In progress 🚧

# Installation

Install the core package with its keyframes.

```bash
npm install @c6r/react @c6r/keyframes

# pnpm
pnpm add @c6r/react @c6r/keyframes

# yarn
yarn add @c6r/react @c6r/keyframes
```

> @c6r/keyframes installation **is not** mandatory. It is a Tailwind configuration full of keyframes, so if you don't want components to be animated you can skip it.

# Usage

**Configure Tailwind**:

- add `"./node_modules/@c6r/react/dist/**/*.js"` to `content` array
- add color values
  - `primary`: the color that all the components are based as default ***(required)***
  - `secondary`: components with `theme` property can use this color
  - `base`: used for backgrounds ***(required)***
- add the keyframes preset ***(required only if you want animated components)***

```js
# tailwind.config.js

const { blue, violet, zinc } = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@c6r/react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: blue,
        secondary: violet,
        base: {
          100: zinc[700],
          200: zinc[800],
          300: zinc[900],
          content: "#FFF",
        },
      },
    },
  },
  presets: [require("@c6r/keyframes")],
};
```

**Import components and you're good to go**

```tsx
import { Button } from "@c6r/react";

export function App() {
  return (
    <Button onClick={() => console.log("something")}>
      Say something
    </Button>
  )
}
```

# Customization

**C6R** provides flexibility in customizing the components to match your desire.

Some components may offer props and styling options that can be modified to achieve the desired look and feel, but all of them receive classes normally and your Tailwind classes automatically overwrite the default ones.

The main ways you can customize the components are:

- using props like `variant`, `theme` and `size`
- through `className` prop
- creating your own animations with Tailwind keyframes

***Note on Customization***: While **C6R** provides a range of customization options for its components, it is worth noting that the package has its own opinionated design choices. If you require complete control over the styling of your components, we recommend using [Radix](https://www.radix-ui.com/) directly, which offers a more unopinionated approach and allows for extensive customization. Radix can be a great choice if you prefer to build UIs from the ground up, tailoring every aspect to your specific needs.

# Components

- [x] [Alert](./packages/react/README.md#alert)
- [x] [Avatar](./packages/react/README.md#avatar)
- [ ] Badge
- [ ] Breadcrumb
- [x] [Button](./packages/react/README.md#button)
- [x] [Checkbox](./packages/react/README.md#checkbox)
- [ ] Code
- [x] [Divider](./packages/react/README.md#divider)
- [x] [Heading](./packages/react/README.md#heading)
- [ ] Highlight
- [x] [Input](./packages/react/README.md#input)
- [x] [Label](./packages/react/README.md#label)
- [ ] Link
- [x] [Modal](./packages/react/README.md#modal)
- [x] [Popover](./packages/react/README.md#popover)
- [x] [Progress](./packages/react/README.md#progress)
- [x] [RadioGroup](./packages/react/README.md#radiogroup)
- [x] [Select](./packages/react/README.md#select)
- [x] [Skeleton](./packages/react/README.md#skeleton)
- [x] [SkeletonText](./packages/react/README.md#skeletontext)
- [x] [Spinner](./packages/react/README.md#spinner)
- [x] [Switch](./packages/react/README.md#switch)
- [x] [Text](./packages/react/README.md#text)

# Contributing

Contributions are welcome! If you find a bug, have a feature request, or want to contribute improvements, please feel free to open an issue or a pull request.

# Used by

- [OnlyHabits](https://onlyhabits.vercel.app)

# Acknowledgement

- Completely inspired and based on [shadcn/ui](https://github.com/shadcn/ui) and [Ignite Lab 03](https://github.com/rocketseat-education/ignite-lab-design-system)
- Many thanks to [Rocketseat](https://github.com/rocketseat)
- Built from scratch with [Tailwind CSS](https://tailwindcss.com/), [cva](https://cva.style/docs) and [Radix](https://www.radix-ui.com/)

# License & Contact


[MIT License](https://github.com/gabe-frasz/$repoName/blob/main/LICENSE) &copy; Gabriel VS Frasão

Feel free to get in touch with me on my [Gmail](mailto:gabrielvitor.frasao@gmail.com), [Instagram](https://instagram/gabe_frasz) or [LinkedIn](https://linkedin.com/in/gabriel-vs-frasao).
