"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { useState } from "react";

export function FileAnalyze(){


    const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://resultinsight-backend.onrender.com/analyze", {
        method: "GET",
      });

      const data = await response.json();
      console.log(data.message);
      alert("Analysis started successfully!");
    } catch (error) {
      console.error("Error starting analysis:", error);
      alert("Wait for Analysis to complete.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAnalyze}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
    >
      {loading ? "Analyzing..." : "Start Analysis"}
    </button>
  );
} 
