"use client"

import { Switch } from "@c6r/react"

export const SwitchDemo = () => {
  return (
    <>
      <Switch.Root defaultChecked size="sm" disabled>
            <Switch.Thumb />
          </Switch.Root>

          <Switch.Root defaultChecked theme="secondary">
            <Switch.Thumb />
          </Switch.Root>

          <Switch.Root defaultChecked size="lg" theme="success">
            <Switch.Thumb />
          </Switch.Root>

          <Switch.Root defaultChecked size="xl">
            <Switch.Thumb />
          </Switch.Root>
    </>
  )
}
