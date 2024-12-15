import { NextResponse } from 'next/server';

export async function GET() {
  const clusters = [
    { grade: 'A+', count: 10 },
    { grade: 'A', count: 15 },
    { grade: 'B+', count: 20 },
  ];
  return NextResponse.json({ clusters });
}
