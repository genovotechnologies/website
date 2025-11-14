"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { 
  BookOpen, Video, FileText, Download, Users, 
  MessageSquare, Lightbulb, ArrowRight
} from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      category: "Documentation",
      icon: BookOpen,
      color: "bg-blue-500",
      items: [
        { title: "Getting Started Guide", type: "Guide", link: "#" },
        { title: "User Manual", type: "Documentation", link: "#" },
        { title: "API Reference", type: "Technical", link: "#" },
        { title: "Integration Guides", type: "Guide", link: "#" }
      ]
    },
    {
      category: "Video Tutorials",
      icon: Video,
      color: "bg-purple-500",
      items: [
        { title: "ChronoTask 101", type: "15 min", link: "#" },
        { title: "Advanced Features", type: "22 min", link: "#" },
        { title: "Team Collaboration Tips", type: "18 min", link: "#" },
        { title: "Admin Best Practices", type: "20 min", link: "#" }
      ]
    },
    {
      category: "Blog & Articles",
      icon: FileText,
      color: "bg-green-500",
      items: [
        { title: "10 Productivity Hacks", type: "Article", link: "#" },
        { title: "Remote Team Management", type: "Blog Post", link: "#" },
        { title: "Project Planning Tips", type: "Article", link: "#" },
        { title: "Time Management Strategies", type: "Blog Post", link: "#" }
      ]
    },
    {
      category: "Downloads",
      icon: Download,
      color: "bg-orange-500",
      items: [
        { title: "Desktop App (Windows)", type: "Software", link: "#" },
        { title: "Desktop App (Mac)", type: "Software", link: "#" },
        { title: "Mobile App (iOS)", type: "App Store", link: "#" },
        { title: "Mobile App (Android)", type: "Play Store", link: "#" }
      ]
    }
  ]

  const community = [
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other ChronoTask users and share best practices.",
      link: "#"
    },
    {
      icon: MessageSquare,
      title: "Support Chat",
      description: "Get instant help from our support team via live chat.",
      link: "#"
    },
    {
      icon: Lightbulb,
      title: "Feature Requests",
      description: "Suggest new features and vote on ideas from the community.",
      link: "#"
    }
  ]

  const webinars = [
    {
      title: "Mastering Project Management with ChronoTask",
      date: "December 15, 2025",
      time: "2:00 PM EST",
      speaker: "Sarah Johnson, Product Manager"
    },
    {
      title: "Advanced Automation Workflows",
      date: "December 22, 2025",
      time: "3:00 PM EST",
      speaker: "Mike Chen, Solutions Architect"
    },
    {
      title: "Team Collaboration Best Practices",
      date: "January 5, 2026",
      time: "1:00 PM EST",
      speaker: "Emma Wilson, Team Lead"
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
                Resources
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Learn, grow, and
                <br />
                <span className="text-gray-400 dark:text-gray-500">get support</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Everything you need to become a ChronoTask expert and maximize your productivity.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border bg-white dark:bg-gray-900">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`${resource.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {resource.category}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {resource.items.map((item, idx) => (
                        <Link key={idx} href={item.link}>
                          <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600">
                                {item.title}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {item.type}
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Upcoming Webinars
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Join our live sessions and learn from experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border-0 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <Badge className="mb-4 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-0">
                      Upcoming
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {webinar.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div>📅 {webinar.date}</div>
                      <div>⏰ {webinar.time}</div>
                      <div>👤 {webinar.speaker}</div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Connect with users and get the support you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {community.map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <Card className="border bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {item.description}
                    </p>
                    <Link href={item.link}>
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
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
            Need personalized help?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Our support team is here to answer your questions and help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-lg px-8 py-6 text-lg font-medium"
              >
                Contact Support
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-lg font-medium"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
