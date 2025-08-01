import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Animage Digiskill - Digital Education Excellence",
  description:
    "Empowering Digital Futures Through Innovation & Excellence. Leading digital skills institute offering comprehensive training in web development, digital marketing, data science, and more.",
  keywords: "digital skills, web development, digital marketing, data science, online courses, career training",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
