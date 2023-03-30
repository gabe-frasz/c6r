import { createContext } from "react";

interface ModalContextValue {
  open: boolean;
  hideCloseButton: boolean;
}

export const ModalContext = createContext({} as ModalContextValue);
