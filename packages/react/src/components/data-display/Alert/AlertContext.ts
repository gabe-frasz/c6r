import { createContext } from "react";

export interface AlertContextValue {
  open: boolean;
}

export const AlertContext = createContext({} as AlertContextValue);
