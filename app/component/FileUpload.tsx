// components/FileUpload.tsx
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsUploading(true);
    setError(null);

    try {
      const res = await fetch('/api/upload/', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data);
      } else {
        const errorData = await res.json();
        setError(errorData.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to upload file');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload PDF'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && <p>Upload successful: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default FileUpload;
