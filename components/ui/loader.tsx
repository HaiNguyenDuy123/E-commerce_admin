"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export const Loader = () => {
  const [progress, setProgress] = React.useState(16)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[30%]" />
}
