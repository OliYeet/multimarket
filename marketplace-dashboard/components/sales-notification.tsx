"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, X } from "lucide-react"

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

export function SalesNotifications() {
  const [notifications, setNotifications] = useState<Sale[]>([])

  // Simulate incoming sales notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const newSale = generateMockSale()

      setNotifications((prev) => [newSale, ...prev])

      // Auto-dismiss after 5 seconds
      setTimeout(() => {
        setNotifications((prev) => prev.filter((sale) => sale.id !== newSale.id))
      }, 5000)
    }, 8000) // New notification every 8 seconds

    return () => clearInterval(interval)
  }, [])

  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter((sale) => sale.id !== id))
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 w-80">
      <AnimatePresence>
        {notifications.map((sale) => (
          <motion.div
            key={sale.id}
            className="backdrop-blur-md bg-white/40 rounded-lg shadow-lg border border-white/30 overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className={`h-1 ${platformStyles[sale.platform].bgColor}`} />
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div
                    className={`rounded-full ${platformStyles[sale.platform].bgColor} backdrop-blur-sm p-2 mr-3 border border-white/30`}
                  >
                    <ShoppingCart className={`h-4 w-4 ${platformStyles[sale.platform].textColor}`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">New Sale on {platformStyles[sale.platform].name}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(sale.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dismissNotification(sale.id)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  <span className="font-medium">{sale.customer}</span> purchased{" "}
                  <span className="font-medium">{sale.product}</span>
                </p>
                <p className="text-sm font-bold mt-1">${sale.amount.toFixed(2)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
