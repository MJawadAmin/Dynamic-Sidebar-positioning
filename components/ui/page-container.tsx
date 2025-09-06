import * as React from "react"

export interface PageContainerProps {
  children: React.ReactNode
  title: string
  description?: string
  className?: string
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  description,
  className
}) => {
  return (
    <div className={`space-y-6 relative ${className || ""}`}>
      {/* Clean border that matches the tooltip indicator */}
      <div className="absolute left-[-100px] top-0 w-1 h-full bg-border"></div>
      
      <div className="border-b border-border pb-4 relative">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-2">{description}</p>
        )}
      </div>
      
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}
