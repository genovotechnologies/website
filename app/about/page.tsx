"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { 
  Target, Lightbulb, Users, Globe, Rocket, Brain, Shield, Zap
} from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "We push boundaries and embrace new technologies to solve real-world problems."
    },
    {
      icon: Users,
      title: "Impact Driven",
      description: "Building products that create meaningful change in people's lives and businesses."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Committed to protecting user data with enterprise-grade security measures."
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "Thinking globally while acting locally across Nigeria, US, and UK markets."
    }
  ]

  const team = [
    {
      name: "Tolu Afolabi",
      role: "Founder & CEO",
      bio: "Visionary leader driving innovation in deep tech and AI infrastructure."
    },
    {
      name: "Engineering Team",
      role: "Product Development",
      bio: "Talented engineers building scalable solutions across our product ecosystem."
    },
    {
      name: "Design Team",
      role: "User Experience",
      bio: "Creating intuitive and beautiful experiences that users love."
    },
    {
      name: "Growth Team",
      role: "Market Expansion",
      bio: "Scaling our products across multiple markets and industries."
    }
  ]

  const milestones = [
    { year: "2025", event: "Founded", description: "Genovo Technologies established with vision to build deep tech solutions" },
    { year: "2025", event: "First Products", description: "Launched Taskr and Homevy in Nigerian market" },
    { year: "2025", event: "Market Expansion", description: "Expanding operations to US and UK markets" },
    { year: "2026", event: "AI Infrastructure", description: "Launching advanced AI and IoT platforms" }
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
                About Us
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Building the Future of
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Digital Innovation</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Genovo Technologies is a deep tech company focused on building scalable, impactful products across AI infrastructure, digital platforms, and intelligent systems.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={100}>
              <Card className="border-0 bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-8">
                <CardContent className="p-0">
                  <Target className="w-12 h-12 mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-lg text-blue-50">
                    To create monetizable, scalable, and decentralized digital infrastructure that empowers individuals and organizations to thrive in the digital age.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="border-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8">
                <CardContent className="p-0">
                  <Lightbulb className="w-12 h-12 mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-lg text-purple-50">
                    To be the leading deep tech company building the next generation of intelligent, decentralized platforms that transform industries globally.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Passionate professionals building the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border bg-white dark:bg-gray-900">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-white font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 text-center mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Key milestones in our growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {milestone.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {milestone.description}
                        </p>
                      </div>
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
            Join us on our journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            We're always looking for talented individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg px-8 py-6 text-lg font-medium"
              >
                View Open Positions
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-8 py-6 text-lg font-medium"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
