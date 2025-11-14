"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X, Github, Twitter, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-gray-200/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="group flex items-center space-x-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#e81899]">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span className="text-lg font-semibold text-gray-900">genovo</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm text-gray-600 hover:text-gray-900 transition-colors relative group",
                pathname === item.href && "text-gray-900 font-medium"
              )}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e81899] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-t border-gray-200/50">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2",
                  pathname === item.href && "text-gray-900 font-medium"
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
