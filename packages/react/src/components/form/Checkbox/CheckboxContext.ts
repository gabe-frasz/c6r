import { VariantProps } from "class-variance-authority";
import { createContext } from "react";
import { indicator } from "./Checkbox.styles";

interface CheckboxContextValue extends VariantProps<typeof indicator> {}

export const CheckboxContext = createContext({} as CheckboxContextValue);
