import { ArrowRight, Check, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlassCard } from "@/components/ui/glass-card"

export default function IntegrationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <main className="flex-1 p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Integrations</h1>
            <p className="text-muted-foreground">Connect and manage your marketplace integrations.</p>
          </div>
          <Tabs defaultValue="connected">
            <TabsList className="bg-white/50 backdrop-blur-sm border border-white/30">
              <TabsTrigger value="connected" className="data-[state=active]:bg-white/60">
                Connected
              </TabsTrigger>
              <TabsTrigger value="available" className="data-[state=active]:bg-white/60">
                Available
              </TabsTrigger>
            </TabsList>
            <TabsContent value="connected" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <GlassCard>
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>Shopify</CardTitle>
                      <CardDescription>Connected • 12 products synced</CardDescription>
                    </div>
                    <div className="rounded-full bg-green-100/70 border border-white/30 p-1.5">
                      <Check className="h-4 w-4 text-emerald-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <p>Last synced: 2 hours ago</p>
                      <p>Store: mystore.myshopify.com</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                    >
                      Disconnect
                    </Button>
                    <Button size="sm" className="bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60">
                      Manage
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </GlassCard>
                <GlassCard>
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>Amazon</CardTitle>
                      <CardDescription>Connected • 8 products synced</CardDescription>
                    </div>
                    <div className="rounded-full bg-green-100/70 border border-white/30 p-1.5">
                      <Check className="h-4 w-4 text-emerald-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <p>Last synced: 4 hours ago</p>
                      <p>Account: seller@example.com</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                    >
                      Disconnect
                    </Button>
                    <Button size="sm" className="bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60">
                      Manage
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </GlassCard>
                <GlassCard>
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div>
                      <CardTitle>eBay</CardTitle>
                      <CardDescription>Connected • 4 products synced</CardDescription>
                    </div>
                    <div className="rounded-full bg-green-100/70 border border-white/30 p-1.5">
                      <Check className="h-4 w-4 text-emerald-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      <p>Last synced: 6 hours ago</p>
                      <p>Account: seller_account</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                    >
                      Disconnect
                    </Button>
                    <Button size="sm" className="bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60">
                      Manage
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </GlassCard>
              </div>
            </TabsContent>
            <TabsContent value="available" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <GlassCard>
                  <CardHeader>
                    <CardTitle>Etsy</CardTitle>
                    <CardDescription>Connect your Etsy shop</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Sync your handmade and vintage products with Etsy's marketplace.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60">
                      <Plus className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  </CardFooter>
                </GlassCard>
                <GlassCard>
                  <CardHeader>
                    <CardTitle>Walmart</CardTitle>
                    <CardDescription>Connect your Walmart seller account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Expand your reach by selling on Walmart's marketplace.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60">
                      <Plus className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  </CardFooter>
                </GlassCard>
                <GlassCard>
                  <CardHeader>
                    <CardTitle>WooCommerce</CardTitle>
                    <CardDescription>Connect your WooCommerce store</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Sync products with your WordPress WooCommerce store.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60">
                      <Plus className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  </CardFooter>
                </GlassCard>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
