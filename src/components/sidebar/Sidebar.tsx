"use client";

import { usePathname } from "next/navigation";
import { HomeIcon } from "../icons/HomeIcon";
import { NavButtonLink } from "../buttons/NavButtonLink";

import { useSession } from "next-auth/react";
import { BookIcon } from "../icons/BookIcon";

export const Sidebar = () => {
  const pathName = usePathname();

  const { status } = useSession();

  return (
    <div className="hidden md:block h-screen border-l border-[#5E5F74] w-[90px]">
      <aside className="flex flex-col p-4 gap-4">
        <NavButtonLink href="/" active={pathName.length <= 1}>
          <HomeIcon />
        </NavButtonLink>
        {status !== "loading" && status != "unauthenticated" && (
          <>
            <NavButtonLink
              href="/license"
              active={pathName.startsWith("/license")}
            >
              <BookIcon />
            </NavButtonLink>
          </>
        )}
      </aside>
    </div>
  );
};
