"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5d5ed] via-[#faf8f5] to-[#faf8f5]">
      <Header />

      {/* Hero Section - Slide 1 */}
      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-20 w-64 h-64 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <rect x="10" y="10" width="40" height="40" fill="#e5e7eb" rx="4" />
              <rect x="60" y="10" width="40" height="40" fill="#e5e7eb" rx="4" />
              <rect x="110" y="10" width="40" height="40" fill="#e5e7eb" rx="4" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Genovo is digital
            <br />
            innovation,
            <br />
            enhanced.
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/products">
              <Button className="bg-[#e81899] hover:bg-[#d1178a] text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                Start building
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="border-2 border-gray-300 hover:border-[#e81899] text-gray-900 rounded-full px-8 py-6 text-lg font-medium bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300">
                Learn about Genovo
              </Button>
            </Link>
          </div>

          {/* 3D Icon */}
          <div className="relative w-96 h-96 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center animate-float">
              <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#e81899", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#a855f7", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                {/* Main hexagonal shape */}
                <path
                  d="M 150 40 L 230 90 L 230 190 L 150 240 L 70 190 L 70 90 Z"
                  fill="url(#grad1)"
                  opacity="0.8"
                />
                <path
                  d="M 150 40 L 230 90 L 230 190 L 150 240 L 70 190 L 70 90 Z"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="4"
                />
                
                {/* Inner triangular connections */}
                <line x1="150" y1="40" x2="150" y2="240" stroke="#d946ef" strokeWidth="3" />
                <line x1="70" y1="90" x2="230" y2="190" stroke="#c026d3" strokeWidth="3" />
                <line x1="70" y1="190" x2="230" y2="90" stroke="#a855f7" strokeWidth="3" />
                
                {/* Center triangles */}
                <path
                  d="M 120 100 L 150 140 L 180 100 Z"
                  fill="#e81899"
                  opacity="0.6"
                />
                <path
                  d="M 120 180 L 150 140 L 180 180 Z"
                  fill="#8b5cf6"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Based on Technology */}
      <section className="py-32 px-6 bg-[#faf8f5] relative overflow-hidden">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-30">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#e81899", stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <path
              d="M 100 30 L 170 70 L 170 130 L 100 170 L 30 130 L 30 70 Z"
              fill="url(#grad2)"
              stroke="#e81899"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="text-sm font-semibold text-[#e81899] mb-4 uppercase tracking-wider">SCALABLE DIGITAL SOLUTIONS</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Genovo
            <br />
            is based
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            on cutting-edge AI, blockchain, and platform technologies designed to scale from thousands to millions of users globally.
          </p>
        </div>
      </section>

      {/* Section 3 - Products Showcase */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#faf8f5] to-[#f5d5ed] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-40 left-10 w-96 h-96 opacity-20" viewBox="0 0 400 400">
            <path
              d="M 50 200 Q 100 100 200 150 Q 300 200 350 100"
              stroke="#e81899"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <svg className="absolute bottom-40 right-10 w-96 h-96 opacity-20" viewBox="0 0 400 400">
            <path
              d="M 50 300 Q 100 200 200 250 Q 300 300 350 200"
              stroke="#8b5cf6"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="text-8xl font-bold text-[#e81899]">6</span>
                <span className="text-2xl font-bold text-gray-900">Active Products</span>
              </div>
              <Link href="/products">
                <Button className="bg-[#e81899] hover:bg-[#d1178a] text-white rounded-full px-6 py-3 font-medium shadow-lg flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Taskr</h3>
                <p className="text-gray-600">AI-powered service marketplace connecting providers with customers globally.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">SCOS</h3>
                <p className="text-gray-600">Smart City Operating System for next-generation urban infrastructure.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">ProfitQuest</h3>
                <p className="text-gray-600">Task-to-earn platform enabling users to monetize micro-tasks.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Homevy</h3>
                <p className="text-gray-600">Intelligent rental property management platform.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">FinTech Suite</h3>
                <p className="text-gray-600">Decentralized financial infrastructure for modern banking.</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare AI</h3>
                <p className="text-gray-600">Privacy-first AI diagnostics and health monitoring.</p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="mb-8 flex items-center gap-4">
                <span className="text-8xl font-bold text-[#8b5cf6]">1</span>
                <span className="text-2xl font-bold text-gray-900">Unified Platform</span>
              </div>
              <Link href="/solutions">
                <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-full px-6 py-3 font-medium shadow-lg flex items-center gap-2">
                  View Solutions
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#faf8f5]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Ready to build the future?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join us in creating technology that makes a difference. Explore our products or get in touch to learn more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products">
              <Button className="bg-[#e81899] hover:bg-[#d1178a] text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-gray-300 hover:border-[#e81899] text-gray-900 rounded-full px-8 py-6 text-lg font-medium bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
