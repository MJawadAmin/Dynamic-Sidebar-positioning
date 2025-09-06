"use client"

import * as React from "react"

interface TooltipIndicatorProps {
  activeItemIndex: number
  visible: boolean
}

export const TooltipIndicator: React.FC<TooltipIndicatorProps> = ({
  activeItemIndex,
  visible
}) => {
  const calculatePosition = () => {
    // Calculate the exact center position for each button
    const buttonHeight = 40 // Standard button height
    const buttonSpacing = 4 // space-y-1 gap between buttons
    const paddingTop = 8 // p-2 = 8px padding from nav top
    
    // Calculate exact center of the active button
    const buttonTop = paddingTop + (activeItemIndex * (buttonHeight + buttonSpacing))
    const buttonCenter = buttonTop + (buttonHeight / 2)
    
    return buttonCenter
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
