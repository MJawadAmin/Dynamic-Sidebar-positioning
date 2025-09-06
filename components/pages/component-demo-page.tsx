import { PageContainer } from "@/components/ui/page-container"

export const ComponentDemoPage = () => {
  return (
    <PageContainer
      title="Dynamic Sidebar System"
      description="Reusable component with tooltip positioning functionality"
    >
      <div className="space-y-8">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">🎯 Component Overview</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">📦 Package Name</h4>
              <p className="text-sm text-muted-foreground font-mono">
                DynamicSidebarSystem
              </p>
            </div>
            
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">🔧 Core Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Reusable sidebar component with tooltip positioning</li>
                <li>• Configurable width and centering options</li>
                <li>• Dynamic tooltip indicator that moves with active item</li>
                <li>• Built-in page routing and state management</li>
                <li>• Responsive design with collapsible sidebar</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">💻 Usage Examples</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Basic Usage (900px centered)</h4>
              <pre className="text-sm bg-muted/30 p-4 rounded border overflow-x-auto">
{`<DynamicSidebarSystem 
  width="900px"
  centered={true}
  className="bg-background"
/>`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Full Width Usage</h4>
              <pre className="text-sm bg-muted/30 p-4 rounded border overflow-x-auto">
{`<DynamicSidebarSystem 
  width="100%"
  centered={false}
  className="h-screen"
/>`}
              </pre>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Custom Sidebar Items</h4>
              <pre className="text-sm bg-muted/30 p-4 rounded border overflow-x-auto">
{`const customItems = [
  {
    id: "home",
    label: "Home",
    icon: <HomeIcon />,
    tooltip: "Go to homepage"
  },
  {
    id: "profile",
    label: "Profile", 
    icon: <UserIcon />,
    tooltip: "View profile"
  }
]

<DynamicSidebarSystem 
  sidebarItems={customItems}
  defaultActiveItem="home"
  width="800px"
  centered={true}
/>`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">⚙️ Props Configuration</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-medium">Prop</th>
                  <th className="text-left p-3 font-medium">Type</th>
                  <th className="text-left p-3 font-medium">Default</th>
                  <th className="text-left p-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-border/50">
                  <td className="p-3 font-mono">sidebarItems</td>
                  <td className="p-3">SidebarItem[]</td>
                  <td className="p-3">defaultItems</td>
                  <td className="p-3">Array of sidebar navigation items</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-3 font-mono">defaultActiveItem</td>
                  <td className="p-3">string</td>
                  <td className="p-3">&quot;dashboard&quot;</td>
                  <td className="p-3">Initially active item ID</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-3 font-mono">width</td>
                  <td className="p-3">string</td>
                  <td className="p-3">&quot;900px&quot;</td>
                  <td className="p-3">Container width (CSS value)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-3 font-mono">centered</td>
                  <td className="p-3">boolean</td>
                  <td className="p-3">true</td>
                  <td className="p-3">Whether to center the component</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-3 font-mono">className</td>
                  <td className="p-3">string</td>
                  <td className="p-3">&quot;&quot;</td>
                  <td className="p-3">Additional CSS classes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">🚀 Routes Available</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium mb-2">🏠 Main Route</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <code className="bg-background px-2 py-1 rounded">/</code>
              </p>
              <p className="text-sm text-muted-foreground">
                Full-width implementation of the sidebar system
              </p>
            </div>
            
            <div className="p-4 bg-muted/30 rounded-lg">
              <h4 className="font-medium mb-2">🎯 Practice Route</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <code className="bg-background px-2 py-1 rounded">/practice</code>
              </p>
              <p className="text-sm text-muted-foreground">
                900px centered version for testing and demonstrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
