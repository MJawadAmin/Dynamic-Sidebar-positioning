import { PageContainer } from "@/components/ui/page-container"

export const HelpPage = () => {
  return (
    <PageContainer
      title="Help & Documentation"
      description="Learn how to use the sidebar and tooltip features"
    >
      <div className="space-y-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Sidebar Features</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">🎯 Active Page Indicator</h4>
              <p className="text-sm text-muted-foreground">
                When you click on a sidebar item, it becomes active and shows a visual connection 
                between the sidebar and the main content area with tooltip-like effects.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">🔄 Collapsible Sidebar</h4>
              <p className="text-sm text-muted-foreground">
                Click the arrow button in the sidebar header to collapse/expand the sidebar. 
                When collapsed, hover over items to see tooltips.
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">🏷️ Tooltip Connection</h4>
              <p className="text-sm text-muted-foreground">
                The active page shows a connected tooltip effect that visually links the sidebar 
                selection to the current page content, creating a unified visual experience.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Usage Instructions</h3>
          
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Click any item in the sidebar to navigate to that page</li>
            <li>Notice the visual connection between the sidebar and main content</li>
            <li>Use the toggle button to collapse the sidebar for more content space</li>
            <li>When collapsed, hover over sidebar items to see tooltips</li>
            <li>The active page indicator shows which section you&apos;re currently viewing</li>
          </ol>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Component Structure</h3>
          
          <div className="bg-muted/30 p-4 rounded-lg font-mono text-sm">
            <div>📁 components/</div>
            <div className="ml-4">📁 ui/</div>
            <div className="ml-8">📄 sidebar.tsx (Main sidebar component)</div>
            <div className="ml-8">📄 page-container.tsx (Page wrapper)</div>
            <div className="ml-4">📁 layout/</div>
            <div className="ml-8">📄 app-layout.tsx (Layout with sidebar)</div>
            <div className="ml-4">📁 pages/</div>
            <div className="ml-8">📄 dashboard-page.tsx</div>
            <div className="ml-8">📄 users-page.tsx</div>
            <div className="ml-8">📄 analytics-page.tsx</div>
            <div className="ml-8">📄 settings-page.tsx</div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
