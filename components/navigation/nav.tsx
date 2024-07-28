import { auth } from "@/server/auth";
import UserButton from "./user-button";

export default async function Nav() {
  const session = await auth();

  return (
    <header className="bg-slate-500 py-4">
      <nav>
        <ul className="flex justify-between">
          <li>logo</li>
          <li>
            {session && (
              <UserButton expires={session?.expires} user={session?.user} />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
