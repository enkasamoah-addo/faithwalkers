import type React from "react"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
  title: "Hashem Youth Conference | Salvation Is Here",
  description:
    "Join the movement at the Hashem Youth Conference. Faith, purpose, and transformation for the next generation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
