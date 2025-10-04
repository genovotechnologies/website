"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FloatingParticles } from "@/components/3d/floating-particles"
import { TechGrid } from "@/components/3d/tech-grid"
import { GradientMesh } from "@/components/3d/gradient-mesh"
import { GlassCard } from "@/components/ui/glass-card"
import { MagneticButton } from "@/components/ui/magnetic-button"
import Link from "next/link"
import { ArrowRight, Users, Target, Award, Globe, Rocket, Brain, Shield } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { CounterAnimation } from "@/components/animations/counter-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white">
      <SmoothScroll />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <GradientMesh />
        </div>
        <div className="absolute inset-0 opacity-30">
          <FloatingParticles />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <FadeIn>
            <Badge className="mb-8 bg-blue-600/20 text-blue-500 dark:bg-blue-400/20 dark:text-blue-400 border-blue-600/30 dark:border-blue-400/30 text-sm px-4 py-2">
              About Genovo Technologies
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Building the Future of
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Decentralized Digital Empires
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Founded in 2025, we are a deeptech company focused on building scalable and impactful products across Nigeria, US, and UK markets. Our mission is to create monetizable, scalable, and decentralized digital infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <TechGrid />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <SlideIn direction="left">
              <div>
                <Badge className="mb-6 bg-purple-600/20 text-purple-500 dark:bg-purple-400/20 dark:text-purple-400 border-purple-600/30 text-sm px-4 py-2">
                  Our Purpose
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  At Genovo Technologies, our mission is to leverage the transformative power of deep technology to
                  create intelligent, scalable, and sustainable solutions that address the world's most pressing
                  challenges.
                </p>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                  We believe that through the strategic application of artificial intelligence, quantum computing, and
                  advanced analytics, we can fundamentally transform how industries operate and how societies function.
                </p>
                <Link href="/contact">
                  <MagneticButton className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-full px-10 py-6 text-lg font-semibold shadow-glow group">
                    Partner With Us
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </MagneticButton>
                </Link>
              </div>
            </SlideIn>

            <StaggerContainer className="grid grid-cols-2 gap-8" staggerDelay={150}>
              <FadeIn>
                <GlassCard className="p-8 text-center group cursor-pointer">
                  <Target className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-3">Vision</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To be the leading force in intelligent technology transformation globally.
                  </p>
                </GlassCard>
              </FadeIn>

              <FadeIn>
                <GlassCard className="p-8 text-center group cursor-pointer">
                  <Globe className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-3">Impact</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Transforming industries across 7 key verticals worldwide.
                  </p>
                </GlassCard>
              </FadeIn>

              <FadeIn>
                <GlassCard className="p-8 text-center group cursor-pointer">
                  <Brain className="w-16 h-16 text-purple-600 dark:text-purple-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Cutting-edge AI and quantum computing research.
                  </p>
                </GlassCard>
              </FadeIn>

              <FadeIn>
                <GlassCard className="p-8 text-center group cursor-pointer">
                  <Shield className="w-16 h-16 text-red-600 dark:text-red-400 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-3">Security</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Military-grade security and privacy protection.
                  </p>
                </GlassCard>
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
