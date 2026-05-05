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
      return { error: "Name, email, password required" };
    }

    // check duplicate student email
    const exists = await prisma.student.findFirst({
      where: { email },
    });

    if (exists) {
      return { error: "Student already exists" };
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.student.create({
      data: {
        name,
        email,
        password: hashed,
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

export async function getStudents() {
  return prisma.student.findMany({
    include: {
      guardian: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}