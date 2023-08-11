"use client";

import Link from "next/link";
import { Logo } from "../Logo";
import { NavLink } from "./NavLink";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const Navbar = () => {
  const pathName = usePathname();

  const { status, data } = useSession();

  useEffect(() => {}, [status]);

  return (
    <div className="h-[90px] flex items-center">
      <div className="flex px-8 lg:px-12 mx-auto w-full">
        <div className="flex-1">
          <div>
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          {status === "loading" ? (
            <></>
          ) : status === "unauthenticated" ? (
            <NavLink
              href="/api/auth/signin"
              active={pathName.startsWith("/api/auth/signin")}
            >
              Sign In
            </NavLink>
          ) : (
            <>
              <NavLink
                href="/api/auth/signout"
                className="text-white flex gap-4 items-center"
              >
                <div>
                  {data?.user?.image ? (
                    <img
                      className="rounded-full"
                      alt=""
                      width={35}
                      height={35}
                      src={data?.user?.image || ""}
                    />
                  ) : (
                    <div className="rounded-full bg-white/20 h-[35px] w-[35px]"></div>
                  )}
                </div>

                <div>
                  {data?.user?.name} ({data?.user?.id})
                </div>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
