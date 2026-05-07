"use server";

import { prisma } from "@/app/utils/db";
import bcrypt from "bcrypt";

export type CreateStudentState = {
  success?: boolean;
  error?: string;
};

function generateRegistrationNo() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `STU-${random}`;
}

export async function createStudent(
  prevState: CreateStudentState,
  formData: FormData
): Promise<CreateStudentState> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const className = formData.get("className") as any;
    const section = formData.get("section") as any;
    const roll = formData.get("roll") as string;

    const gender = formData.get("gender") as any;
    const dateOfBirthRaw = formData.get("dateOfBirth") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const guardianId = formData.get("guardianId") as string;

    // validation
    if (!name || !password || !className || !section) {
      return { error: "Required fields missing" };
    }

    // duplicate email check (student level)
    const exists = await prisma.student.findFirst({
      where: { email },
    });

    if (exists && email) {
      return { error: "Student with this email already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const dateOfBirth = dateOfBirthRaw
      ? new Date(dateOfBirthRaw)
      : null;

    await prisma.student.create({
      data: {
        registrationNo: generateRegistrationNo(),

        name,
        email: email || null,
        password: hashedPassword,

        className,
        section,
        roll: roll || null,

        gender: gender || null,
        dateOfBirth,

        phone: phone || null,
        address: address || null,

        guardianId: guardianId || null,
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
    orderBy: { createdAt: "desc" },
  });
}