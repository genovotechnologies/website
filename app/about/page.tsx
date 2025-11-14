"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5d5ed] via-[#faf8f5] to-[#faf8f5]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold text-[#e81899] mb-4 uppercase tracking-wider">WHO WE ARE</p>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
            Building tomorrow's
            <br />
            technology, today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Genovo Technologies is a deep tech company creating AI, blockchain, and platform solutions that scale globally.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To create monetizable, scalable, and decentralized digital infrastructure that empowers billions of people worldwide.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-200">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold text-[#e81899] mb-2">6</div>
                  <p className="text-gray-600">Active Products</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#8b5cf6] mb-2">3</div>
                  <p className="text-gray-600">Global Locations</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#e81899] mb-2">2025</div>
                  <p className="text-gray-600">Founded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we build</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-[#e81899] mb-4">01</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We build cutting-edge solutions that push the boundaries of what's possible with technology.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-[#8b5cf6] mb-4">02</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact Driven</h3>
              <p className="text-gray-600">
                Every product we create is designed to solve real problems and create measurable impact.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-[#e81899] mb-4">03</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Security</h3>
              <p className="text-gray-600">
                User data protection and security are fundamental to our architecture and design philosophy.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200">
              <div className="text-4xl font-bold text-[#8b5cf6] mb-4">04</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Mindset</h3>
              <p className="text-gray-600">
                We build for the world, creating solutions that work across borders and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Join our journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented people who share our vision.
          </p>
          <Link href="/careers">
            <Button className="bg-[#e81899] hover:bg-[#d1178a] text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg">
              View Careers
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
