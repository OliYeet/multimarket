import Image from "next/image"
import { ArrowUpDown, Edit, MoreHorizontal, Plus, Search, Store, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/glass-card"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <main className="flex-1 p-6 md:p-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Products</h1>
              <p className="text-muted-foreground">Manage and sync your products across all marketplaces.</p>
            </div>
            <Button className="bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
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
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/80 backdrop-blur-md border-white/30">
                <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
                <DropdownMenuItem>Name (Z-A)</DropdownMenuItem>
                <DropdownMenuItem>Price (Low to High)</DropdownMenuItem>
                <DropdownMenuItem>Price (High to Low)</DropdownMenuItem>
                <DropdownMenuItem>Stock (Low to High)</DropdownMenuItem>
                <DropdownMenuItem>Stock (High to Low)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Grid layout for products */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Product 1 */}
            <GlassCard className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Wireless Headphones"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 bg-white/60 backdrop-blur-sm border border-white/30"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white/80 backdrop-blur-md border-white/30">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Store className="mr-2 h-4 w-4" />
                        Manage Platforms
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">Wireless Headphones</h3>
                  <p className="font-medium text-primary">$89.99</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">SKU: WH-1001</p>
                  <p className="text-sm">Stock: 24</p>
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/30 p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex -space-x-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100/70 border border-white/30 text-xs font-medium text-emerald-500">
                      S
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100/70 border border-white/30 text-xs font-medium text-orange-500">
                      A
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100/70 border border-white/30 text-xs font-medium text-blue-500">
                      E
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                  >
                    Edit
                  </Button>
                </div>
              </CardFooter>
            </GlassCard>

            {/* Product 2 */}
            <GlassCard className="overflow-hidden">
              <div className="relative aspect-square">
                <Image src="/placeholder.svg?height=300&width=300" alt="Smart Watch" fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 bg-white/60 backdrop-blur-sm border border-white/30"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white/80 backdrop-blur-md border-white/30">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Store className="mr-2 h-4 w-4" />
                        Manage Platforms
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">Smart Watch</h3>
                  <p className="font-medium text-primary">$129.99</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">SKU: SW-2045</p>
                  <p className="text-sm">Stock: 18</p>
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/30 p-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex -space-x-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100/70 border border-white/30 text-xs font-medium text-emerald-500">
                      S
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100/70 border border-white/30 text-xs font-medium text-orange-500">
                      A
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/60"
                  >
                    Edit
                  </Button>
                </div>
              </CardFooter>
            </GlassCard>

            {/* Additional products would follow the same pattern */}
          </div>
        </div>
      </main>
    </div>
  )
}
