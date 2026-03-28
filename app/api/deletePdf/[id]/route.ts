import { NextResponse } from "next/server";
import { deletePdf } from "@/app/actions/pdfActions";

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  try {
    // Await the params before accessing id
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json({ error: "No ID provided" }, { status: 400 });
    }

    await deletePdf(id);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete PDF" }, { status: 500 });
  }
}