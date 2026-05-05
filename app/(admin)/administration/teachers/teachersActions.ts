"use server";

import { prisma } from "@/app/utils/db";
import bcrypt from "bcrypt";

export type CreateTeacherState = {
  success?: boolean;
  error?: string;
};

export async function createTeacher(
  prevState: CreateTeacherState,
  formData: FormData
): Promise<CreateTeacherState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const subject = formData.get("subject") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

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

    // 1. Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        role: "TEACHER",
      },
    });

    // 2. Create teacher profile
    await prisma.teacher.create({
      data: {
        userId: user.id,
        subject,
        phone,
        address,
      },
    });

    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong" };
  }
}