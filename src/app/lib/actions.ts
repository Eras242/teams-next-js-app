"use server";
import { TForm } from "./types";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export async function handleLogin(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error.message);
    // redirect("/login/error");
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}
