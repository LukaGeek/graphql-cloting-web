"use server";

import { revalidatePath } from "next/cache";

const { signIn, signOut } = require("@/auth");

export async function login(provider) {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
}

export async function logout(provider) {
  await signOut(provider, { redirectTo: "/" });
  revalidatePath("/");
}
