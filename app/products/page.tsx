"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { 
  ArrowRight, CheckCircle, Code, DollarSign, Factory, Zap,
  Heart, MapPin, Brain, Cloud, Database, Shield, Globe, Lock
} from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: "taskr",
      icon: "🎯",
      name: "Taskr",
      tagline: "AI-Powered Service Marketplace",
      description:
        "Connect skilled professionals with opportunities through our intelligent matching platform. Taskr streamlines service delivery across multiple industries.",
      features: [
        "AI-powered job matching",
        "Secure payment processing",
        "Real-time tracking",
        "Review and rating system",
        "Multi-platform support"
      ],
      color: "from-blue-500 to-cyan-500",
      status: "Active",
      markets: ["Nigeria", "US", "UK"]
    },
    {
      id: "homevy",
      icon: "🏠",
      name: "Homevy",
      tagline: "Modern Rental Platform",
      description:
        "Simplify property management and tenant experiences with our comprehensive rental solution. From listings to lease management, all in one place.",
      features: [
        "Property listing management",
        "Tenant screening",
        "Online rent payments",
        "Maintenance tracking",
        "Document management"
      ],
      color: "from-green-500 to-emerald-500",
      status: "Active",
      markets: ["Nigeria", "US"]
    },
    {
      id: "scos",
      icon: "⚡",
      name: "SCOS",
      tagline: "Smart City Operating System",
      description:
        "Intelligent infrastructure management for smart cities. SCOS provides real-time monitoring, analytics, and automation for urban systems.",
      features: [
        "IoT device management",
        "Real-time analytics",
        "Predictive maintenance",
        "Energy optimization",
        "Traffic management"
      ],
      color: "from-orange-500 to-red-500",
      status: "Development",
      markets: ["Global"]
    },
    {
      id: "profitquest",
      icon: "💰",
      name: "ProfitQuest",
      tagline: "Task-to-Earn Platform",
      description:
        "Monetize your skills and time by completing micro-tasks. ProfitQuest connects users with earning opportunities in a decentralized ecosystem.",
      features: [
        "Micro-task marketplace",
        "Instant payouts",
        "Skill-based matching",
        "Gamified experience",
        "Blockchain rewards"
      ],
      color: "from-purple-500 to-pink-500",
      status: "Beta",
      markets: ["Nigeria", "US", "UK"]
    },
    {
      id: "fintech",
      icon: "💳",
      name: "FinTech Suite",
      tagline: "Financial Technology Platform",
      description:
        "Advanced blockchain-based financial systems with AI-powered risk management and trading algorithms for modern finance.",
      features: [
        "Blockchain integration",
        "AI risk analytics",
        "Automated trading",
        "Regulatory compliance",
        "Multi-currency support"
      ],
      color: "from-emerald-500 to-teal-500",
      status: "Development",
      markets: ["Global"]
    },
    {
      id: "healthcare-ai",
      icon: "🏥",
      name: "Healthcare AI",
      tagline: "Medical Intelligence Platform",
      description:
        "AI-powered medical diagnostics and telemedicine platforms with real-time patient monitoring and intelligent health analytics.",
      features: [
        "AI diagnostics",
        "Patient management",
        "Telemedicine platform",
        "Medical imaging AI",
        "Health records integration"
      ],
      color: "from-pink-500 to-rose-500",
      status: "Research",
      markets: ["Nigeria", "US", "UK"]
    }
  ]

  const techStack = [
    { icon: Brain, name: "AI/ML", desc: "Advanced neural networks" },
    { icon: Cloud, name: "Cloud Native", desc: "Scalable infrastructure" },
    { icon: Database, name: "Big Data", desc: "Distributed systems" },
    { icon: Lock, name: "Blockchain", desc: "Decentralized security" },
    { icon: Shield, name: "Security", desc: "Enterprise-grade protection" },
    { icon: Globe, name: "Global Scale", desc: "Multi-region deployment" }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <FadeIn delay={0}>
              <Badge className="mb-6 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-0">
                Products
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Building Solutions for
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tomorrow's Challenges</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Our product ecosystem spans AI infrastructure, digital platforms, and intelligent systems designed to create real impact.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border bg-white dark:bg-gray-900 hover:shadow-2xl transition-all group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                        {product.icon}
                      </div>
                      <Badge className={`${
                        product.status === 'Active' ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' :
                        product.status === 'Beta' ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400' :
                        product.status === 'Development' ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400' :
                        'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400'
                      } border-0`}>
                        {product.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {product.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {product.markets.join(", ")}
                        </span>
                      </div>
                      <Button variant="ghost" className="group-hover:bg-gray-100 dark:group-hover:bg-gray-800">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our products are powered by the latest advancements in technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border-0 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {tech.desc}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to learn more about our products?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get in touch with our team to discuss how our solutions can help your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-lg px-8 py-6 text-lg font-medium"
              >
                Contact Sales
              </Button>
            </Link>
            <Link href="/solutions">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-lg font-medium"
              >
                View Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
