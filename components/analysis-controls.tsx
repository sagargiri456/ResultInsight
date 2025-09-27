"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Play, CheckCircle, AlertCircle } from "lucide-react"

export function AnalysisControls() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisStatus, setAnalysisStatus] = useState<"idle" | "processing" | "completed" | "error">("idle")
  const [message, setMessage] = useState("")

  const startAnalysis = async () => {
    setIsAnalyzing(true)
    setAnalysisStatus("processing")
    setMessage("Analyzing existing student data...")

    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await response.json()

      if (response.ok) {
        setAnalysisStatus("completed")
        setMessage("Analysis completed successfully! Performance insights have been updated.")
        
        // Refresh the page after a short delay to show updated data
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } else {
        setAnalysisStatus("error")
        setMessage(data.message || "Analysis failed")
      }
    } catch (error) {
      setAnalysisStatus("error")
      setMessage("Failed to connect to analysis server. Make sure the backend is running.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Analysis</CardTitle>
        <CardDescription>
          Analyze existing student data and generate performance insights
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Button 
            onClick={startAnalysis} 
            disabled={isAnalyzing}
            className="flex items-center gap-2"
          >
            {isAnalyzing ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            {isAnalyzing ? "Processing..." : "Start Analysis"}
          </Button>
          
          {analysisStatus === "completed" && (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Analysis Complete</span>
            </div>
          )}
          
          {analysisStatus === "error" && (
            <div className="flex items-center gap-2 text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">Analysis Failed</span>
            </div>
          )}
        </div>
        
        {message && (
          <div className={`p-3 rounded-md text-sm ${
            analysisStatus === "completed" 
              ? "bg-green-50 text-green-700 border border-green-200" 
              : analysisStatus === "error"
              ? "bg-red-50 text-red-700 border border-red-200"
              : "bg-blue-50 text-blue-700 border border-blue-200"
          }`}>
            {message}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
