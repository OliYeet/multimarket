import { ArrowRight, ArrowUpRight, BarChart3, Package, ShoppingCart, Store } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SalesTicker } from "@/components/sales-ticker"
import { SalesNotifications } from "@/components/sales-notification"
import { GlassCard } from "@/components/ui/glass-card"

// Sample data for charts
const salesData = [
  { name: "Jan", shopify: 4000, amazon: 2400, ebay: 1200 },
  { name: "Feb", shopify: 3000, amazon: 2210, ebay: 1290 },
  { name: "Mar", shopify: 2000, amazon: 2290, ebay: 2300 },
  { name: "Apr", shopify: 2780, amazon: 3908, ebay: 2500 },
  { name: "May", shopify: 1890, amazon: 4800, ebay: 2181 },
  { name: "Jun", shopify: 2390, amazon: 3800, ebay: 2500 },
  { name: "Jul", shopify: 3490, amazon: 4300, ebay: 2100 },
]

const platformData = [
  { name: "Shopify", value: 17550, color: "#a7f3d0" }, // pastel green
  { name: "Amazon", value: 23708, color: "#fed7aa" }, // pastel orange
  { name: "eBay", value: 14071, color: "#bfdbfe" }, // pastel blue
]

const categoryData = [
  { name: "Electronics", shopify: 4000, amazon: 2400, ebay: 2400 },
  { name: "Clothing", shopify: 3000, amazon: 1398, ebay: 2210 },
  { name: "Home", shopify: 2000, amazon: 9800, ebay: 2290 },
  { name: "Beauty", shopify: 2780, amazon: 3908, ebay: 2000 },
  { name: "Sports", shopify: 1890, amazon: 4800, ebay: 2181 },
]

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <SalesTicker />

      <main className="flex-1 p-6 md:p-8">
        <div className="grid gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your products and marketplace integrations.</p>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <GlassCard>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <div className="mt-1 flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                  <span className="text-emerald-500">+12%</span> from last month
                </div>
              </CardContent>
            </GlassCard>
            <GlassCard>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Integrations</CardTitle>
                <Store className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <div className="mt-1 flex items-center text-xs text-muted-foreground">
                  <span>Shopify, Amazon, eBay</span>
                </div>
              </CardContent>
            </GlassCard>
            <GlassCard>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <div className="mt-1 flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                  <span className="text-emerald-500">+3</span> from yesterday
                </div>
              </CardContent>
            </GlassCard>
            <GlassCard>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$55,329</div>
                <div className="mt-1 flex items-center text-xs text-muted-foreground">
                  <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-500" />
                  <span className="text-emerald-500">+18.2%</span> from last month
                </div>
              </CardContent>
            </GlassCard>
          </div>

          {/* Sales Overview Chart */}
          <div className="grid gap-6 md:grid-cols-6">
            <GlassCard className="md:col-span-4">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Monthly sales across all platforms</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={salesData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.3)" />
                      <XAxis dataKey="name" stroke="rgba(0,0,0,0.6)" />
                      <YAxis stroke="rgba(0,0,0,0.6)" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(255,255,255,0.8)",
                          borderRadius: "8px",
                          border: "1px solid rgba(255,255,255,0.5)",
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="shopify"
                        stackId="1"
                        stroke="#a7f3d0"
                        fill="#a7f3d0"
                        fillOpacity={0.8}
                      />
                      <Area
                        type="monotone"
                        dataKey="amazon"
                        stackId="1"
                        stroke="#fed7aa"
                        fill="#fed7aa"
                        fillOpacity={0.8}
                      />
                      <Area
                        type="monotone"
                        dataKey="ebay"
                        stackId="1"
                        stroke="#bfdbfe"
                        fill="#bfdbfe"
                        fillOpacity={0.8}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </GlassCard>

            {/* Platform Distribution */}
            <GlassCard className="md:col-span-2">
              <CardHeader>
                <CardTitle>Platform Distribution</CardTitle>
                <CardDescription>Sales by marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={platformData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {platformData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(255,255,255,0.8)",
                          borderRadius: "8px",
                          border: "1px solid rgba(255,255,255,0.5)",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </GlassCard>
          </div>

          {/* Performance by Category */}
          <GlassCard>
            <CardHeader>
              <CardTitle>Performance by Category</CardTitle>
              <CardDescription>Sales comparison across product categories</CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={categoryData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.3)" />
                    <XAxis dataKey="name" stroke="rgba(0,0,0,0.6)" />
                    <YAxis stroke="rgba(0,0,0,0.6)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255,255,255,0.8)",
                        borderRadius: "8px",
                        border: "1px solid rgba(255,255,255,0.5)",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="shopify" name="Shopify" fill="#a7f3d0" fillOpacity={0.8} />
                    <Bar dataKey="amazon" name="Amazon" fill="#fed7aa" fillOpacity={0.8} />
                    <Bar dataKey="ebay" name="eBay" fill="#bfdbfe" fillOpacity={0.8} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </GlassCard>

          {/* Marketplace Integrations */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GlassCard className="md:col-span-2">
              <CardHeader>
                <CardTitle>Marketplace Integrations</CardTitle>
                <CardDescription>Connect your store to popular marketplaces.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-white/30 backdrop-blur-sm bg-white/20 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-green-100/70 border border-white/30 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-emerald-400"
                        >
                          <path d="M7 10v12" />
                          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Shopify</p>
                        <p className="text-sm text-muted-foreground">Connected • 12 products synced</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                    >
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/30 backdrop-blur-sm bg-white/20 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-orange-100/70 border border-white/30 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-orange-400"
                        >
                          <path d="m20 16-4-4 4-4" />
                          <path d="m4 8 4 4-4 4" />
                          <path d="M16 4h4v4" />
                          <path d="M4 4h4v4" />
                          <path d="M4 16h4v4" />
                          <path d="M16 16h4v4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Amazon</p>
                        <p className="text-sm text-muted-foreground">Connected • 8 products synced</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                    >
                      Manage
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/30 backdrop-blur-sm bg-white/20 p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-blue-100/70 border border-white/30 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-blue-400"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">eBay</p>
                        <p className="text-sm text-muted-foreground">Connected • 4 products synced</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                    >
                      Manage
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60">
                  Add New Integration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </GlassCard>

            {/* Recent Activity */}
            <GlassCard>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-green-100/70 border border-white/30 p-2">
                      <ShoppingCart className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-medium">New Order #1234</p>
                      <p className="text-sm text-muted-foreground">Shopify • 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-orange-100/70 border border-white/30 p-2">
                      <Package className="h-4 w-4 text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium">Product Updated</p>
                      <p className="text-sm text-muted-foreground">Amazon • 4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-100/70 border border-white/30 p-2">
                      <ShoppingCart className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">New Order #5678</p>
                      <p className="text-sm text-muted-foreground">eBay • 6 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                >
                  View All Activity
                </Button>
              </CardFooter>
            </GlassCard>
          </div>
        </div>
      </main>

      {/* Sales Notifications */}
      <SalesNotifications />
    </div>
  )
}
