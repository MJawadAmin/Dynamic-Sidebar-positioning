// Example of how to use the Sidebar component in your own projects

import { useState } from "react"
import { AppLayout } from "@/components/layout/app-layout"
import { SidebarItem } from "@/components/ui/sidebar"

// Define your sidebar items
const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />, // Your icon component
    tooltip: "Main dashboard"
  },
  {
    id: "profile",
    label: "Profile",
    icon: <ProfileIcon />, // Your icon component
    tooltip: "User profile"
  },
  // Add more items as needed
]

export function MyApp() {
  const [activeItem, setActiveItem] = useState("dashboard")

  const handleItemClick = (item: SidebarItem) => {
    setActiveItem(item.id)
    // You can also handle routing here
    // router.push(`/${item.id}`)
  }

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return <DashboardContent />
      case "profile":
        return <ProfileContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <AppLayout
      sidebarItems={sidebarItems}
      activeItem={activeItem}
      onItemClick={handleItemClick}
    >
      {renderContent()}
    </AppLayout>
  )
}

// Component Props Interface
interface SidebarItem {
  id: string           // Unique identifier
  label: string        // Display text
  icon?: React.ReactNode  // Optional icon
  tooltip?: string     // Optional tooltip text
  href?: string        // Optional href for routing
}

interface SidebarProps {
  items: SidebarItem[]           // Array of sidebar items
  activeItem?: string            // Currently active item ID
  onItemClick?: (item: SidebarItem) => void  // Click handler
  className?: string             // Additional CSS classes
  collapsed?: boolean            // Sidebar collapsed state
  onToggle?: () => void         // Toggle handler
}

// Features:
// ✅ Fully responsive sidebar
// ✅ Collapsible with toggle button
// ✅ Tooltip support when collapsed
// ✅ Active item indicator with visual connection
// ✅ Smooth animations
// ✅ TypeScript support
// ✅ shadcn/ui integration
// ✅ Customizable icons and labels
// ✅ Visual connection between sidebar and content
// ✅ Page-specific tooltip effects
