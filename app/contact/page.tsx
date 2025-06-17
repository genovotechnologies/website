"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"

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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <SmoothScroll />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Ready to transform your business with intelligent software systems? Let's start a conversation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SlideIn direction="left">
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Send us a message</h2>
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

                    <Button type="submit" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </SlideIn>

            {/* Contact Information */}
            <SlideIn direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Contact Information</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    We'd love to hear from you. Whether you're interested in partnering, investing, or learning more
                    about our solutions, we're here to help.
                  </p>
                </div>

                <StaggerContainer className="space-y-6" staggerDelay={100}>
                  <FadeIn>
                    <Card className="border border-gray-200 dark:border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Email Us</h3>
                            <p className="text-gray-600 dark:text-gray-300">support@genovotech.com</p>
                            <p className="text-gray-600 dark:text-gray-300">founders@genovotech.com</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>

                  <FadeIn>
                    <Card className="border border-gray-200 dark:border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                            <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Call Us</h3>
                            <p className="text-gray-600 dark:text-gray-300">+234 802 970 9341</p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">Mon-Fri 9:00 AM - 6:00 PM EST</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>

                  <FadeIn>
                    <Card className="border border-gray-200 dark:border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Visit Us</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                               6a Social Sciences
                              <br />
                              UNILAG Estate, Magodo, Lagos
                              <br />
                              Nigeria
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </StaggerContainer>

                <FadeIn delay={600}>
                  <Card className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Business Hours</h3>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Quick answers to common questions about our solutions and services.</p>
          </FadeIn>

          <StaggerContainer className="space-y-6" staggerDelay={150}>
            {[
              {
                q: "What industries do you serve?",
                a: "We serve seven key verticals: infrastructure, finance, manufacturing, energy, healthcare, urban planning, and digital platforms.",
              },
              {
                q: "How long does implementation typically take?",
                a: "Implementation timelines vary based on project complexity, but most solutions are deployed within 3-6 months.",
              },
              {
                q: "Do you offer ongoing support and maintenance?",
                a: "Yes, we provide comprehensive support packages including 24/7 monitoring, regular updates, and dedicated account management.",
              },
              {
                q: "Can your solutions integrate with existing systems?",
                a: "Absolutely. Our solutions are designed with integration in mind and can work seamlessly with most existing enterprise systems.",
              },
            ].map((faq, index) => (
              <FadeIn key={index}>
                <Card className="border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{faq.q}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  )
}
