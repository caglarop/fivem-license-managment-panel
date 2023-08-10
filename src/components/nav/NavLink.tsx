import clsx from "clsx";
import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  children,
  active,
  className,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      href={rest.href || ""}
      className={clsx(
        active && "text-white",
        "text-secondary hover:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
};
