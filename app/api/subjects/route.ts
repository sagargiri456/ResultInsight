import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const subjects = await prisma.subjects.findMany({
      select: {
        subject: true,
        average: true
      }
    });
    
    return NextResponse.json(subjects);
  } catch (error) {
    console.error("Error fetching subjects:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

