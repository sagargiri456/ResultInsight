import { NextResponse } from 'next/server';

export async function GET() {
  const trends = {
    average_sgpa: 7.5,
    most_common_grade: 'B+',
    pass_percentage: 95.0,
  };
  return NextResponse.json({ trends });
}
