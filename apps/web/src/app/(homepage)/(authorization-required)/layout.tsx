"use server";

import { type ReactNode } from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";

// @ts-expect-error -- known working code
export default async function Layout({
  children,
}: {
  children?: ReactNode;
}): Promise<ReactNode> {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- we need to check for the user? why is eslint mistaken?
  if (error || !data.user) {
    redirect("/login");
  }

  return children;
}
