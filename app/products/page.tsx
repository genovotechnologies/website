"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Zap, Home, Building2, DollarSign, Wallet, Heart } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      id: "01",
      name: "Taskr",
      tagline: "AI-powered service marketplace",
      description: "Connect service providers with customers through intelligent matching and automated workflows.",
      icon: Zap,
      color: "#e81899",
      status: "Active",
      gradient: "from-[#e81899] to-[#a855f7]"
    },
    {
      id: "02",
      name: "Homevy",
      tagline: "Smart rental property platform",
      description: "Modern property management with AI-powered tenant screening and automated rent collection.",
      icon: Home,
      color: "#8b5cf6",
      status: "Active",
      gradient: "from-[#8b5cf6] to-[#6366f1]"
    },
    {
      id: "03",
      name: "SCOS",
      tagline: "Smart City Operating System",
      description: "Infrastructure management for next-generation urban environments.",
      icon: Building2,
      color: "#e81899",
      status: "Beta",
      gradient: "from-[#e81899] to-[#d946ef]"
    },
    {
      id: "04",
      name: "ProfitQuest",
      tagline: "Task-to-earn ecosystem",
      description: "Monetize your skills through micro-tasks and AI-powered earning opportunities.",
      icon: DollarSign,
      color: "#8b5cf6",
      status: "Beta",
      gradient: "from-[#8b5cf6] to-[#a855f7]"
    },
    {
      id: "05",
      name: "FinTech Suite",
      tagline: "Decentralized financial infrastructure",
      description: "Blockchain-based banking and payment solutions for the modern economy.",
      icon: Wallet,
      color: "#e81899",
      status: "Development",
      gradient: "from-[#e81899] to-[#f472b6]"
    },
    {
      id: "06",
      name: "Healthcare AI",
      tagline: "Privacy-first health diagnostics",
      description: "AI-powered health monitoring and diagnostics with patient privacy at the core.",
      icon: Heart,
      color: "#8b5cf6",
      status: "Research",
      gradient: "from-[#8b5cf6] to-[#c084fc]"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5d5ed] via-[#faf8f5] to-[#faf8f5]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six innovative platforms transforming industries through AI, blockchain, and intelligent automation.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm font-medium px-4 py-1 rounded-full bg-gray-100 text-gray-700">
                    {product.status}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-bold" style={{ color: product.color }}>{product.id}</span>
                    <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">{product.tagline}</p>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                <Button 
                  variant="ghost"
                  className="text-gray-900 hover:bg-gray-100 group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to explore?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch to learn how our products can transform your business.
          </p>
          <Link href="/contact">
            <Button className="bg-[#e81899] hover:bg-[#d1178a] text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
