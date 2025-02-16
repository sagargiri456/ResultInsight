import { NextResponse } from "next/server";
import prisma  from "@/lib/db";

export const dynamic = "force-dynamic"; // Ensure the API is always dynamically executed
export const runtime = "nodejs";

export async function GET() {
  try {
    const marksheets = await prisma.marksheet.findMany();
    return NextResponse.json({ urls: marksheets.map((m) => m.url) });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 });
  }
}