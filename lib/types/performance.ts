import { CoreSubject, Year } from "@/lib/constants/subjects"

export interface SubjectPerformance {
  subject: CoreSubject
  year: Year
  average: number
}

export interface YearlyPerformance {
  year: Year
  [key: string]: number | Year // Index signature for dynamic subject fields
}