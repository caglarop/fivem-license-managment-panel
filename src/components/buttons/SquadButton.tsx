import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface SquadButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  loading?: boolean;
}

export const SquadButton: React.FC<SquadButtonProps> = ({
  children,
  active,
  loading,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded text-white bg-white/10 hover:text-black hover:bg-white aspect-square flex items-center justify-center w-[50px] h-[50px] p-3",
        active && "bg-white text-black",
        className
      )}
    >
      {children}
    </button>
  );
};
