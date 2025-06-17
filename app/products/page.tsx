"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { InteractiveTerminal } from "@/components/interactive-terminal"
import { FloatingParticles } from "@/components/3d/floating-particles"
import { TechGrid } from "@/components/3d/tech-grid"
import { MatrixRain } from "@/components/3d/matrix-rain"
import Link from "next/link"
import {
  ArrowRight,
  DollarSign,
  Factory,
  Zap,
  Heart,
  MapPin,
  CheckCircle,
  Shield,
  Brain,
  Cloud,
  Database,
  Cpu,
  Globe,
  Code,
  Lock,
  Rocket,
} from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"

export default function ProductsPage() {
  const products = [
    {
      id: "ai-infrastructure",
      icon: Brain,
      name: "AI Infrastructure",
      description:
        "Intelligent IoT solutions for smart cities and infrastructure management with quantum-powered analytics",
      features: ["Quantum Computing Integration", "Real-time Analytics", "Predictive Maintenance", "Edge Computing"],
      color: "from-blue-500 to-cyan-500",
      price: "Enterprise",
      category: "Infrastructure",
    },
    {
      id: "fintech-platform",
      icon: DollarSign,
      name: "FinTech Platform",
      description: "Advanced blockchain-based financial systems with AI-powered risk management and trading algorithms",
      features: ["Blockchain Integration", "AI Risk Analytics", "Automated Trading", "Regulatory Compliance"],
      color: "from-emerald-500 to-teal-500",
      price: "Custom",
      category: "Finance",
    },
    {
      id: "manufacturing-40",
      icon: Factory,
      name: "Manufacturing 4.0",
      description: "Industry 4.0 automation with intelligent manufacturing systems and supply chain optimization",
      features: ["Process Automation", "Quality Control AI", "Supply Chain Optimization", "Digital Twin Technology"],
      color: "from-orange-500 to-red-500",
      price: "Enterprise",
      category: "Manufacturing",
    },
    {
      id: "healthcare-ai",
      icon: Heart,
      name: "Healthcare AI",
      description: "AI-powered medical diagnostics and telemedicine platforms with real-time patient monitoring",
      features: ["AI Diagnostics", "Patient Management", "Telemedicine Platform", "Medical Imaging AI"],
      color: "from-purple-500 to-pink-500",
      price: "Custom",
      category: "Healthcare",
    },
    {
      id: "smart-cities",
      icon: MapPin,
      name: "Smart Cities",
      description: "Data-driven city development and urban optimization tools with IoT integration",
      features: ["Traffic Optimization", "Resource Planning", "Environmental Monitoring", "Citizen Services"],
      color: "from-indigo-500 to-purple-500",
      price: "Enterprise",
      category: "Urban Planning",
    },
    {
      id: "energy-management",
      icon: Zap,
      name: "Energy Management",
      description: "Smart grid technology and renewable energy optimization with predictive analytics",
      features: ["Grid Optimization", "Energy Storage", "Demand Forecasting", "Renewable Integration"],
      color: "from-yellow-500 to-orange-500",
      price: "Custom",
      category: "Energy",
    },
    {
      id: "cybersecurity-suite",
      icon: Shield,
      name: "Cybersecurity Suite",
      description: "Advanced threat detection and prevention with quantum encryption and zero-trust architecture",
      features: ["Quantum Encryption", "Threat Detection", "Zero-Trust Security", "Compliance Management"],
      color: "from-red-500 to-pink-500",
      price: "Enterprise",
      category: "Security",
    },
    {
      id: "cloud-platform",
      icon: Cloud,
      name: "Cloud Platform",
      description: "Scalable cloud infrastructure with edge computing and serverless architecture",
      features: ["Edge Computing", "Serverless Functions", "Auto-scaling", "Global CDN"],
      color: "from-gray-500 to-slate-500",
      price: "Pay-as-you-go",
      category: "Cloud",
    },
  ]

  const techStack = [
    { icon: Cpu, name: "Quantum Computing", desc: "Next-gen processing power" },
    { icon: Brain, name: "Advanced AI/ML", desc: "Deep learning algorithms" },
    { icon: Shield, name: "Zero-Trust Security", desc: "Military-grade protection" },
    { icon: Database, name: "Distributed Systems", desc: "Global scale architecture" },
    { icon: Cloud, name: "Edge Computing", desc: "Ultra-low latency" },
    { icon: Lock, name: "Blockchain", desc: "Immutable data integrity" },
  ]

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
              Enterprise Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Revolutionary
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Products
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover our comprehensive suite of intelligent software systems designed to transform industries and
              solve complex challenges with cutting-edge technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Terminal Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <MatrixRain />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <Badge className="mb-6 bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400 border-green-600/20 dark:border-green-400/20">
                  Interactive Demo
                </Badge>
                <h2 className="text-4xl font-bold mb-6">
                  Explore Our Products
                  <br />
                  <span className="text-green-500">Through Code</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Use our interactive terminal to explore product details, technical specifications, and learn about our
                  technology stack.
                </p>
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 font-mono">
                  <div>
                    Try: <span className="text-green-500">products</span> - View all products
                  </div>
                  <div>
                    Try: <span className="text-green-500">tech</span> - See our tech stack
                  </div>
                  <div>
                    Try: <span className="text-green-500">team</span> - Meet our team
                  </div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={200}>
              <InteractiveTerminal />
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Product Suite</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Eight revolutionary products designed to transform your industry with AI and quantum computing.
            </p>
          </FadeIn>

          <StaggerContainer className="grid lg:grid-cols-2 gap-8" staggerDelay={100}>
            {products.map((product, index) => (
              <FadeIn key={product.id} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${product.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge className="mb-2 text-xs">{product.category}</Badge>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Pricing</div>
                        <div className="font-semibold">{product.price}</div>
                      </div>
                    </div>

                    <div className="mb-6 relative z-10">
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4 relative z-10">
                      <Link href="/contact">
                        <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full group/btn">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full group/btn"
                      >
                        View Demo
                        <Code className="ml-2 h-4 w-4 group-hover/btn:animate-pulse" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-black dark:bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <TechGrid />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Powered by Advanced Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge technologies and industry-leading frameworks for maximum performance and
              scalability.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={150}>
            {techStack.map((tech, index) => (
              <FadeIn key={index}>
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <tech.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-blue-300 transition-all" />
                    <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{tech.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI-powered solutions can revolutionize your industry and drive unprecedented growth.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 group">
                  Schedule Consultation
                  <Rocket className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8 group"
                >
                  Learn About Us
                  <Globe className="ml-2 h-5 w-5 group-hover:animate-spin" />
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
