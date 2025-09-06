"use client"

import * as React from "react"
import { Sidebar, SidebarItem } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export interface AppLayoutProps {
  children: React.ReactNode
  sidebarItems: SidebarItem[]
  activeItem?: string
  onItemClick?: (item: SidebarItem) => void
  className?: string
}

export const AppLayout = React.forwardRef<HTMLDivElement, AppLayoutProps>(
  ({ children, sidebarItems, activeItem, onItemClick, className }, ref) => {
    const [collapsed, setCollapsed] = React.useState(false)

    return (
      <div ref={ref} className={cn("flex h-screen bg-background overflow-hidden", className)}>
        <Sidebar
          items={sidebarItems}
          activeItem={activeItem}
          onItemClick={onItemClick}
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
        
        <main className="flex-1 relative overflow-hidden bg-background">
          {/* Simple content area */}
          <div className="h-full overflow-auto pl-8 pr-6 py-6">
            {children}
          </div>
        </main>
      </div>
    )
  }
)

AppLayout.displayName = "AppLayout"
