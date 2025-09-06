import { PageContainer } from "@/components/ui/page-container"

export const TooltipDemoPage = () => {
  return (
    <PageContainer
      title="Tooltip Connection Demo"
      description="Visual demonstration of the sidebar-to-page connection system"
    >
      <div className="space-y-8">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">🎯 How the Connection Works</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-primary">Sidebar Button (Active State)</h4>
              <div className="bg-muted/50 p-4 rounded-lg relative">
                <div className="flex items-center gap-3 bg-secondary p-3 rounded-md">
                  <div className="w-5 h-5 bg-primary rounded-sm"></div>
                  <span>Dashboard</span>
                </div>
                
                {/* Demo of sidebar tooltip effect */}
                <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2">
                  <div className="w-1 h-6 bg-primary/80 rounded-sm"></div>
                  <div className="absolute left-1 top-1/2 transform -translate-y-1/2">
                    <div className="h-3 w-3 rotate-45 bg-primary/60 border border-primary/40"></div>
                  </div>
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-0.5 bg-primary/40"></div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                When a sidebar item is active, it shows a visual indicator that extends beyond the sidebar boundary.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-primary">Page Content (Receiving Connection)</h4>
              <div className="bg-muted/50 p-4 rounded-lg relative">
                <div className="absolute top-2 left-[-12px]">
                  <div className="h-4 w-4 rotate-45 border border-t-0 border-r-0 border-primary/40 bg-primary/10 shadow-sm"></div>
                  <div className="absolute top-1/2 left-[-8px] transform -translate-y-1/2 w-8 h-0.5 bg-primary/20"></div>
                </div>
                
                <div className="border-l-2 border-primary/20 pl-4">
                  <h5 className="font-medium">Page Title</h5>
                  <p className="text-sm text-muted-foreground">Page content goes here...</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                The page content shows a corresponding tooltip tail that visually connects to the sidebar button.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">🔧 Technical Implementation</h3>
          
          <div className="space-y-4">
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Sidebar Button Indicator</h4>
              <pre className="text-sm bg-background p-3 rounded border overflow-x-auto">
{`<div className="absolute top-1/2 left-[-8px]">
  <div className="h-4 w-4 rotate-45 border border-t-0 border-r-0 
       border-primary/40 bg-primary/10 shadow-sm"></div>
</div>`}
              </pre>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Page Content Indicator</h4>
              <pre className="text-sm bg-background p-3 rounded border overflow-x-auto">
{`<div className="absolute right-0 top-1/2 transform -translate-y-1/2">
  <div className="w-1 h-6 bg-primary/80 rounded-sm"></div>
  <div className="absolute left-1 top-1/2 transform -translate-y-1/2">
    <div className="h-3 w-3 rotate-45 bg-primary/60 
         border border-primary/40"></div>
  </div>
</div>`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">✨ Visual Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl mb-2">🔗</div>
              <h4 className="font-medium">Visual Connection</h4>
              <p className="text-sm text-muted-foreground">
                Clear visual link between sidebar and content
              </p>
            </div>
            
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl mb-2">🎨</div>
              <h4 className="font-medium">Consistent Styling</h4>
              <p className="text-sm text-muted-foreground">
                Uses CSS transforms and borders for clean effects
              </p>
            </div>
            
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl mb-2">📱</div>
              <h4 className="font-medium">Responsive Design</h4>
              <p className="text-sm text-muted-foreground">
                Adapts to different screen sizes and sidebar states
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
