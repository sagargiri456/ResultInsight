"use client"

import { useEffect, useState } from "react"
import { PerformanceChart } from "@/components/charts/performance-chart"
import { formatPerformanceData } from "@/lib/utils/chart"

interface SubjectData {
  subject: string
  average: number
}

export function Overview() {
  const [chartData, setChartData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSubjectData = async () => {
      try {
        const response = await fetch('/api/subjects')
        const subjects: SubjectData[] = await response.json()
        
        // Create a simple bar chart data structure
        const chartData = subjects.map(subj => ({
          subject: subj.subject,
          average: subj.average
        }))
        
        setChartData(chartData)
      } catch (error) {
        console.error('Error fetching subject data:', error)
        // Fallback to empty data
        setChartData([])
      } finally {
        setLoading(false)
      }
    }

    fetchSubjectData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[350px]">
        <div className="text-muted-foreground">Loading performance data...</div>
      </div>
    )
  }

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-[350px]">
        <div className="text-muted-foreground">No performance data available. Run analysis to see results.</div>
      </div>
    )
  }

  return <PerformanceChart data={chartData} />
} 