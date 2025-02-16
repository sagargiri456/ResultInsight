"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUploaderNew } from "@/components/file-uploader-new"
import {FileAnalyze} from "@/components/file-analyze"

export default function UploadPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Upload Marksheets</CardTitle>
          <CardDescription>
            Upload your marksheet files in Excel, CSV, or PDF format
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileUploaderNew />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Analyze Marksheets</CardTitle>
          <CardDescription>
            Start the analysis of all the marksheets you uploaded above.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileAnalyze/>
        </CardContent>
      </Card>
    </div>
  )
}