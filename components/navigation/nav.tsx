import { auth } from "@/server/auth";
import UserButton from "./user-button";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default async function Nav() {
  const session = await auth();

  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          {!session ? (
            <Button asChild>
              <Link className="flex gap-2" href="/auth/login">
                <LogIn size={16} />
                <span>Log in</span>
              </Link>
            </Button>
          ) : (
            <li>
              <UserButton expires={session?.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
