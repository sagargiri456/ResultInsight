"use client"

import { useEffect, useState } from "react"
import { PerformanceChart } from "@/components/charts/performance-chart"
import { SubjectPerformance } from "@/lib/types/performance"
import { formatPerformanceData } from "@/lib/utils/chart"

// Simulated data - replace with actual API call
const mockData: SubjectPerformance[] = [
  { subject: "Mathematics", year: 2019, average: 72 },
  { subject: "Science", year: 2019, average: 90 },
  { subject: "English", year: 2019, average: 78 },
  { subject: "History", year: 2019, average: 71 },
  { subject: "Geography", year: 2019, average: 73 },
  
  { subject: "Mathematics", year: 2020, average: 74 },
  { subject: "Science", year: 2020, average: 45 },
  { subject: "English", year: 2020, average: 76 },
  { subject: "History", year: 2020, average: 73 },
  { subject: "Geography", year: 2020, average: 75 },
  
  { subject: "Mathematics", year: 2021, average: 76 },
  { subject: "Science", year: 2021, average: 40 },
  { subject: "English", year: 2021, average: 77 },
  { subject: "History", year: 2021, average: 75 },
  { subject: "Geography", year: 2021, average: 78 },
  
  { subject: "Mathematics", year: 2022, average: 78 },
  { subject: "Science", year: 2022, average: 10 },
  { subject: "English", year: 2022, average: 79 },
  { subject: "History", year: 2022, average: 77 },
  { subject: "Geography", year: 2022, average: 80 },
  
  { subject: "Mathematics", year: 2023, average: 80 },
  { subject: "Science", year: 2023, average: 0 },
  { subject: "English", year: 2023, average: 81 },
  { subject: "History", year: 2023, average: 79 },
  { subject: "Geography", year: 2023, average: 82 },
]

export function Overview() {
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    // In a real app, this would be an API call
    const formattedData = formatPerformanceData(mockData)
    setChartData(formattedData)
  }, [])

  return <PerformanceChart data={chartData} />
} 