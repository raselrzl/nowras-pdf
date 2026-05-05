"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function getCurrentUser() {
  const cookieStore = await cookies();

  const user = cookieStore.get("user")?.value;

  if (!user) return null;

  return JSON.parse(user);
}



export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete("user");

  redirect("/");
}