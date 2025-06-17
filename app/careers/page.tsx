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
import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Rocket,
  Brain,
  Shield,
  Globe,
  Heart,
  Coffee,
  Zap,
  Award,
  BookOpen,
  Briefcase,
} from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"

export default function CareersPage() {
  const jobOpenings = [
    {
      id: "senior-ai-engineer",
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$180k - $250k",
      description: "Lead the development of next-generation AI systems and quantum computing applications.",
      requirements: [
        "PhD in AI/ML or equivalent",
        "5+ years experience",
        "Python, TensorFlow, PyTorch",
        "Quantum computing knowledge",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "full-stack-developer",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$140k - $180k",
      description: "Build scalable web applications and contribute to our cutting-edge technology platform.",
      requirements: [
        "5+ years full-stack experience",
        "React, Node.js, TypeScript",
        "Cloud platforms (AWS/GCP)",
        "Microservices architecture",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "product-manager",
      title: "Senior Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$160k - $220k",
      description: "Drive product strategy and roadmap for our AI infrastructure solutions.",
      requirements: [
        "7+ years product management",
        "B2B SaaS experience",
        "Technical background",
        "Data-driven decision making",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$150k - $200k",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["Kubernetes, Docker", "AWS/GCP/Azure", "Infrastructure as Code", "CI/CD pipelines"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: "security-engineer",
      title: "Security Engineer",
      department: "Security",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$170k - $230k",
      description: "Implement zero-trust security architecture and quantum encryption systems.",
      requirements: [
        "Cybersecurity expertise",
        "Zero-trust architecture",
        "Penetration testing",
        "Security certifications",
      ],
      color: "from-red-500 to-pink-500",
    },
    {
      id: "data-scientist",
      title: "Senior Data Scientist",
      department: "Data Science",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      salary: "$160k - $210k",
      description: "Develop machine learning models and extract insights from large-scale datasets.",
      requirements: [
        "PhD in Data Science/Statistics",
        "Python, R, SQL",
        "Deep learning frameworks",
        "Big data technologies",
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const benefits = [
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health, dental, and vision insurance" },
    { icon: Rocket, title: "Equity Package", desc: "Competitive equity compensation with high growth potential" },
    { icon: Coffee, title: "Flexible Work", desc: "Remote-first culture with flexible hours and unlimited PTO" },
    { icon: BookOpen, title: "Learning Budget", desc: "$5,000 annual budget for conferences, courses, and books" },
    { icon: Globe, title: "Global Team", desc: "Work with world-class talent from 50+ countries" },
    {
      icon: Zap,
      title: "Cutting-edge Tech",
      desc: "Access to latest hardware, software, and quantum computing resources",
    },
  ]

  const values = [
    { icon: Brain, title: "Innovation First", desc: "We push the boundaries of what's possible with technology" },
    {
      icon: Users,
      title: "Collaborative Spirit",
      desc: "We believe great things happen when brilliant minds work together",
    },
    { icon: Shield, title: "Ethical AI", desc: "We're committed to developing AI that benefits humanity" },
    { icon: Award, title: "Excellence", desc: "We maintain the highest standards in everything we do" },
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
            <Badge className="mb-6 bg-purple-600/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400 border-purple-600/20 dark:border-purple-400/20">
              Join Our Mission
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build the Future
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join a team of world-class engineers, researchers, and innovators who are building the next generation of
              AI-powered solutions that will transform industries and improve lives globally.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Terminal Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <TechGrid />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div>
                <Badge className="mb-6 bg-green-600/10 text-green-600 dark:bg-green-400/10 dark:text-green-400 border-green-600/20 dark:border-green-400/20">
                  Career Explorer
                </Badge>
                <h2 className="text-4xl font-bold mb-6">
                  Explore Opportunities
                  <br />
                  <span className="text-green-500">Through Code</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Use our interactive terminal to explore career opportunities, learn about our team, and discover what
                  makes Genovo a great place to work.
                </p>
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 font-mono">
                  <div>
                    Try: <span className="text-green-500">careers</span> - View open positions
                  </div>
                  <div>
                    Try: <span className="text-green-500">team</span> - Meet our team
                  </div>
                  <div>
                    Try: <span className="text-green-500">tech</span> - See our tech stack
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

      {/* Job Openings */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're looking for exceptional talent to join our mission of building the future with AI and quantum
              computing.
            </p>
          </FadeIn>

          <StaggerContainer className="space-y-6" staggerDelay={100}>
            {jobOpenings.map((job, index) => (
              <FadeIn key={job.id}>
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${job.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start relative z-10">
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge className="text-xs">{job.department}</Badge>
                              <Badge variant="outline" className="text-xs">
                                {job.type}
                              </Badge>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600 dark:text-gray-400">{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600 dark:text-gray-400">{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600 dark:text-gray-400">{job.salary}</span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Key Requirements</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {job.requirements.map((req, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col space-y-4">
                        <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full group/btn">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full group/btn"
                        >
                          Learn More
                          <Briefcase className="ml-2 h-4 w-4 group-hover/btn:animate-pulse" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Join Genovo?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer competitive compensation, cutting-edge technology, and the opportunity to work on problems that
              matter.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={150}>
            {benefits.map((benefit, index) => (
              <FadeIn key={index}>
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <benefit.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-6 bg-black dark:bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <FloatingParticles />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide how we work, innovate, and build the future together.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={200}>
            {values.map((value, index) => (
              <FadeIn key={index}>
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-purple-300 transition-all" />
                    <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Don't see the perfect role? We're always looking for exceptional talent. Send us your resume and let's
              talk about how you can contribute to the future.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 group">
                Send Resume
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8 group"
                >
                  Contact Us
                  <Users className="ml-2 h-5 w-5 group-hover:animate-pulse" />
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
