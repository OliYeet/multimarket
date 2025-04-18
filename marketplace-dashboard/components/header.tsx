import Link from "next/link"
import { Store } from "lucide-react"
import { UserProfile } from "@/components/user-profile"

export function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-lg bg-white/30 border-b border-white/30 shadow-sm">
      <div className="flex h-16 items-center gap-4 px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Store className="h-6 w-6" />
          <span>MultiMarket</span>
        </Link>
        <nav className="hidden flex-1 md:flex">
          <ul className="flex gap-6 px-6">
            <li>
              <Link href="/" className="text-sm font-medium text-primary">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/integrations"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Integrations
              </Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <UserProfile />
        </div>
      </div>
    </header>
  )
}
