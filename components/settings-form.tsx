"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

const settingsSchema = z.object({
  defaultSubjects: z.string(),
  gradeSystem: z.string(),
  passingScore: z.string().regex(/^\d+$/, {
    message: "Must be a valid number",
  }),
})

export function SettingsForm() {
  const form = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      defaultSubjects: "Mathematics,Science,English,History,Geography",
      gradeSystem: "percentage",
      passingScore: "40",
    },
  })

  function onSubmit(data: z.infer<typeof settingsSchema>) {
    toast({
      title: "Settings updated",
      description: "Your settings have been saved successfully.",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="defaultSubjects"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Default Subjects</FormLabel>
              <FormControl>
                <Input placeholder="Mathematics,Science,English..." {...field} />
              </FormControl>
              <FormDescription>
                Enter subject names separated by commas
              </FormDescription>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="gradeSystem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Grade System</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade system" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="percentage">Percentage</SelectItem>
                  <SelectItem value="letter">Letter Grade</SelectItem>
                  <SelectItem value="gpa">GPA</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Choose how grades should be displayed
              </FormDescription>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="passingScore"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passing Score</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormDescription>
                Minimum score required to pass
              </FormDescription>
            </FormItem>
          )}
        />

        <Button type="submit">Save Settings</Button>
      </form>
    </Form>
  )
}