import type React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface DataCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  icon?: React.ReactNode
  trend?: {
    value: string
    positive?: boolean
  }
  className?: string
}

export function DataCard({ title, value, icon, trend, className, ...props }: DataCardProps) {
  return (
    <Card className={cn("card-hover", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <div className="flex items-center mt-1">
            <Badge
              variant="outline"
              className={cn(
                "text-xs",
                trend.positive
                  ? "bg-green-500/10 text-green-500 border-green-500/20"
                  : "bg-red-500/10 text-red-500 border-red-500/20",
              )}
            >
              {trend.value}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

