// app/api/savePdf/route.ts
import { NextRequest, NextResponse } from "next/server";
import { savePdfs } from "@/app/actions/pdfActions";

export async function POST(req: NextRequest) {
  const files = await req.json(); // [{ name, url }]
  const saved = await savePdfs(files);
  return NextResponse.json(saved);
}