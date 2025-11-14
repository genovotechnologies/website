"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { 
  CheckCircle, Users, Clock, Target, TrendingUp, BarChart, 
  Calendar, Bell, MessageSquare, FileText, Settings, Shield,
  Zap, Globe, Layout, Smartphone
} from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work seamlessly with your team in real-time. Share tasks, updates, and files effortlessly.",
      benefits: [
        "Real-time synchronization",
        "Team chat and comments",
        "File sharing and attachments",
        "Activity feeds and notifications"
      ],
      color: "bg-blue-500"
    },
    {
      icon: Target,
      title: "Task Management",
      description: "Organize, prioritize, and track your tasks with powerful management tools.",
      benefits: [
        "Customizable task boards",
        "Priority levels and labels",
        "Due dates and reminders",
        "Subtasks and checklists"
      ],
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Monitor time spent on tasks and projects to improve productivity and billing accuracy.",
      benefits: [
        "Automatic time tracking",
        "Manual time entries",
        "Detailed time reports",
        "Billable hours tracking"
      ],
      color: "bg-cyan-500"
    },
    {
      icon: BarChart,
      title: "Analytics & Reports",
      description: "Get insights into team performance with comprehensive analytics and reporting.",
      benefits: [
        "Custom dashboards",
        "Performance metrics",
        "Export reports (PDF, CSV)",
        "Progress visualization"
      ],
      color: "bg-green-500"
    },
    {
      icon: Calendar,
      title: "Calendar Integration",
      description: "Sync with your favorite calendar apps and never miss a deadline.",
      benefits: [
        "Google Calendar sync",
        "Outlook integration",
        "iCal support",
        "Automated reminders"
      ],
      color: "bg-orange-500"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay informed with customizable notifications across all devices.",
      benefits: [
        "Email notifications",
        "Push notifications",
        "In-app alerts",
        "Notification preferences"
      ],
      color: "bg-pink-500"
    },
    {
      icon: Layout,
      title: "Custom Workflows",
      description: "Create workflows that match your team's unique processes and methodologies.",
      benefits: [
        "Drag-and-drop workflow builder",
        "Custom statuses and stages",
        "Automation rules",
        "Template library"
      ],
      color: "bg-indigo-500"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security to keep your data safe and compliant.",
      benefits: [
        "End-to-end encryption",
        "Two-factor authentication",
        "Role-based permissions",
        "GDPR compliant"
      ],
      color: "bg-red-500"
    },
    {
      icon: Globe,
      title: "Integrations",
      description: "Connect with 100+ tools you already use to streamline your workflow.",
      benefits: [
        "Slack integration",
        "GitHub & GitLab",
        "Zapier automation",
        "API access"
      ],
      color: "bg-yellow-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Access your tasks and projects on the go with native mobile applications.",
      benefits: [
        "iOS and Android apps",
        "Offline mode",
        "Mobile notifications",
        "Touch-optimized interface"
      ],
      color: "bg-teal-500"
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
              <Badge className="mb-6 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-0">
                Features
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Everything you need to
                <br />
                <span className="text-gray-400 dark:text-gray-500">manage your work</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Powerful features designed to help teams collaborate, organize, and achieve their goals.
              </p>
            </FadeIn>
          </div>

          {/* Featured Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <FadeIn delay={200}>
              <Card className="border-0 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <CardContent className="p-8">
                  <Zap className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-blue-50">
                    Optimized performance ensures your team can work without delays
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="border-0 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Built for Teams</h3>
                  <p className="text-purple-50">
                    Collaboration features that bring your team together
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={400}>
              <Card className="border-0 bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Secure & Private</h3>
                  <p className="text-green-50">
                    Enterprise-grade security to protect your data
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 50}>
                <Card className="border bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
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
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Start using these features today
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Get started with a free demo and see how ChronoTask can transform your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-6 text-lg font-medium"
              >
                Get free demo
              </Button>
            </Link>
            <Link href="/solutions">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-8 py-6 text-lg font-medium"
              >
                View solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
