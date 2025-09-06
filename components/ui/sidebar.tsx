"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipIndicator } from "@/components/ui/tooltip-indicator"
import { cn } from "@/lib/utils"

export interface SidebarItem {
  id: string
  label: string
  icon?: React.ReactNode
  tooltip?: string
  href?: string
}

export interface SidebarProps {
  items: SidebarItem[]
  activeItem?: string
  onItemClick?: (item: SidebarItem) => void
  className?: string
  collapsed?: boolean
  onToggle?: () => void
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ items, activeItem, onItemClick, className, collapsed = false, onToggle }, ref) => {
    // Calculate active item index for tooltip positioning
    const activeItemIndex = items.findIndex(item => item.id === activeItem)
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col bg-background border-r border-border h-screen transition-all duration-300 z-10",
          collapsed ? "w-16" : "w-64",
          className
        )}
      >
        {/* Toggle Button */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!collapsed && (
            <h2 className="text-lg font-semibold">Navigation</h2>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="h-8 w-8 p-0"
          >
            <svg
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                collapsed ? "rotate-180" : "rotate-0"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-2 relative">
          <TooltipProvider>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={activeItem === item.id ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start gap-3 relative",
                          collapsed ? "px-2" : "px-3",
                          activeItem === item.id && "bg-secondary text-secondary-foreground"
                        )}
                        onClick={() => onItemClick?.(item)}
                      >
                        {item.icon && (
                          <span className="flex-shrink-0">
                            {item.icon}
                          </span>
                        )}
                        {!collapsed && (
                          <span className="truncate">{item.label}</span>
                        )}
                      </Button>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right" sideOffset={12}>
                        <p>{item.tooltip || item.label}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </li>
              ))}
            </ul>
          </TooltipProvider>
          
          {/* Single moving tooltip indicator */}
          <TooltipIndicator
            activeItemIndex={activeItemIndex}
            itemHeight={40} // Approximate button height
            topOffset={8} // Offset from nav top
            visible={activeItemIndex >= 0}
          />
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground text-center">
            {!collapsed ? "Sidebar v1.0" : "v1.0"}
          </div>
        </div>
      </div>
    )
  }
)

Sidebar.displayName = "Sidebar"
