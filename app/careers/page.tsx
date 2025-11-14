"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { 
  Briefcase, MapPin, Clock, Users, Heart, Zap, Trophy, Coffee,
  ArrowRight, Code, Brain, Palette
} from "lucide-react"

export default function CareersPage() {
  const positions = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria / Remote",
      type: "Full-time",
      description: "Build scalable platforms across our product ecosystem using modern web technologies.",
      requirements: ["5+ years experience", "React/Next.js", "Node.js", "Cloud platforms"]
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote",
      type: "Full-time",
      description: "Develop intelligent systems and machine learning models for our AI infrastructure.",
      requirements: ["ML/AI experience", "Python", "TensorFlow/PyTorch", "Deep learning"]
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Lagos, Nigeria / Remote",
      type: "Full-time",
      description: "Create beautiful, intuitive user experiences across our product portfolio.",
      requirements: ["3+ years experience", "Figma", "User research", "Design systems"]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: ["DevOps experience", "Kubernetes", "AWS/GCP", "CI/CD"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Lagos, Nigeria",
      type: "Full-time",
      description: "Drive product strategy and execution for one of our core platforms.",
      requirements: ["Product management experience", "Technical background", "Data-driven", "User-focused"]
    },
    {
      title: "Growth Marketing Lead",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Scale user acquisition and retention across our product ecosystem.",
      requirements: ["Growth marketing experience", "Data analysis", "Performance marketing", "A/B testing"]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Competitive Salary",
      description: "Market-leading compensation packages with equity options"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you're most productive with flexible scheduling"
    },
    {
      icon: Users,
      title: "Remote First",
      description: "Work from anywhere with our remote-first culture"
    },
    {
      icon: Trophy,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and books"
    },
    {
      icon: Coffee,
      title: "Team Events",
      description: "Regular team building and social events"
    }
  ]

  const values = [
    {
      icon: Code,
      title: "Innovation",
      description: "We push boundaries and embrace new technologies"
    },
    {
      icon: Brain,
      title: "Excellence",
      description: "We strive for quality in everything we build"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We win together as a team"
    },
    {
      icon: Palette,
      title: "Creativity",
      description: "We encourage bold ideas and creative solutions"
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
              <Badge className="mb-6 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-0">
                Careers
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Build the Future
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">With Us</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Join our team of innovators building deep tech solutions that transform industries and create real impact.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Join Genovo?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              More than just a job – it's an opportunity to make an impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow">
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

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We take care of our team members
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border-0 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {benefit.description}
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

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Find your next opportunity
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <FadeIn key={index} delay={index * 50}>
                <Card className="border bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow group">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {position.title}
                          </h3>
                          <Badge className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-0">
                            {position.department}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {position.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {position.requirements.map((req, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Link href="/contact">
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group-hover:scale-105 transition-transform">
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
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
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't see the right role?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-lg px-8 py-6 text-lg font-medium"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
