// app/page.tsx (Server Component)

import { getAllPdfs } from "./actions/pdfActions";
import HomePageClient from "./HomePageClient";

export const dynamic = "force-dynamic"; // ✅ HERE (correct place)

export default async function HomePage() {
  const pdfs = await getAllPdfs();

  const formattedPdfs = pdfs.map((p) => ({
    ...p,
    createdAt: p.createdAt.toISOString(),
  }));

  return <HomePageClient initialPdfs={formattedPdfs} />;
}