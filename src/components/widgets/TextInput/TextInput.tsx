import { Slot } from "@radix-ui/react-slot";
import c from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="w-full h-12 px-3 py-4 flex justify-center items-center gap-3 bg-gray-800 text-gray-100 rounded focus-within:ring-2 focus-within:ring-cyan-300">
      {children}
    </div>
  );
};

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = ({ ...props }: TextInputInputProps) => {
  return (
    <input
      {...props}
      className={c(
        "flex-1 py-4 bg-transparent text-sm rounded",
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
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
