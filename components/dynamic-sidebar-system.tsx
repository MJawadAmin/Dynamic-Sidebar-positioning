"use client"

import { useState } from "react"
import { AppLayout } from "@/components/layout/app-layout"
import { SidebarItem } from "@/components/ui/sidebar"
import { DashboardPage } from "@/components/pages/dashboard-page"
import { UsersPage } from "@/components/pages/users-page"
import { AnalyticsPage } from "@/components/pages/analytics-page"
import { SettingsPage } from "@/components/pages/settings-page"
import { HelpPage } from "@/components/pages/help-page"
import { ComponentDemoPage } from "@/components/pages/component-demo-page"

// Icons for the sidebar
const DashboardIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v3H8V5z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const AnalyticsIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
)

const SettingsIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const HelpIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ComponentIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
)

const defaultSidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
    tooltip: "View dashboard overview"
  },
  {
    id: "users",
    label: "Users",
    icon: <UsersIcon />,
    tooltip: "Manage users"
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <AnalyticsIcon />,
    tooltip: "View analytics data"
  },
  {
    id: "settings",
    label: "Settings",
    icon: <SettingsIcon />,
    tooltip: "Application settings"
  },
  {
    id: "help",
    label: "Help",
    icon: <HelpIcon />,
    tooltip: "Help and documentation"
  },
  {
    id: "component-demo",
    label: "Component",
    icon: <ComponentIcon />,
    tooltip: "Component documentation"
  }
]

export interface DynamicSidebarSystemProps {
  sidebarItems?: SidebarItem[]
  defaultActiveItem?: string
  className?: string
  width?: string
  centered?: boolean
}

export const DynamicSidebarSystem: React.FC<DynamicSidebarSystemProps> = ({
  sidebarItems = defaultSidebarItems,
  defaultActiveItem = "dashboard",
  className = "",
  width = "900px",
  centered = true
}) => {
  const [activeItem, setActiveItem] = useState(defaultActiveItem)

  const handleItemClick = (item: SidebarItem) => {
    setActiveItem(item.id)
  }

  const renderPage = () => {
    switch (activeItem) {
      case "dashboard":
        return <DashboardPage />
      case "users":
        return <UsersPage />
      case "analytics":
        return <AnalyticsPage />
      case "settings":
        return <SettingsPage />
      case "help":
        return <HelpPage />
      case "component-demo":
        return <ComponentDemoPage />
      default:
        return <DashboardPage />
    }
  }

  const containerStyle = {
    width: width,
    maxWidth: "100%",
    height: "100vh"
  }

  const wrapperClass = centered 
    ? "flex justify-center items-start min-h-screen bg-background p-4"
    : "min-h-screen bg-background"

  return (
    <div className={wrapperClass}>
      <div 
        style={containerStyle}
        className={`shadow-2xl border border-border rounded-lg overflow-hidden ${className}`}
      >
        <AppLayout
          sidebarItems={sidebarItems}
          activeItem={activeItem}
          onItemClick={handleItemClick}
        >
          {renderPage()}
        </AppLayout>
      </div>
    </div>
  )
}

export default DynamicSidebarSystem
