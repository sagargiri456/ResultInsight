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
  "AD402- [T]": "hsl(var(--chart-1))",
  "AD403- [T]": "hsl(var(--chart-2))",
  "AD404- [T]": "hsl(var(--chart-3))",
  "AD405- [T]": "hsl(var(--chart-4))",
  "BT401- [T]": "hsl(var(--chart-5))",
  "AD402- [P]": "hsl(var(--chart-1))",
  "AD403- [P]": "hsl(var(--chart-2))",
  "AD404- [P]": "hsl(var(--chart-3))",
  "AD405- [P]": "hsl(var(--chart-4))",
  "AD406- [P]": "hsl(var(--chart-5))"
} as const