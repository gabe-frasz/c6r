import { VariantProps } from "class-variance-authority";
import { createContext } from "react";
import { switchRoot } from "./Switch.styles";

interface SwitchContextValue {
  size?: VariantProps<typeof switchRoot>["size"];
}

export const SwitchContext = createContext({} as SwitchContextValue);
