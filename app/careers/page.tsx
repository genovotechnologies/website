"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const positions = [
    {
      title: "Senior Full Stack Engineer",
      location: "Remote / Lagos",
      type: "Full-time",
      team: "Engineering",
      gradient: "from-[#e81899] to-[#a855f7]"
    },
    {
      title: "AI/ML Engineer",
      location: "Remote / US",
      type: "Full-time",
      team: "AI Research",
      gradient: "from-[#8b5cf6] to-[#6366f1]"
    },
    {
      title: "Product Designer",
      location: "Remote / UK",
      type: "Full-time",
      team: "Design",
      gradient: "from-[#e81899] to-[#d946ef]"
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      team: "Infrastructure",
      gradient: "from-[#8b5cf6] to-[#a855f7]"
    },
    {
      title: "Product Manager",
      location: "Remote / Lagos",
      type: "Full-time",
      team: "Product",
      gradient: "from-[#e81899] to-[#f472b6]"
    },
    {
      title: "Growth Marketing Lead",
      location: "Remote",
      type: "Full-time",
      team: "Marketing",
      gradient: "from-[#8b5cf6] to-[#c084fc]"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5d5ed] via-[#faf8f5] to-[#faf8f5]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Join our team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build technology that transforms lives. We're looking for talented people who share our vision.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">{positions.length} opportunities available</p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${position.gradient}`}></div>
                      <span className="text-sm font-medium text-gray-600">{position.team}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {position.type}
                      </span>
                    </div>
                  </div>

                  <Button className="bg-[#e81899] hover:bg-[#d1178a] text-white rounded-full px-6 py-3 group-hover:translate-x-2 transition-transform duration-300">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 px-6 bg-[#faf8f5]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Genovo?</h2>
            <p className="text-lg text-gray-600">Great benefits and culture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#e81899] mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Salary</h3>
              <p className="text-gray-600">Market-leading compensation and equity</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#8b5cf6] mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Remote First</h3>
              <p className="text-gray-600">Work from anywhere in the world</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#e81899] mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600">Unlimited learning and development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Don't see a perfect fit?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Send us your resume anyway. We're always looking for exceptional talent.
          </p>
          <Link href="/contact">
            <Button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
