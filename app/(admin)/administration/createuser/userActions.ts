"use server";

import { prisma } from "@/app/utils/db";
import bcrypt from "bcrypt";

export type CreateUserState = {
  success?: boolean;
  error?: string;
};

export async function createUser(
  prevState: CreateUserState,
  formData: FormData
): Promise<CreateUserState> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const role = formData.get("role") as any;

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    const exists = await prisma.user.findUnique({
      where: { email },
    });

    if (exists) {
      return { error: "User already exists" };
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashed,
        name,
        role,
      },
    });

    return { success: true };
  } catch (err) {
    return { error: "Something went wrong" };
  }
}

export async function getUsers() {
  return prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
}