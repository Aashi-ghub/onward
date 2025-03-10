import type React from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, children, className, ...props }: PageHeaderProps) {
  return (
    <div
      className={cn("flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6", className)}
      {...props}
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-1">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  )
}

