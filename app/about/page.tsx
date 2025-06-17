"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FloatingParticles } from "@/components/3d/floating-particles"
import { TechGrid } from "@/components/3d/tech-grid"
import Link from "next/link"
import { ArrowRight, Users, Target, Award, Globe, Rocket, Brain, Shield } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { CounterAnimation } from "@/components/animations/counter-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <SmoothScroll />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingParticles />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <FadeIn>
            <Badge className="mb-6 bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border-blue-600/20 dark:border-blue-400/20">
              About Genovo Technologies
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building the Future of
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Decentralized Digital Empires
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Founded in 2025, we are a deeptech company focused on building scalable and impactful products across Nigeria, US, and UK markets. Our mission is to create monetizable, scalable, and decentralized digital infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <TechGrid />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At Genovo Technologies, our mission is to leverage the transformative power of deep technology to
                  create intelligent, scalable, and sustainable solutions that address the world's most pressing
                  challenges.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We believe that through the strategic application of artificial intelligence, quantum computing, and
                  advanced analytics, we can fundamentally transform how industries operate and how societies function.
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-8 group">
                    Partner With Us
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </SlideIn>

            <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={150}>
              <FadeIn>
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Target className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">Vision</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      To be the leading force in intelligent technology transformation globally.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn>
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">Impact</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Transforming industries across 7 key verticals worldwide.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn>
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Brain className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Cutting-edge AI and quantum computing research.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn>
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-12 h-12 text-red-600 dark:text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">Security</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Military-grade security and privacy protection.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black dark:bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <FloatingParticles />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-300">Delivering measurable results across industries worldwide.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-4 gap-8 text-center" staggerDelay={200}>
            <FadeIn>
              <div className="p-6 group cursor-pointer">
                <div className="text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                  <CounterAnimation end={500} suffix="+" />
                </div>
                <p className="text-gray-300">Enterprise Clients</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="p-6 group cursor-pointer">
                <div className="text-5xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                  <CounterAnimation end={50} suffix="+" />
                </div>
                <p className="text-gray-300">Countries Served</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="p-6 group cursor-pointer">
                <div className="text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                  <CounterAnimation end={99.9} suffix="%" />
                </div>
                <p className="text-gray-300">System Uptime</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="p-6 group cursor-pointer">
                <div className="text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <p className="text-gray-300">Global Support</p>
              </div>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to innovation and collaboration.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={100}>
            {[
              {
                icon: Rocket,
                title: "Autonomy",
                desc: "Building systems that empower independent decision-making and self-governance.",
              },
              {
                icon: Shield,
                title: "Anonymity",
                desc: "Protecting privacy and enabling secure, anonymous interactions in the digital space.",
              },
              {
                icon: Users,
                title: "Ownership",
                desc: "Ensuring users maintain complete control over their data and digital assets.",
              },
              {
                icon: Award,
                title: "Execution",
                desc: "Two founders, zero fluff. Focus on building systems rather than just apps.",
              },
            ].map((value, index) => (
              <FadeIn key={index}>
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <value.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Afolabi Oluwatosin Abioye</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Founder (60% ownership)</p>
                  <p className="text-gray-600 dark:text-gray-300">Leads technical vision and architecture of flagship products</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Adegbite Ifeoluwapo</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Co-founder (40% ownership)</p>
                  <p className="text-gray-600 dark:text-gray-300">Drives product strategy and market expansion initiatives</p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to be part of the future? Explore opportunities to work with us or partner with our team.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 group">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8 group"
                >
                  Explore Our Solutions
                  <Rocket className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
