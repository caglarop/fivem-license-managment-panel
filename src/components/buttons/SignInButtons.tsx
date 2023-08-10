"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="p-3 rounded bg-green-500 text-white"
      onClick={() => signIn("github")}
    >
      Sign in
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="p-3 rounded bg-red-500 text-white"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};
