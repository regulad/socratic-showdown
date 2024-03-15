"use server";

import { type ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "../lib/supabase/server";

export default async function Layout({
  children,
}: {
  children?: ReactNode;
}): Promise<ReactNode> {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  // they are already logged in, they don't need to be here!
  if (data.user) {
    redirect("/dashboard");
  }

  return children;
}
