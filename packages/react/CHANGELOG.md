# @c6r/react

## 2.0.0

### Major Changes

- b489fa9: major

  - **Removed components**
    - AspectRatio
    - VisuallyHidden

  obs: Just a copy of Radix components, no need to keep them.

  - **Refactor**
    - export every single component instead of an object
    - turn Modal close button into a separate component and remove `hideCloseButton` from its context
    - remove `isLoading` prop from Button and add `asChild`
    - turn Select trigger icon into a separate component, add custom className to Select group label
    - add custom className to Modal and Alert overlay components
    - allow custom Radio group icon
    - allow custom className in SkeletonText and Divider components

## 1.8.3

### Patch Changes

- 0586ba1: patch

  - **Fix**
    - export missing interfaces

- 372ba88: patch

  - **Fix**
    - remove unwanted attribute from DOM button

## 1.8.2

### Patch Changes

- 22c3368: patch

  - **Refactor**
    - add "use client" directive to all components

## 1.8.1

### Patch Changes

- fd79863: patch

  - **Fix**
    - add use client directive to all missing components

## 1.8.0

### Minor Changes

- eaea2e9: minor
  - **Build**
    - change build output
    - remove commonjs support
  - **Fix**
    - Alert
      - add use client directive

## 1.7.0

### Minor Changes

- 4ec63a1: minor
  - **New components**
    - Alert
    - RadioGroup
    - Tooltip
  - **Refactor**
    - Popover
      - use context
      - prevent unmount in order to run transition properly
    - Switch
      - add focus styling

## 1.6.0

### Minor Changes

- 768bf21:
  - **New components**
    - Divider
    - Select
    - Spinner
  - **Refactor**
    - Popover
      - removed open/closed transition
    - Button
      - changed framer-motion click animation for tailwind

## 1.5.0

### Minor Changes

- 3e8eadc:
  - **Avatar**
    - use composition
    - allow custom fallback
  - **Button, Checkbox**
    - add theme variants
  - **Modal**
    - add mobile styling
  - **Modal, Popover, Progress**
    - use context api
- ed047ee:
  - **New components**
    - Switch
    - VisuallyHidden
    - AspectRatio
    - Skeleton
    - SkeletonText

### Patch Changes

- 85281d5:
  - **Progress**
    - fix accessibility

## 1.4.0

### Minor Changes

- 3debe68:
  - use react "use client" directive

## 1.3.1

### Patch Changes

- 15a8110:
  - fix transition duration on popover

## 1.3.0

### Minor Changes

- 40bc0c9:
  - add prop to show or hide close button on modal

## 1.2.2

### Patch Changes

- ecbecb4:
  - checkbox component is uncontrolled by default

## 1.2.1

### Patch Changes

- 006886a:
  - remove default Button from Modal and Popover triggers

## 1.2.0

### Minor Changes

- 428e958:
  - add Popover

### Patch Changes

- dd03da7:
  - fix: change Modal.Content wrapper position to absolute
  - refactor: justify Button items on center

## 1.1.0

### Minor Changes

- 4cffa7d: Add more components
