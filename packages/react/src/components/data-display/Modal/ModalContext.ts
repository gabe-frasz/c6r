import { createContext } from "react";

interface ModalContextValue {
  open: boolean;
}

export const ModalContext = createContext({} as ModalContextValue);
