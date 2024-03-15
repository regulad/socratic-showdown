"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "../../lib/supabase/server";

const UsernamePasswordLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export interface LoginState {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
}

export async function login(
  previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const supabase = createClient();

  const validatedParsedFormData = UsernamePasswordLoginSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedParsedFormData.success) {
    return {
      errors: validatedParsedFormData.error.flatten().fieldErrors,
      message: "Failed to login. Check the form for errors.",
    };
  }

  const { email, password } = validatedParsedFormData.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      message: error.message,
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
