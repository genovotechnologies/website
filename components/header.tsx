"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Solutions", href: "/solutions" },
    { name: "Resources", href: "/resources" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-gray-800/50 shadow-lg">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-black dark:text-white group">
          <div className="group-hover:scale-110 transition-all duration-300 drop-shadow-lg flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold">ChronoTask</span>
          </div>
        </Link>

        <nav className="hidden lg:flex space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all duration-300 relative group text-base font-medium",
                pathname === item.href && "text-black dark:text-white font-semibold",
              )}
            >
              {item.name}
              {pathname === item.href && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-glow"></div>
              )}
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-5">
          <ThemeToggle />
          <Link href="/contact">
            <Button className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
              Sign in
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-medium shadow-md">
              Get demo
            </Button>
          </Link>
        </div>

        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black dark:text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2",
                  pathname === item.href && "text-black dark:text-white font-medium",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
