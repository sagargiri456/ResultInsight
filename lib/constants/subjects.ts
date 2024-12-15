export const CORE_SUBJECTS = [
    "Mathematics",
    "Science",
    "English",
    "History",
    "Geography"
  ] as const
  
  export const YEARS = [2019, 2020, 2021, 2022, 2023] as const
  
  export type CoreSubject = typeof CORE_SUBJECTS[number]
  export type Year = typeof YEARS[number]