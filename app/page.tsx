import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentUploads } from "@/components/recent-uploads"
import prisma from "@/app/lib/db"

export default async function Home() {
  const Array_of_object_of_names = await prisma.students.findMany({
    distinct:['name'],
    select:{
      name:true,
    }
  })

  const Mean_score = await prisma.students.findFirst({
    orderBy:{
      id:'desc',
    },
    select:{
      scores:true,
    }
  })

  
  const Total_number_of_subjects = await prisma.subjects.findMany({
    select:{
      subject:true,
    }
  })
  // console.log(Array_of_object_of_names);
  // console.log(Mean_score)
  // console.log(Total_number_of_subjects)
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Array_of_object_of_names.length - 1}</div>
            <p className="text-xs text-muted-foreground">
              Across all uploaded marksheets
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{parseFloat(Mean_score.scores.toFixed(2))}%</div>
            <p className="text-xs text-muted-foreground">
              Overall performance
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Total_number_of_subjects.length - 1}</div>
            <p className="text-xs text-muted-foreground">
              Unique subjects tracked
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Marksheets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Array_of_object_of_names.length - 1}</div>
            <p className="text-xs text-muted-foreground">
              Total uploads
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              Average scores across subjects over time
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Uploads</CardTitle>
            <CardDescription>
              Latest marksheets uploaded to the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentUploads 
            data={Array_of_object_of_names}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}