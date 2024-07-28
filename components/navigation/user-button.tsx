"use client";

import { Session } from "next-auth";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

export default function UserButton({ user }: Session) {
  console.log({ user });
  return (
    <div>
      <h1>{user?.name}</h1>
      <Button onClick={() => signOut()}>Log out</Button>
    </div>
  );
}
