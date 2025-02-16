import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SubjectPerformance from '@/components/subject-performance';
import StudentDistribution  from "@/components/student-distribution"
import prisma from "@/lib/db"

export default async function AnalysisPage() {
  const average_score_per_subject = await prisma.subjects.findMany();
  const student_distribution_data = await prisma.results.findMany();
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Subject Performance Analysis</CardTitle>
          <CardDescription>
            Average performance across different subjects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SubjectPerformance data = {average_score_per_subject}/>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Student Score Distribution</CardTitle>
          <CardDescription>
            Distribution of students across different score ranges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StudentDistribution data={student_distribution_data}/>
        </CardContent>
      </Card>
    </div>
  )
}