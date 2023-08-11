"use client";

import Link from "next/link";

import { useSession } from "next-auth/react";

export default function Page() {
  const { status } = useSession();

  return (
    <div className="">
      <h1 className="text-3xl font-seibold">Welcome!</h1>

      <p className="my-3">Here you can manage your licenses.</p>

      {status === "unauthenticated" && (
        <Link
          className="bg-primary text-white py-3 px-6 rounded inline-block"
          href="/api/auth/signin"
        >
          Sign in
        </Link>
      )}
    </div>
  );
}
