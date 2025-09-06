# Dynamic Sidebar System Documentation

A comprehensive reusable React component with dynamic tooltip positioning functionality.

## 🎯 Component Overview

The **DynamicSidebarSystem** is a fully-featured sidebar navigation component that creates visual connections between sidebar items and page content through dynamic tooltip positioning.

## 📦 Installation & Usage

### Basic Implementation
```tsx
import { DynamicSidebarSystem } from "@/components/dynamic-sidebar-system"

// Centered 900px container (Practice/Demo)
<DynamicSidebarSystem 
  width="900px"
  centered={true}
  className="bg-background"
/>

// Full-width application
<DynamicSidebarSystem 
  width="100%"
  centered={false}
  className="h-screen"
/>
```

## 🌐 Available Routes

1. **Main Application**: `/` - Full-width implementation
2. **Practice Route**: `/practice` - 900px centered container for testing

## ⚙️ Props Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sidebarItems` | `SidebarItem[]` | Default items | Navigation items array |
| `defaultActiveItem` | `string` | `"dashboard"` | Initial active item |
| `width` | `string` | `"900px"` | Container width |
| `centered` | `boolean` | `true` | Center alignment |
| `className` | `string` | `""` | Additional CSS classes |

## 🔧 Key Features

- **Dynamic Tooltip Positioning**: Single moving tooltip indicator
- **Visual Connection**: Creates unified appearance between sidebar and content
- **Responsive Design**: Collapsible sidebar with mobile support
- **TypeScript Integration**: Full type safety
- **Shadcn/UI Components**: Consistent design system

## 📁 Component Architecture

```
DynamicSidebarSystem/
├── Main Component (dynamic-sidebar-system.tsx)
├── Sidebar (sidebar.tsx)
├── Tooltip Indicator (tooltip-indicator.tsx)
├── App Layout (app-layout.tsx)
├── Page Container (page-container.tsx)
└── Demo Pages (pages/)
```

## 🎨 Technical Implementation

### Tooltip Positioning Algorithm
```tsx
const calculatePosition = () => {
  const itemSpacing = 4
  const position = topOffset + (activeItemIndex * (itemHeight + itemSpacing)) + (itemHeight / 2)
  return position
}
```

### CSS Tooltip Effect
```tsx
<div className="h-4 w-4 rotate-45 border border-t-0 border-r-0 border-border bg-background shadow-sm"></div>
```

## 🚀 Getting Started

1. Import the component
2. Configure props as needed
3. Optionally customize sidebar items
4. Deploy to your desired route

The component is production-ready and optimized for performance with smooth animations and minimal re-renders.

---

**Repository**: Dynamic-Sidebar-positioning  
**Live Demo**: http://localhost:3000/practice
