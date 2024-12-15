"use client"

import { ScrollArea } from "@/components/ui/scroll-area"

interface RecentUploadsProps {
  data: { name: string }[]; // Array of objects with 'name' as a string
}


export function RecentUploads({data}:RecentUploadsProps) {
  // console.log(data)
  return (
    <ScrollArea className="h-[350px]">
      
          {data.map((item, index) => (
      <div key={index} className="py-2 px-4 border-b">
        <p className="text-sm text-muted-foreground">{item.name}</p>
      </div>
    ))}
      
    </ScrollArea>
  )
}