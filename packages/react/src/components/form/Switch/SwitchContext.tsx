import { createContext } from "react";

interface SwitchContextValue {
  size?: "sm" | "md" | "lg" | null;
}

export const SwitchContext = createContext({} as SwitchContextValue);
