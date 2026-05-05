"use server";

import { prisma } from "@/app/utils/db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email and password required" };
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: "Invalid credentials" };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return { error: "Invalid credentials" };
  }

  const cookieStore = await cookies();

  cookieStore.set(
    "user",
    JSON.stringify({
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    }),
    {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
    }
  );

  return { success: true, role: user.role };
}