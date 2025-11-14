"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Service Marketplace",
      description: "AI-powered platform connecting service providers with customers through intelligent matching.",
      product: "Taskr",
      gradient: "from-[#e81899] to-[#a855f7]"
    },
    {
      title: "Property Management",
      description: "Smart rental solutions with automated workflows and tenant management.",
      product: "Homevy",
      gradient: "from-[#8b5cf6] to-[#6366f1]"
    },
    {
      title: "Smart Infrastructure",
      description: "Operating system for next-generation smart cities and urban environments.",
      product: "SCOS",
      gradient: "from-[#e81899] to-[#d946ef]"
    },
    {
      title: "Earning Platforms",
      description: "Task-to-earn ecosystem enabling income through micro-tasks and AI opportunities.",
      product: "ProfitQuest",
      gradient: "from-[#8b5cf6] to-[#a855f7]"
    },
    {
      title: "FinTech",
      description: "Decentralized financial infrastructure for modern banking and payments.",
      product: "FinTech Suite",
      gradient: "from-[#e81899] to-[#f472b6]"
    },
    {
      title: "Healthcare Technology",
      description: "Privacy-first AI diagnostics and health monitoring solutions.",
      product: "Healthcare AI",
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
            Solutions for every industry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From service marketplaces to smart cities, we build technology that transforms industries.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className={`w-12 h-1 bg-gradient-to-r ${solution.gradient} rounded-full mb-6`}></div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">Powered by {solution.product}</span>
                  <Button 
                    variant="ghost"
                    className="text-gray-900 hover:bg-gray-100 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#faf8f5]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our solutions can help you achieve your goals.
          </p>
          <Link href="/contact">
            <Button className="bg-[#e81899] hover:bg-[#d1178a] text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
