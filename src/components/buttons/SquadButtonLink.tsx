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
        "rounded bg-black/5 text-gray-400 hover:text-black flex items-center justify-center p-3 w-[50px] h-[50px]",
        active && "text-black",
        className
      )}
    >
      {children}
    </Link>
  );
};
