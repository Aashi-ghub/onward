import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  children?: React.ReactNode
}

export function SectionHeader({ title, description, children, className, ...props }: SectionHeaderProps) {
  return (
    <div
      className={cn("flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4", className)}
      {...props}
    >
      <div>
        <h2 className="text-lg font-medium leading-none tracking-tight">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  )
}

