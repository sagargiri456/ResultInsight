export const CORE_SUBJECTS = [
    "AD402- [T]",
    "AD403- [T]",
    "AD404- [T]",
    "AD405- [T]",
    "BT401- [T]",
    "AD402- [P]",
    "AD403- [P]",
    "AD404- [P]",
    "AD405- [P]",
    "AD406- [P]"
  ] as const
  
  export const YEARS = [2019, 2020, 2021, 2022, 2023] as const
  
  export type CoreSubject = typeof CORE_SUBJECTS[number]
  export type Year = typeof YEARS[number]