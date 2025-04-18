import type React from "react"
import { Header } from "@/components/header"
import { SalesNotifications } from "@/components/sales-notification"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <SalesNotifications />
    </>
  )
}
