import { PageContainer } from "@/components/ui/page-container"

export const AnalyticsPage = () => {
  return (
    <PageContainer
      title="Analytics"
      description="View detailed analytics and insights for your application"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Page Views</h3>
            <p className="text-2xl font-bold text-foreground mt-2">12,345</p>
            <p className="text-xs text-green-600 mt-1">+5.2% from last week</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Unique Visitors</h3>
            <p className="text-2xl font-bold text-foreground mt-2">8,901</p>
            <p className="text-xs text-green-600 mt-1">+3.1% from last week</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Bounce Rate</h3>
            <p className="text-2xl font-bold text-foreground mt-2">23.4%</p>
            <p className="text-xs text-red-600 mt-1">-1.2% from last week</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Avg. Session</h3>
            <p className="text-2xl font-bold text-foreground mt-2">4m 32s</p>
            <p className="text-xs text-green-600 mt-1">+8.7% from last week</p>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Traffic Overview</h3>
          <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Chart visualization would go here</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">/dashboard</span>
                <span className="text-sm font-medium">2,345 views</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">/users</span>
                <span className="text-sm font-medium">1,892 views</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">/settings</span>
                <span className="text-sm font-medium">1,234 views</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">/analytics</span>
                <span className="text-sm font-medium">987 views</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Direct</span>
                <span className="text-sm font-medium">45.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Search Engines</span>
                <span className="text-sm font-medium">32.1%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Social Media</span>
                <span className="text-sm font-medium">15.7%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Referrals</span>
                <span className="text-sm font-medium">7.0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
