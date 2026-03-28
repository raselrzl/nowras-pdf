import { prisma } from "../utils/db";



export async function getAllPdfs() {
  return await prisma.pdf.findMany({ orderBy: { createdAt: "desc" } });
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