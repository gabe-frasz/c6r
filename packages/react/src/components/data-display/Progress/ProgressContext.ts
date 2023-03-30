import { createContext } from "react";

interface ProgressContextValue {
  value: number;
}

export const ProgressContext = createContext({} as ProgressContextValue);
