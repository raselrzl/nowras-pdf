import { getAllPdfs } from "./actions/pdfActions";
import HomePageClient from "./HomePageClient";

export default async function HomePage() {
  const pdfs = await getAllPdfs(); // ✅ Runs on server
  return <HomePageClient initialPdfs={pdfs} />;
}