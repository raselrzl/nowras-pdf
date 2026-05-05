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
    const role = formData.get("role") as "USER" | "ADMIN";

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    if (password.length < 6) {
      return { error: "Password must be at least 6 characters" };
    }

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: role || "USER",
      },
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong" };
  }
}


export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },

      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,

        // ⚠️ OPTIONAL (only for admin debugging)
        password: true,
      },
    });

    return { users };
  } catch (error) {
    return { error: "Failed to fetch users" };
  }
}