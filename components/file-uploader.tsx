"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function FileUploader() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [fileContent, setFileContent] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0] // Since maxFiles is 1
    console.log("File details:", file)

    // Example: Read file content based on its type
    const reader = new FileReader()
    
    reader.onload = (event) => {
      const content = event.target?.result
      if (typeof content === "string") {
        setFileContent(content)
        console.log("File content:", content)
      } else {
        setErrorMessage("Unable to read file content.")
      }
    }
    
    // Read the file based on its type
    if (file.type === "application/pdf") {
      reader.readAsArrayBuffer(file) // Use ArrayBuffer for PDFs or binary files
    } else {
      reader.readAsText(file) // Read as text for CSV, Excel, etc.
    }

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        // Reset progress after a delay
        setTimeout(() => setUploadProgress(0), 1000)
      }
    }, 200)

    // Send file to the backend (example)
    const uploadFile = async () => {
      try {
        const formData = new FormData()
        formData.append("file", file)

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })

        if (response.ok) {
          console.log("File uploaded successfully!")
        } else {
          setErrorMessage("Failed to upload the file.")
        }
      } catch (error) {
        setErrorMessage("An error occurred during file upload.")
        console.error("Upload error:", error)
      }
    }

    uploadFile()
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "text/csv": [".csv"],
      "application/pdf": [".pdf"],
    },
    maxFiles: 2,
  })

  return (
    <div>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
          isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary"
        )}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        {isDragActive ? (
          <p className="text-lg">Drop the file here...</p>
        ) : (
          <div>
            <p className="text-lg mb-2">Drag and drop your marksheet here</p>
            <p className="text-sm text-muted-foreground">
              Supports Excel, CSV, and PDF files
            </p>
          </div>
        )}
      </div>
      
      {uploadProgress > 0 && (
        <div className="mt-4 space-y-2">
          <Progress value={uploadProgress} />
          <p className="text-sm text-center text-muted-foreground">
            Uploading... {uploadProgress}%
          </p>
        </div>
      )}

      {/* Show file content or error message */}
      {fileContent && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold">File Content:</h3>
          <pre className="text-sm">{fileContent}</pre>
        </div>
      )}
      
      {errorMessage && (
        <div className="mt-4 p-4 border rounded-lg bg-red-50 text-red-600">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  )
}
