"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Brain, Code, Database, Zap, Shield, Rocket } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <FadeIn delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Building the Future of
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Innovation</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                We create scalable, impactful products across AI infrastructure, fintech, and digital platforms.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg px-8 py-6 text-lg font-medium shadow-lg"
                  >
                    Explore Products
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-8 py-6 text-lg font-medium"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* Hero Visual Elements */}
            <div className="mt-16 relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Tech Card */}
                <FadeIn delay={600}>
                  <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 border-0 shadow-lg text-white rotate-[-2deg] hover:rotate-0 transition-transform">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-4">🚀</div>
                      <h3 className="font-bold text-lg mb-2">AI Infrastructure</h3>
                      <p className="text-sm text-blue-50">
                        Building intelligent systems that scale globally
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                {/* Logo Display */}
                <FadeIn delay={700}>
                  <div className="flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 w-32 h-32 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold text-3xl">G</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Innovation Card */}
                <FadeIn delay={800}>
                  <Card className="bg-gradient-to-br from-purple-500 to-pink-500 border-0 shadow-lg text-white rotate-[2deg] hover:rotate-0 transition-transform">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-4">💡</div>
                      <h3 className="font-bold text-lg mb-2">Deep Tech</h3>
                      <p className="text-sm text-purple-50">
                        Pioneering solutions for tomorrow's challenges
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              {/* Products Showcase */}
              <FadeIn delay={900}>
                <Card className="mt-8 max-w-2xl mx-auto bg-white dark:bg-gray-800 border shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Our Product Ecosystem</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Taskr", icon: "🎯", color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600" },
                        { name: "Homevy", icon: "🏠", color: "bg-green-100 dark:bg-green-900/20 text-green-600" },
                        { name: "SCOS", icon: "⚡", color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600" },
                        { name: "ProfitQuest", icon: "💰", color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600" }
                      ].map((product, idx) => (
                        <div key={idx} className={`${product.color} rounded-lg p-4 text-center`}>
                          <div className="text-2xl mb-1">{product.icon}</div>
                          <div className="text-sm font-medium">{product.name}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Tech Stack Badge */}
              <FadeIn delay={1000}>
                <Card className="mt-8 max-w-xs mx-auto md:absolute md:bottom-0 md:right-0 bg-white dark:bg-gray-800 border shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Our Tech Stack</h3>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-0">AI/ML</Badge>
                      <Badge className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-0">Cloud</Badge>
                      <Badge className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-0">Blockchain</Badge>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0">
              What We Do
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Building Tomorrow's
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Today</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={100}>
              <Card className="border bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    AI & Machine Learning
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Advanced AI infrastructure and intelligent systems powering the next generation of applications.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="border bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    Digital Platforms
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Scalable platforms connecting users, services, and opportunities across multiple markets.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="border bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                    Secure Infrastructure
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Enterprise-grade security and decentralized architecture ensuring data privacy and reliability.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Product Stats Dashboard */}
          <div className="relative max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-5xl font-bold text-blue-600 mb-2">7+</div>
                    <div className="text-gray-600 dark:text-gray-400">Active Products</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-purple-600 mb-2">3</div>
                    <div className="text-gray-600 dark:text-gray-400">Markets</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-green-600 mb-2">2025</div>
                    <div className="text-gray-600 dark:text-gray-400">Founded</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0">
              Products
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Product Ecosystem
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Innovative solutions across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={100}>
              <Card className="border bg-white dark:bg-gray-800 hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Taskr</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    AI-powered service marketplace connecting professionals with opportunities.
                  </p>
                  <Link href="/products" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="border bg-white dark:bg-gray-800 hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Homevy</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Modern rental platform simplifying property management and tenant experiences.
                  </p>
                  <Link href="/products" className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="border bg-white dark:bg-gray-800 hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">SCOS</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Intelligent operating system for smart infrastructure and IoT management.
                  </p>
                  <Link href="/products" className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={400}>
              <Card className="border bg-white dark:bg-gray-800 hover:shadow-xl transition-all group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ProfitQuest</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Task-to-earn platform enabling users to monetize their skills and time.
                  </p>
                  <Link href="/products" className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to build the future?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Join us in creating innovative solutions that make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg px-8 py-6 text-lg font-medium"
              >
                Explore Products
              </Button>
            </Link>
            <Link href="/careers">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-8 py-6 text-lg font-medium"
              >
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
