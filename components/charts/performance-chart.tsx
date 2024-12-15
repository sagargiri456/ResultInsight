"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts"
import { CORE_SUBJECTS } from "@/lib/constants/subjects"
import { CHART_COLORS } from "@/lib/utils/chart"
import { Card, CardContent } from "@/components/ui/card"

interface TooltipContentProps {
  active?: boolean
  payload?: any[]
  label?: string
}

const CustomTooltip = ({ active, payload, label }: TooltipContentProps) => {
  if (active && payload && payload.length) {
    return (
      <Card>
        <CardContent className="p-2 space-y-1">
          <p className="text-sm font-medium">{label}</p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <span className="text-xs" style={{ color: entry.color }}>
                {entry.name}:
              </span>
              <span className="text-xs font-medium">
                {entry.value.toFixed(1)}%
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }
  return null
}

export function PerformanceChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis
          dataKey="year"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {CORE_SUBJECTS.map((subject) => (
          <Line
            key={subject}
            type="monotone"
            dataKey={subject}
            name={subject}
            stroke={CHART_COLORS[subject]}
            strokeWidth={2}
            dot={{
              stroke: CHART_COLORS[subject],
              strokeWidth: 2,
              r: 4,
              fill: "hsl(var(--background))"
            }}
            activeDot={{
              stroke: CHART_COLORS[subject],
              strokeWidth: 2,
              r: 6,
              fill: "hsl(var(--background))"
            }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}