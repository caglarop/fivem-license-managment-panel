import clsx from "clsx";
import React, { AnchorHTMLAttributes } from "react";

import Link from "next/link";

interface NavButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;

  active?: boolean;
  loading?: boolean;

  className?: string;
}

export const NavButtonLink: React.FC<NavButtonLinkProps> = ({
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
        "rounded text-gray-400 hover:text-black aspect-square flex items-center p-3 justify-center w-[50px] h-[50px]",
        active && "!text-black",
        className
      )}
    >
      {children}
    </Link>
  );
};
