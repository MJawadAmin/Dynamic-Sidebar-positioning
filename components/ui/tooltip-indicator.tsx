"use client"

import * as React from "react"

interface TooltipIndicatorProps {
  activeItemIndex: number
  itemHeight: number
  topOffset: number
  visible: boolean
}

export const TooltipIndicator: React.FC<TooltipIndicatorProps> = ({
  activeItemIndex,
  itemHeight,
  topOffset,
  visible
}) => {
  const calculatePosition = () => {
    // Calculate the exact position based on active item index
    const itemSpacing = 4 // space-y-1 = 4px gap
    const position = topOffset + (activeItemIndex * (itemHeight + itemSpacing)) + (itemHeight / 2)
    return position
  }

  if (!visible) return null

  return (
    <div 
      className="absolute right-0 pointer-events-none z-30 transition-all duration-300 ease-in-out"
      style={{ 
        top: `${calculatePosition()}px`,
        transform: 'translateY(-50%)'
      }}
    >
      {/* Single tooltip indicator that appears to extend from the page content */}
      <div className="absolute top-1/2 left-[-8px] transform -translate-y-1/2">
        <div className="h-4 w-4 rotate-45 border border-t-0 border-r-0 border-border bg-background shadow-sm"></div>
      </div>
    </div>
  )
}
