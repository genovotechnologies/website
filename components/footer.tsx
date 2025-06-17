import Link from "next/link"
import { GenovoLogo } from "./genovo-logo"

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-8">
              <GenovoLogo size={48} variant="full" />
            </div>
            <p className="text-gray-400 text-sm">Building the future with intelligent software systems.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="hover:text-white transition-colors">AI Infrastructure</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">FinTech Platform</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Manufacturing 4.0</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Healthcare AI</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <span className="hover:text-white transition-colors">LinkedIn</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Twitter</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">GitHub</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">hello@genovotech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">© 2025 Genovo Technologies, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
