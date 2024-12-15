import { CoreSubject, CORE_SUBJECTS, YEARS } from "@/lib/constants/subjects"
import { SubjectPerformance, YearlyPerformance } from "@/lib/types/performance"

export function formatPerformanceData(data: SubjectPerformance[]): YearlyPerformance[] {
  return YEARS.map(year => {
    const yearData: YearlyPerformance = { year }
    
    CORE_SUBJECTS.forEach(subject => {
      const subjectData = data.find(d => d.year === year && d.subject === subject)
      yearData[subject] = subjectData?.average ?? 0
    })
    
    return yearData
  })
}

export const CHART_COLORS = {
  Mathematics: "hsl(var(--chart-1))",
  Science: "hsl(var(--chart-2))",
  English: "hsl(var(--chart-3))",
  History: "hsl(var(--chart-4))",
  Geography: "hsl(var(--chart-5))"
} as const