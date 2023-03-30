import { createContext } from "react";

export interface PopoverContextValue {
  open: boolean;
}

export const PopoverContext = createContext({} as PopoverContextValue);
