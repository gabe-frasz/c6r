# C6R for React 🚧

**C6R** components inherit most of the props from the Radix primitives.

## API Reference

### Alert

```jsx
<Alert>
  <AlertTrigger />
  <AlertContent>
    <AlertTitle />
    <AlertDescription />
    <AlertCancel />
    <AlertAction />
  </AlertContent>
</Alert>
```

[Base props](https://www.radix-ui.com/docs/primitives/components/alert-dialog#api-reference)

#### AlertContent

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| overlayClassName | string | - | The classes that will be passed to the background (overlay) of the Alert. |

#### AlertCancel

This component renders a [**C6R** Button](#button) and has both the Radix and Button props.

#### AlertAction

This component renders a [**C6R** Button](#button) and has both Radix and Button props.

### Avatar

```jsx
<Avatar>
  <AvatarImage />
  <AvatarFallback />
</Avatar>
```

[Base props](https://www.radix-ui.com/docs/primitives/components/avatar#api-reference)

#### AvatarFallback

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| delayMs | number | 600 | Useful for delaying rendering so it only appears for those with slower connections. |

### Button

```jsx
<Button />
```

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| asChild | boolean | - | Change the default rendered element for the one passed as a child, merging their props and behavior. Read [Radix guide](https://www.radix-ui.com/docs/primitives/guides/composition). |
| variant | string | "default" | Change the component style easily. |
| theme | string | "primary" | Main color of the component. |

### Checkbox

```jsx
<Checkbox>
  <CheckboxIndicator />
</Checkbox>
```

[Base props](https://www.radix-ui.com/docs/primitives/components/checkbox#api-reference)

#### Checkbox

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| variant | string | "default" | Change the component style easily. |
| theme | string | "primary" | Main color of the component. |

#### CheckboxIndicator

It renders a default icon when no children is provided. To overwrite it just add the desired one inside the component.

```jsx
<Checkbox>
  <CheckboxIndicator>
    <span>😎</span>
  </CheckboxIndicator>
</Checkbox>
```

### Divider

```jsx
<Divider />
```

[Base props](https://www.radix-ui.com/docs/primitives/components/separator#api-reference)

### Heading

```jsx
<Heading />
```

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| size | string | "base" | A pre-defined standard for the text size. |
| asChild | boolean | - | Change the default rendered element for the one passed as a child, merging their props and behavior. Read [Radix guide](https://www.radix-ui.com/docs/primitives/guides/composition). |

### Input

```jsx
<Input>
  <InputField />
  <InputIcon />
</Input>
```

#### InputField

A regular `<input />`.

#### InputIcon

Place the desired icon inside this component. In order to change the side that the icon is displayed, simply place it before or after the `<InputField />`.

### Label

```jsx
<Label />
```

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| flex | string | "column" | The flex direction inside the component. |

### Modal

```jsx
<Modal>
  <ModalTrigger />
  <ModalContent>
    <ModalTitle />
    <ModalDescription />
    <ModalClose />
  </ModalContent>
</Modal>
```

[Base props](https://www.radix-ui.com/docs/primitives/components/dialog#api-reference)

#### ModalContent

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| overlayClassName | string | - | The classes that will be passed to the background (overlay) of the Alert. |

#### ModalClose

It renders a default icon when no children is provided. To overwrite it just add the desired one inside the component.

#### ModalTitle

It renders a [**C6R** Heading](#heading).

#### ModalDescription

It renders a [**C6R** Text](#text).

### Popover

```jsx
<Popover>
  <PopoverTrigger />
  <PopoverContent />
</Popover>
```

[Base props](https://www.radix-ui.com/docs/primitives/components/popover#api-reference)

#### PopoverContent

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| arrowClassName | string | - | The classes that will be passed to the Popover arrow. |
| sideOffset | number | 5 | The distance in pixels from the anchor. |

### RadioGroup

```jsx
<RadioGroup>
  <RadioGroupItem>
    <RadioGroupIndicator />
  </RadioGroupItem>
</RadioGroup>
```

[Base props](https://www.radix-ui.com/docs/primitives/components/radio-group#api-reference)

### Select

```jsx
<Select>
  <SelectTrigger>
    <SelectIcon />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem />
    </SelectGroup>
  </SelectContent>
</Select>
```

[Base props](https://www.radix-ui.com/docs/primitives/components/select#api-reference)

#### SelectIcon

It renders a default icon when no children is provided. To overwrite it just add the desired one inside the component.

#### SelectGroup

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| label | string | - | The label of the group. |
| labelClassName | string | - | The classes that will be passed to the SelectGroup label. |

### Skeleton

```jsx
<Skeleton />
```

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| asChild | boolean | - | Change the default rendered element for the one passed as a child, merging their props and behavior. Read [Radix guide](https://www.radix-ui.com/docs/primitives/guides/composition). |

### SkeletonText

```jsx
<SkeletonText />
```

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| lines | number | - | Quantity of text lines to display. |
| asChild | boolean | - | Change the default rendered element for the one passed as a child, merging their props and behavior. Read [Radix guide](https://www.radix-ui.com/docs/primitives/guides/composition). |

### Spinner

```jsx
<Spinner />
```

### Switch

```jsx
<Switch>
  <SwitchThumb />
</Switch>
```

[Base props](https://www.radix-ui.com/docs/primitives/components/switch#api-reference)

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| size | string | "md" | Pre-defined Switch sizes. |
| theme | string | "primary" | Main color of the component. |

### Text

```jsx
<Text />
```

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| size | string | "base" | A pre-defined standard for the text size. |
| asChild | boolean | - | Change the default rendered element for the one passed as a child, merging their props and behavior. Read [Radix guide](https://www.radix-ui.com/docs/primitives/guides/composition). |
