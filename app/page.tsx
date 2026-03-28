import { getAllPdfs } from "./actions/pdfActions";
import HomePageClient from "./HomePageClient";

export default async function HomePage() {
  const pdfs = await getAllPdfs(); // Prisma returns createdAt as Date

  // Convert createdAt to ISO string for the client
  const formattedPdfs = pdfs.map((p) => ({
    ...p,
    createdAt: p.createdAt.toISOString(),
  }));

  return (
    <div>
      <HomePageClient initialPdfs={formattedPdfs} />
    </div>
  );
}
