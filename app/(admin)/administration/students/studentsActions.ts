"use server";

import { prisma } from "@/app/utils/db";
import bcrypt from "bcrypt";

export type CreateStudentState = {
  success?: boolean;
  error?: string;
};

export async function createStudent(
  prevState: CreateStudentState,
  formData: FormData
): Promise<CreateStudentState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const roll = formData.get("roll") as string;
    const className = formData.get("className") as string;
    const section = formData.get("section") as string;

    if (!name || !email || !password) {
      return { error: "Name, email, password are required" };
    }

    const exists = await prisma.user.findUnique({
      where: { email },
    });

    if (exists) {
      return { error: "User already exists" };
    }

    const hashed = await bcrypt.hash(password, 10);

    // 1. Create User
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        role: "STUDENT",
      },
    });

    // 2. Create Student profile
    await prisma.student.create({
      data: {
        userId: user.id,
        roll,
        className,
        section,
      },
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong" };
  }
}