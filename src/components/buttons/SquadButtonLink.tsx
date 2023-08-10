import clsx from "clsx";
import React, { AnchorHTMLAttributes } from "react";

import Link from "next/link";

interface SquadButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  active?: boolean;
  loading?: boolean;
}

export const SquadButtonLink: React.FC<SquadButtonLinkProps> = ({
  children,
  href,
  active,
  loading,
  className,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      href={href}
      className={clsx(
        "rounded text-white bg-white/10 hover:text-black hover:bg-white aspect-square flex items-center justify-center p-3 w-[50px] h-[50px]",
        active && "bg-white text-black",
        className
      )}
    >
      {children}
    </Link>
  );
};
