import { createContext } from "react";

interface PopoverContextValue {
  open: boolean;
}

export const PopoverContext = createContext({} as PopoverContextValue);
