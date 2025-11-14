"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { 
  Briefcase, Code, Palette, TrendingUp, Heart, GraduationCap,
  Building, Users, CheckCircle, ArrowRight
} from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Briefcase,
      title: "Service Marketplace Solutions",
      description: "Leverage Taskr to connect professionals with opportunities across multiple sectors.",
      features: [
        "AI-powered matching algorithm",
        "Secure payment processing",
        "Real-time tracking and updates",
        "Review and rating system",
        "Multi-platform accessibility"
      ],
      color: "from-blue-500 to-cyan-500",
      image: "🎯"
    },
    {
      icon: Building,
      title: "Property Management",
      description: "Modern rental platform solutions powered by Homevy for landlords and tenants.",
      features: [
        "Property listing management",
        "Tenant screening and verification",
        "Online rent collection",
        "Maintenance request tracking",
        "Lease and document management"
      ],
      color: "from-green-500 to-emerald-500",
      image: "🏠"
    },
    {
      icon: Code,
      title: "Smart Infrastructure",
      description: "IoT and AI-powered infrastructure management with SCOS platform.",
      features: [
        "Real-time monitoring and analytics",
        "Predictive maintenance",
        "Energy optimization",
        "Traffic and resource management",
        "Integration with existing systems"
      ],
      color: "from-orange-500 to-red-500",
      image: "⚡"
    },
    {
      icon: TrendingUp,
      title: "Earning Platforms",
      description: "Enable users to monetize skills with ProfitQuest task-to-earn ecosystem.",
      features: [
        "Micro-task marketplace",
        "Skill-based opportunity matching",
        "Instant payment processing",
        "Gamified user experience",
        "Blockchain-powered rewards"
      ],
      color: "from-purple-500 to-pink-500",
      image: "💰"
    },
    {
      icon: Heart,
      title: "FinTech Solutions",
      description: "Advanced financial technology platforms with AI-powered analytics.",
      features: [
        "Blockchain integration",
        "Risk management AI",
        "Automated trading systems",
        "Compliance and security",
        "Multi-currency support"
      ],
      color: "from-pink-500 to-rose-500",
      image: "💳"
    },
    {
      icon: GraduationCap,
      title: "Healthcare Technology",
      description: "AI-powered healthcare solutions for diagnostics and patient management.",
      features: [
        "AI diagnostic tools",
        "Telemedicine platform",
        "Patient data management",
        "Medical imaging analysis",
        "Health records integration"
      ],
      color: "from-indigo-500 to-purple-500",
      image: "🏥"
    }
  ]

  const benefits = [
    {
      title: "Products Deployed",
      description: "Active products serving multiple markets",
      stat: "7+"
    },
    {
      title: "Markets",
      description: "Operating across Nigeria, US, and UK",
      stat: "3"
    },
    {
      title: "Deep Tech Focus",
      description: "AI and blockchain-powered solutions",
      stat: "100%"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <FadeIn delay={0}>
              <Badge className="mb-6 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 border-0">
                Solutions
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Solutions for Every
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industry</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Tailored technology solutions leveraging our product ecosystem to solve specific industry challenges.
              </p>
            </FadeIn>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={200 + index * 100}>
                <Card className="border-0 bg-white dark:bg-gray-900 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border bg-white dark:bg-gray-900 hover:shadow-2xl transition-all group">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform`}>
                      {solution.image}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {solution.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Trusted by teams across industries
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From startups to Fortune 500 companies, teams around the world trust ChronoTask.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Building, name: "Enterprise", count: "500+" },
              { icon: Users, name: "Startups", count: "10K+" },
              { icon: GraduationCap, name: "Education", count: "5K+" },
              { icon: Heart, name: "Non-Profit", count: "2K+" }
            ].map((industry, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border-0 bg-white dark:bg-gray-800 text-center">
                  <CardContent className="p-8">
                    <industry.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {industry.count}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {industry.name}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Find the perfect solution for your team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Talk to our team to discover which solution best fits your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-6 text-lg font-medium"
            >
              Schedule a demo
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-8 py-6 text-lg font-medium"
              >
                Contact sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
