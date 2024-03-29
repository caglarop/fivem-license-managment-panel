import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  loading?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({
  children,
  active,
  loading,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded text-gray-400 hover:text-black aspect-square flex items-center justify-center w-[50px] h-[50px]",
        active && "!text-black"
      )}
    >
      {children}
    </button>
  );
};
