import { ArrowUpDown, Clock, Eye, Package, Search, Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { GlassCard } from "@/components/ui/glass-card"

export default function OrdersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <main className="flex-1 p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
            <p className="text-muted-foreground">Manage orders from all your connected marketplaces.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search orders..."
                className="w-full bg-white/50 backdrop-blur-sm border-white/30 pl-8"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="shrink-0 bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                >
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/80 backdrop-blur-md border-white/30">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>All Orders</DropdownMenuItem>
                <DropdownMenuItem>Pending</DropdownMenuItem>
                <DropdownMenuItem>Processing</DropdownMenuItem>
                <DropdownMenuItem>Shipped</DropdownMenuItem>
                <DropdownMenuItem>Delivered</DropdownMenuItem>
                <DropdownMenuItem>Cancelled</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <GlassCard className="p-0 overflow-hidden">
            <Table>
              <TableHeader className="bg-white/30 backdrop-blur-sm">
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#ORD-1234</TableCell>
                  <TableCell>John Smith</TableCell>
                  <TableCell>Apr 18, 2025</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-amber-100/70 text-amber-500 hover:bg-amber-100/70 hover:text-amber-500 border-white/30"
                    >
                      <Clock className="mr-1 h-3 w-3" />
                      Pending
                    </Badge>
                  </TableCell>
                  <TableCell>$129.99</TableCell>
                  <TableCell>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100/70 border border-white/30 text-xs font-medium text-emerald-500">
                      S
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="hover:bg-white/50 hover:backdrop-blur-sm">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#ORD-5678</TableCell>
                  <TableCell>Emily Johnson</TableCell>
                  <TableCell>Apr 17, 2025</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/70 text-blue-500 hover:bg-blue-100/70 hover:text-blue-500 border-white/30"
                    >
                      <Package className="mr-1 h-3 w-3" />
                      Shipped
                    </Badge>
                  </TableCell>
                  <TableCell>$89.99</TableCell>
                  <TableCell>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100/70 border border-white/30 text-xs font-medium text-orange-500">
                      A
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="hover:bg-white/50 hover:backdrop-blur-sm">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#ORD-9012</TableCell>
                  <TableCell>Michael Brown</TableCell>
                  <TableCell>Apr 16, 2025</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-green-100/70 text-emerald-500 hover:bg-green-100/70 hover:text-emerald-500 border-white/30"
                    >
                      <Check className="mr-1 h-3 w-3" />
                      Delivered
                    </Badge>
                  </TableCell>
                  <TableCell>$59.99</TableCell>
                  <TableCell>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100/70 border border-white/30 text-xs font-medium text-blue-500">
                      E
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="hover:bg-white/50 hover:backdrop-blur-sm">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </GlassCard>
        </div>
      </main>
    </div>
  )
}
