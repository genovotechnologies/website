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
import { GradientMesh } from "@/components/3d/gradient-mesh"
import { SphereGeometry } from "@/components/3d/sphere-geometry"
import { GlassCard } from "@/components/ui/glass-card"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { Parallax } from "@/components/animations/parallax"
import { CounterAnimation } from "@/components/animations/counter-animation"
import Link from "next/link"
import { ArrowRight, Globe, Cpu, Zap, Shield, Database, Code, Sparkles, Rocket, Brain, Lock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-black dark:text-white overflow-hidden">
      <Header />

      {/* Hero Section - Premium Redesign */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 opacity-60">
          <GradientMesh />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-40">
          <FloatingParticles />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <FadeIn delay={0}>
              <div className="mb-8 flex flex-col items-center">
                <div className="animate-float">
                  <GenovoLogo size={120} variant="full" className="justify-center mb-4 drop-shadow-2xl" />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                <span className="inline-block animate-scale-in">Building the</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-glow text-shadow">
                  Digital Future
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={400}>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
                Elite software solutions spanning secure infrastructure, AI platforms, and next-generation digital
                experiences that scale globally with uncompromising privacy. Operating in Nigeria, US, and UK markets.
              </p>
            </FadeIn>

            <FadeIn delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                <MagneticButton
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-full px-10 py-7 text-lg font-semibold shadow-glow group"
                >
                  <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Explore Products
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
                </MagneticButton>
                <MagneticButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full px-10 py-7 text-lg font-semibold backdrop-blur-sm group"
                >
                  See Our Vision
                  <Rocket className="w-6 h-6 ml-2 group-hover:-translate-y-1 transition-transform" />
                </MagneticButton>
              </div>
            </FadeIn>

            {/* Stats - Glass Morphism Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { value: 7, label: "PRODUCTS", suffix: "+" },
                { value: 3, label: "PLATFORMS", suffix: "" },
                { value: 5, label: "MARKETS", suffix: "+" },
                { value: 2025, label: "FOUNDED", suffix: "" },
              ].map((stat, index) => (
                <FadeIn key={index} delay={800 + index * 100}>
                  <GlassCard className="p-8 text-center group cursor-pointer hover:scale-105">
                    <div className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      <CounterAnimation end={stat.value} duration={2000} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 tracking-widest font-medium">
                      {stat.label}
                    </div>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Interactive Terminal Section - Enhanced */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <MatrixRain />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Parallax speed={0.3}>
              <FadeIn>
                <Badge className="mb-6 bg-green-600/20 text-green-500 dark:bg-green-400/20 dark:text-green-400 border-green-600/30 dark:border-green-400/30 text-sm px-4 py-2">
                  Interactive Experience
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                  Experience Our
                  <br />
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    Command Interface
                  </span>
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                  Interact with our systems through a real terminal interface. Type commands to explore our products,
                  learn about our technology, and discover what makes Genovo unique.
                </p>
                <div className="space-y-3 text-base text-gray-600 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-800/50 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">$</span>
                    <span>Try: <span className="text-green-500 font-bold">help</span></span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">$</span>
                    <span>Try: <span className="text-green-500 font-bold">products</span></span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">$</span>
                    <span>Try: <span className="text-green-500 font-bold">matrix</span></span>
                  </div>
                </div>
              </FadeIn>
            </Parallax>

            <FadeIn delay={300}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl blur-2xl" />
                <InteractiveTerminal />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technology Showcase - Enhanced with 3D */}
      <section className="py-32 px-6 relative overflow-hidden bg-gray-50 dark:bg-gray-900/50">
        <div className="absolute inset-0 opacity-30">
          <TechGrid />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-blue-600/20 text-blue-500 dark:bg-blue-400/20 dark:text-blue-400 border-blue-600/30 dark:border-blue-400/30 text-sm px-4 py-2">
                Next-Gen Stack
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Quantum-Powered
                </span>
                <br />
                Technology
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Built on quantum computing, advanced AI, and distributed systems architecture.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={200}>
              <div className="h-[500px] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl" />
                <div className="relative h-full">
                  <SphereGeometry />
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-8">
              {[
                {
                  icon: Cpu,
                  title: "Deep Technology",
                  desc: "Building scalable and impactful products with cutting-edge tech",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Shield,
                  title: "Decentralized Systems",
                  desc: "Creating secure, distributed infrastructure for global scale",
                  gradient: "from-purple-500 to-pink-500",
                },
                {
                  icon: Brain,
                  title: "AI/ML Integration",
                  desc: "Advanced algorithms powering intelligent solutions",
                  gradient: "from-emerald-500 to-teal-500",
                },
              ].map((feature, index) => (
                <FadeIn key={index} delay={300 + index * 100}>
                  <GlassCard className="p-6 group cursor-pointer">
                    <div className="flex items-start space-x-5">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview - Premium Cards */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <FloatingParticles />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                Our Products
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transforming industries with intelligent automation and cutting-edge technology.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                name: "Taskr",
                color: "from-blue-500 to-cyan-500",
                desc: "AI-powered service marketplace",
                glow: "shadow-glow",
              },
              {
                icon: Database,
                name: "Homevy",
                color: "from-emerald-500 to-teal-500",
                desc: "Smart rental platform",
                glow: "shadow-[0_0_40px_rgba(16,185,129,0.3)]",
              },
              {
                icon: Zap,
                name: "SCOS",
                color: "from-orange-500 to-red-500",
                desc: "Intelligent OS for infrastructure",
                glow: "shadow-[0_0_40px_rgba(249,115,22,0.3)]",
              },
              {
                icon: Globe,
                name: "ProfitQuest",
                color: "from-purple-500 to-pink-500",
                desc: "Task-to-earn platform",
                glow: "shadow-glow-purple",
              },
            ].map((solution, index) => (
              <FadeIn key={index} delay={index * 100}>
                <GlassCard className={`p-8 text-center group cursor-pointer hover:${solution.glow}`}>
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}
                  >
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                    {solution.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{solution.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-16">
              <Link href="/products">
                <MagneticButton
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-semibold group"
                >
                  View All Solutions
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </MagneticButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section - Premium Gradient */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <TechGrid />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <FadeIn>
            <Badge className="mb-8 bg-white/20 text-white border-white/30 text-sm px-4 py-2">
              Let's Build Together
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to Build
              <br />
              the Future?
            </h2>
            <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join industry leaders who trust Genovo Technologies to power their digital transformation.
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <MagneticButton
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-semibold shadow-2xl group"
                >
                  Start Your Project
                  <Rocket className="ml-2 h-6 w-6 group-hover:-translate-y-1 transition-transform" />
                </MagneticButton>
              </Link>
              <Link href="/about">
                <MagneticButton
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-semibold backdrop-blur-sm group"
                >
                  Learn More
                  <Sparkles className="ml-2 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                </MagneticButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
