"use client"

import { useState } from "react"
import { Menu, X, Wallet } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navLinks = [
    { href: "#trending", icon: "🔥", label: "Trending" },
    { href: "#launch", icon: "🚀", label: "Launch" },
    { href: "#features", icon: "✨", label: "Features" },
    { href: "#faq", icon: "❓", label: "FAQ" },
  ]

  return (
    <>
      <header className="py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl">💎</div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              BASEMEME.
            </span>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </Button>

          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            ))}

            <Button className="bg-gradient-to-r from-primary to-blue-400 text-white hover:shadow-md transition-all ml-2">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl">💎</div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Base on Fun
            </span>
          </Link>

          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="container mx-auto px-4 pt-16 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 py-4 text-lg border-b border-gray-100"
              onClick={toggleMobileMenu}
            >
              <span className="text-xl">{link.icon}</span>
              {link.label}
            </Link>
          ))}

          <Button className="bg-gradient-to-r from-primary to-blue-400 text-white hover:shadow-md transition-all mt-4">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </>
  )
}

