"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Send, MessageSquare, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <Badge className="mb-6 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-0">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <FadeIn delay={100}>
              <Card className="border bg-white dark:bg-gray-900">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[120px] dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-lg py-6">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Other ways to reach us</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Prefer a different channel? We're available through multiple platforms to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border bg-white dark:bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                          <p className="text-gray-600 dark:text-gray-400">info@genovotech.com</p>
                          <p className="text-gray-600 dark:text-gray-400">hello@genovotech.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border bg-white dark:bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Locations</h3>
                          <p className="text-gray-600 dark:text-gray-400">Lagos, Nigeria</p>
                          <p className="text-gray-600 dark:text-gray-400">United States</p>
                          <p className="text-gray-600 dark:text-gray-400">United Kingdom</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border bg-white dark:bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Chat with Us</h3>
                          <p className="text-gray-600 dark:text-gray-400">Live chat support</p>
                          <p className="text-gray-600 dark:text-gray-400">Available 9 AM - 5 PM WAT</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Looking to join our team?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Check out our open positions and join us in building the future of technology.
                    </p>
                    <Link href="/careers">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
                        View Careers
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
