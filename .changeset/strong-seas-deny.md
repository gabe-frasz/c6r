---
"@c6r/react": major
---

major

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
