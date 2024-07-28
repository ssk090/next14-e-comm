"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { AuthCard } from "./auth-card";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/types/login-schema";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { emailSignIn } from "@/server/actions/email-signin";
import { useAction } from "next-safe-action/hooks";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { execute, status } = useAction(emailSignIn, {
    onSuccess(data) {
      console.log(data);
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    execute(values);
  };

  return (
    <div>
      <h1>
        <AuthCard
          cardTitle="Welcome"
          backButtonHref="/auth/register"
          backButtonLabel="Create a new account"
          showSocials
        >
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            autoComplete="email"
                            placeholder="Email"
                          />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            autoComplete="current-password"
                            placeholder="Password"
                          />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button asChild variant={"link"}>
                    <Link href="/auth/reset">Forgot your password?</Link>
                  </Button>
                </div>
                <Button
                  type="submit"
                  className={cn(
                    "w-full my-2",
                    status === "executing" ? "animate-pulse" : ""
                  )}
                >
                  {"Login"}
                </Button>
              </form>
            </Form>
          </div>
        </AuthCard>
      </h1>
    </div>
  );
}
