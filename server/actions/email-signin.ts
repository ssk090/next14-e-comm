"use server";

import { eq } from "drizzle-orm";
import { loginSchema } from "@/types/login-schema";
import { createSafeActionClient } from "next-safe-action";
import { db } from "..";
import { users } from "../schema";

const action = createSafeActionClient();

export const emailSignIn = action(
  loginSchema,
  async ({ email, password, code }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser?.email !== email) {
      return { error: "Email not found" };
    }

    if (existingUser?.emailVerified) console.log(email, password, code);
    return { success: email };
  }
);
