"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GenovoLogo } from "@/components/genovo-logo"
import { InteractiveTerminal } from "@/components/interactive-terminal"
import { FloatingParticles } from "@/components/3d/floating-particles"
import { TechGrid } from "@/components/3d/tech-grid"
import { GeometricObject } from "@/components/3d/geometric-object"
import { MatrixRain } from "@/components/3d/matrix-rain"
import Link from "next/link"
import { ArrowRight, Globe, Cpu, Zap, Shield, Database, Code, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <FloatingParticles />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="mb-8 flex flex-col items-center">
              <GenovoLogo size={120} variant="full" className="justify-center mb-4" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Building the
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Elite software solutions spanning secure infrastructure, AI platforms, and next-generation digital
              experiences that scale globally with uncompromising privacy. Operating in Nigeria, US, and UK markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-8 group"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Explore Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full px-8 group"
              >
                See Our Vision
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "7+", label: "PRODUCTS" },
                { value: "3", label: "PLATFORMS" },
                { value: "5+", label: "MARKETS" },
                { value: "2025", label: "FOUNDED" },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Terminal Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <MatrixRain />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400 border-green-600/20 dark:border-green-400/20">
                Interactive Experience
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Experience Our
                <br />
                <span className="text-green-500">Command Interface</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Interact with our systems through a real terminal interface. Type commands to explore our products,
                learn about our technology, and discover what makes Genovo unique.
              </p>
              <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 font-mono">
                <div>
                  Try: <span className="text-green-500">help</span>
                </div>
                <div>
                  Try: <span className="text-green-500">products</span>
                </div>
                <div>
                  Try: <span className="text-green-500">matrix</span>
                </div>
              </div>
            </div>

            <InteractiveTerminal />
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <TechGrid />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Next-Generation Technology</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built on quantum computing, advanced AI, and distributed systems architecture.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-96 relative">
              <GeometricObject />
            </div>

            <div className="grid gap-8">
              {[
                {
                  icon: Cpu,
                  title: "Deep Technology",
                  desc: "Building scalable and impactful products with cutting-edge tech",
                },
                {
                  icon: Shield,
                  title: "Decentralized Systems",
                  desc: "Creating secure, distributed infrastructure for global scale",
                },
                {
                  icon: Database,
                  title: "AI/ML Integration",
                  desc: "Advanced algorithms powering intelligent solutions",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <FloatingParticles />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Enterprise Solutions</h2>
            <p className="text-xl text-gray-300">Transforming industries with intelligent automation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, name: "Taskr", color: "from-blue-500 to-cyan-500", desc: "AI-powered service marketplace" },
              { icon: Database, name: "Homevy", color: "from-emerald-500 to-teal-500", desc: "Smart rental platform" },
              { icon: Zap, name: "SCOS", color: "from-orange-500 to-red-500", desc: "Intelligent OS for infrastructure" },
              { icon: Globe, name: "ProfitQuest", color: "from-purple-500 to-pink-500", desc: "Task-to-earn platform" },
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">{solution.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 group">
                View All Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join industry leaders who trust Genovo Technologies to power their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8"
              >
                Learn More
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
