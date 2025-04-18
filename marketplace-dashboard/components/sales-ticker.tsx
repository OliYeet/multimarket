"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ShoppingCart } from "lucide-react"

// Types for our sales data
type Platform = "shopify" | "amazon" | "ebay"

interface Sale {
  id: string
  platform: Platform
  amount: number
  product: string
  customer: string
  timestamp: Date
}

// Platform-specific styling
const platformStyles: Record<Platform, { bgColor: string; textColor: string; name: string }> = {
  shopify: {
    bgColor: "bg-green-100/70",
    textColor: "text-emerald-500",
    name: "Shopify",
  },
  amazon: {
    bgColor: "bg-orange-100/70",
    textColor: "text-orange-500",
    name: "Amazon",
  },
  ebay: {
    bgColor: "bg-blue-100/70",
    textColor: "text-blue-500",
    name: "eBay",
  },
}

// Mock data generator for demonstration
function generateMockSale(): Sale {
  const platforms: Platform[] = ["shopify", "amazon", "ebay"]
  const products = [
    "Wireless Headphones",
    "Smart Watch",
    "Bluetooth Speaker",
    "Wireless Earbuds",
    "Smart Home Hub",
    "Fitness Tracker",
  ]
  const names = ["John Smith", "Emma Johnson", "Michael Brown", "Sophia Williams", "James Davis", "Olivia Miller"]

  return {
    id: Math.random().toString(36).substring(2, 9),
    platform: platforms[Math.floor(Math.random() * platforms.length)],
    amount: Number.parseFloat((Math.random() * 200 + 20).toFixed(2)),
    product: products[Math.floor(Math.random() * products.length)],
    customer: names[Math.floor(Math.random() * names.length)],
    timestamp: new Date(),
  }
}

export function SalesTicker() {
  const [sales, setSales] = useState<Sale[]>([])
  const [totalSales, setTotalSales] = useState({
    count: 0,
    amount: 0,
  })

  // Simulate incoming sales
  useEffect(() => {
    // Generate initial sales
    const initialSales = Array(3)
      .fill(null)
      .map(() => generateMockSale())

    setSales(initialSales)
    setTotalSales({
      count: initialSales.length,
      amount: initialSales.reduce((sum, sale) => sum + sale.amount, 0),
    })

    // Set up interval for new sales
    const interval = setInterval(() => {
      const newSale = generateMockSale()

      setSales((prevSales) => {
        // Keep only the most recent 10 sales
        const updatedSales = [newSale, ...prevSales].slice(0, 10)
        return updatedSales
      })

      setTotalSales((prev) => ({
        count: prev.count + 1,
        amount: prev.amount + newSale.amount,
      }))
    }, 5000) // New sale every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full backdrop-blur-md bg-white/30 border-b border-white/30 shadow-sm sticky top-16 z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <ShoppingCart className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">Live Sales</span>
            </div>
            <div className="hidden md:flex items-center text-sm">
              <span className="text-muted-foreground mr-2">Today:</span>
              <span className="font-medium">{totalSales.count} orders</span>
              <span className="mx-1 text-muted-foreground">•</span>
              <span className="font-medium">${totalSales.amount.toFixed(2)}</span>
            </div>
          </div>

          <div className="relative h-8 overflow-hidden flex-1 max-w-2xl mx-4">
            <AnimatePresence>
              {sales.slice(0, 1).map((sale) => (
                <motion.div
                  key={sale.id}
                  className="absolute inset-0 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center w-full">
                    <div
                      className={`flex items-center justify-center rounded-full ${platformStyles[sale.platform].bgColor} backdrop-blur-sm p-1 mr-2 border border-white/30`}
                    >
                      <span className={`text-xs font-medium ${platformStyles[sale.platform].textColor}`}>
                        {platformStyles[sale.platform].name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 truncate">
                      <span className="text-sm">
                        New order: <span className="font-medium">{sale.product}</span> for{" "}
                        <span className="font-medium">${sale.amount.toFixed(2)}</span>
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground ml-2 hidden sm:block">
                      {new Date(sale.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex items-center">
            <div className="bg-green-100/70 backdrop-blur-sm text-emerald-500 text-xs rounded-full px-2 py-1 flex items-center border border-white/30">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
