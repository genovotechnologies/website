import Link from "next/link"
import { Github, Twitter, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#faf8f5] border-t border-gray-200">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#e81899]">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span className="text-lg font-semibold text-gray-900">genovo</span>
            </Link>
            <p className="text-gray-600 text-sm mb-6">
              Building the future of digital innovation through AI, blockchain, and intelligent platforms.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#e81899] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#e81899] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#e81899] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">Products</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/products" className="hover:text-[#e81899] transition-colors">
                  Taskr
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#e81899] transition-colors">
                  Homevy
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#e81899] transition-colors">
                  SCOS
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#e81899] transition-colors">
                  ProfitQuest
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-[#e81899] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#e81899] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#e81899] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#e81899] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">Connect</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/contact" className="hover:text-[#e81899] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#e81899] transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <a href="mailto:info@genovotech.com" className="hover:text-[#e81899] transition-colors">
                  info@genovotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Genovo Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
            <Link href="#" className="hover:text-[#e81899] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#e81899] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
