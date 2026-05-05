"use server";

import { prisma } from "@/app/utils/db";

export async function getDashboardStats() {
  const [users, students, teachers, accountants, guardians, committee, admissions] =
    await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { role: "STUDENT" } }),
      prisma.user.count({ where: { role: "TEACHER" } }),
      prisma.user.count({ where: { role: "ACCOUNTANT" } }),
      prisma.user.count({ where: { role: "GUARDIAN" } }),
      prisma.user.count({ where: { role: "COMMITTEE" } }),
      prisma.user.count({ where: { role: "ADMISSION" } }),
    ]);

  const recentUsers = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    select: {
      id: true,
      name: true,
      role: true,
      createdAt: true,
    },
  });

  return {
    users,
    students,
    teachers,
    accountants,
    guardians,
    committee,
    admissions,
    recentUsers,
  };
}