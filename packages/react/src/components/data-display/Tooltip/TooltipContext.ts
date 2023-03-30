import { createContext } from "react";

export interface TooltipContextValue {
  open: boolean;
}

export const TooltipContext = createContext({} as TooltipContextValue);
