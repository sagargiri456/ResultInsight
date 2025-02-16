export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // Ensure the API is always dynamically executed
//just changed the code a little bit;


import { NextResponse } from "next/server";
import prisma  from "@/lib/db";


export async function GET() {
  try {
    const marksheets = await prisma.marksheet.findMany();
    return NextResponse.json({ urls: marksheets.map((p) => p.url) });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 });
  }
}