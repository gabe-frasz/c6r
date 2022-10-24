import c from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <label className="w-full flex rounded focus-within:ring-2 focus-within:ring-cyan-300">
      {children}
    </label>
  );
};

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = ({ ...props }: TextInputInputProps) => {
  return (
    <input
      {...props}
      className={c(
        "flex-1 h-full px-3 py-4 bg-gray-800 text-gray-100 text-sm rounded",
        "placeholder:text-gray-400",
        "focus:outline-none"
      )}
    />
  );
};

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <>{children}</>;
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
