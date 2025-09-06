import { PageContainer } from "@/components/ui/page-container"

export const DashboardPage = () => {
  return (
    <PageContainer
      title="Dashboard"
      description="Overview of your application metrics and data"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-primary">1,234</p>
          <p className="text-sm text-muted-foreground">+12% from last month</p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-primary">$12,345</p>
          <p className="text-sm text-muted-foreground">+8% from last month</p>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          <p className="text-3xl font-bold text-primary">456</p>
          <p className="text-sm text-muted-foreground">+15% from last month</p>
        </div>
      </div>
      
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>New user registration</span>
            <span className="text-sm text-muted-foreground">2 minutes ago</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Order completed</span>
            <span className="text-sm text-muted-foreground">5 minutes ago</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Payment received</span>
            <span className="text-sm text-muted-foreground">10 minutes ago</span>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
