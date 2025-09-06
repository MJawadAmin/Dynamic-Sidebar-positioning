# Shadcn Reusable Sidebar Component

A modern, responsive sidebar component built with Next.js, TypeScript, and shadcn/ui that features tooltip connections and visual indicators.

## Features

- ✅ **Fully responsive sidebar** with smooth animations
- ✅ **Collapsible design** with toggle button
- ✅ **Tooltip support** when collapsed
- ✅ **Active item indicator** with visual connection to main content
- ✅ **TypeScript support** with proper interfaces
- ✅ **shadcn/ui integration** for consistent styling
- ✅ **Customizable icons and labels**
- ✅ **Visual connection effects** between sidebar and content
- ✅ **Page-specific tooltip indicators**

## Components Structure

```
components/
├── ui/
│   ├── sidebar.tsx          # Main sidebar component
│   ├── page-container.tsx   # Page wrapper component
│   ├── button.tsx           # shadcn button component
│   └── tooltip.tsx          # shadcn tooltip component
├── layout/
│   └── app-layout.tsx       # Layout component with sidebar
└── pages/
    ├── dashboard-page.tsx   # Example dashboard page
    ├── users-page.tsx       # Example users page
    ├── analytics-page.tsx   # Example analytics page
    ├── settings-page.tsx    # Example settings page
    └── help-page.tsx        # Example help page
```

## Usage

### Basic Setup

```tsx
import { useState } from "react"
import { AppLayout } from "@/components/layout/app-layout"
import { SidebarItem } from "@/components/ui/sidebar"

// Define your sidebar items
const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
    tooltip: "Main dashboard"
  },
  {
    id: "users",
    label: "Users", 
    icon: <UsersIcon />,
    tooltip: "Manage users"
  }
]

export function MyApp() {
  const [activeItem, setActiveItem] = useState("dashboard")

  const handleItemClick = (item: SidebarItem) => {
    setActiveItem(item.id)
  }

  return (
    <AppLayout
      sidebarItems={sidebarItems}
      activeItem={activeItem}
      onItemClick={handleItemClick}
    >
      {/* Your page content here */}
    </AppLayout>
  )
}
```

### SidebarItem Interface

```tsx
interface SidebarItem {
  id: string              // Unique identifier
  label: string           // Display text
  icon?: React.ReactNode  // Optional icon component
  tooltip?: string        // Optional tooltip text
  href?: string           // Optional href for routing
}
```

### Sidebar Props

```tsx
interface SidebarProps {
  items: SidebarItem[]                        // Array of sidebar items
  activeItem?: string                         // Currently active item ID
  onItemClick?: (item: SidebarItem) => void  // Click handler
  className?: string                          // Additional CSS classes
  collapsed?: boolean                         // Sidebar collapsed state
  onToggle?: () => void                      // Toggle handler
}
```

## Visual Features

### Tooltip Connection Effect
- When a sidebar item is active, it shows a visual connection extending from the sidebar to the main content
- The connection includes a labeled tooltip showing the current page
- The main content area has a corresponding border indicator

### Collapsible Sidebar
- Click the arrow button to collapse/expand the sidebar
- When collapsed, sidebar items show tooltips on hover
- Smooth animations for all state transitions

### Active Item Indicator
- Active items have a distinct visual style
- Extended tooltip-like effect that connects to the main content
- Visual border indicators on both sidebar and content areas

## Installation

1. Make sure you have shadcn/ui set up in your project:
```bash
npx shadcn@latest init
```

2. Add required shadcn components:
```bash
npx shadcn@latest add button tooltip
```

3. Copy the component files to your project:
   - Copy all files from the `components/` directory
   - Ensure your `lib/utils.ts` has the `cn` function

## Customization

### Icons
Replace the icon components with your preferred icon library (Lucide, Heroicons, etc.)

### Styling
Customize the appearance by modifying the Tailwind classes in the component files

### Animations
Adjust transition durations and effects in the component CSS classes

## Demo

Run the development server to see the sidebar in action:

```bash
npm run dev
```

Navigate to `http://localhost:3000` to interact with the sidebar and see all the visual effects.
