"use client"

import { useState } from "react"
import { Sidebar, SidebarItem } from "@/components/ui/sidebar"

// Simple example icons
const HomeIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const ProfileIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const NotificationIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM12.01 2.011a3.2 3.2 0 012.113.797 3.28 3.28 0 01-.114 4.518l-3.033 2.96a5.997 5.997 0 00-8.925 0l-3.033-2.96a3.28 3.28 0 01-.114-4.518A3.211 3.211 0 016.11 2.01L12.01 2.011z" />
  </svg>
)

// Simple sidebar items for demo
const simpleSidebarItems: SidebarItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <HomeIcon />,
    tooltip: "Go to homepage"
  },
  {
    id: "profile",
    label: "Profile",
    icon: <ProfileIcon />,
    tooltip: "View your profile"
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <NotificationIcon />,
    tooltip: "Check notifications"
  }
]

export default function SimpleSidebarExample() {
  const [activeItem, setActiveItem] = useState("home")
  const [collapsed, setCollapsed] = useState(false)

  const handleItemClick = (item: SidebarItem) => {
    setActiveItem(item.id)
    console.log(`Clicked: ${item.label}`)
  }

  const renderContent = () => {
    switch (activeItem) {
      case "home":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Home Page</h1>
            <p className="text-muted-foreground">Welcome to the home page! This is a simple example of using the Sidebar component directly.</p>
          </div>
        )
      case "profile":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
            <p className="text-muted-foreground">This is your profile page. Notice how the tooltip moves to center on this menu item.</p>
          </div>
        )
      case "notifications":
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Notifications</h1>
            <p className="text-muted-foreground">Your notifications appear here. The tooltip is perfectly centered on the notifications button.</p>
          </div>
        )
      default:
        return <div className="p-6">Select a menu item</div>
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted/30 p-4">
      <div className="w-[800px] h-[500px] bg-background border border-border rounded-lg shadow-lg overflow-hidden">
        <div className="flex h-full">
          {/* Direct Sidebar component usage */}
          <Sidebar
            items={simpleSidebarItems}
            activeItem={activeItem}
            onItemClick={handleItemClick}
            collapsed={collapsed}
            onToggle={() => setCollapsed(!collapsed)}
            className="border-r"
          />
          
          {/* Simple content area */}
          <main className="flex-1 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  )
}
