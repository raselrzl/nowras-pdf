import { prisma } from "../utils/db";



export async function getAllPdfs() {
  try {
    const data = await prisma.pdf.findMany({
      orderBy: { createdAt: "desc" },
    });

    console.log("PDF DATA:", data); // 👈 مهم

    return data;
  } catch (error) {
    console.error("DB ERROR:", error); // 👈 مهم
    return [];
  }
}

export async function savePdfs(files: { name: string; url: string }[]) {
  const created = await prisma.pdf.createMany({
    data: files.map((f) => ({
      name: f.name,
      url: f.url,
    })),
  });

  return await prisma.pdf.findMany({
    orderBy: { createdAt: "desc" },
    take: files.length,
  });
}

export async function deletePdf(id: string) {
  return await prisma.pdf.delete({ where: { id } });
}