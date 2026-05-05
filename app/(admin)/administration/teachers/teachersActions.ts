"use server";

import { prisma } from "@/app/utils/db";

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

    const exists = await prisma.teacher.findFirst({
      where: { email },
    });

    if (exists) {
      return { error: "Teacher already exists" };
    }

    await prisma.teacher.create({
      data: {
        name,
        email,
        password,
        subject,
        phone,
        address,
      },
    });

    return { success: true };
  } catch (err) {
    return { error: "Something went wrong" };
  }
}

export async function getTeachers() {
  return prisma.teacher.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}