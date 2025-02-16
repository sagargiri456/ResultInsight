"use client";

import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { Progress } from "@/components/ui/progress";

export function FileUploaderNew() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <UploadButton
        endpoint="marksheetUploader"
        onClientUploadComplete={
            (res: { url: string }[] | undefined) => { 
                alert("Upload Completed"); 
            }
        }

        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      {uploadProgress > 0 && (
        <div className="mt-2">
          <Progress value={uploadProgress} />
          <p className="text-sm text-muted-foreground text-center">
            Uploading... {uploadProgress}%
          </p>
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold">Uploaded Files:</h3>
          <ul className="text-sm list-disc pl-4">
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <a href={file} target="_blank" className="text-blue-600 hover:underline">
                  {file}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 p-4 border rounded-lg bg-red-50 text-red-600">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
