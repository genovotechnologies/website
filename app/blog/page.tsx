"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "Introducing Taskr: AI-Powered Service Marketplace",
      excerpt: "We're launching Taskr, our revolutionary AI marketplace connecting service providers globally.",
      date: "Nov 10, 2025",
      readTime: "5 min",
      category: "Product Launch",
      gradient: "from-[#e81899] to-[#a855f7]"
    },
    {
      title: "Building Smart Cities with SCOS",
      excerpt: "How we're creating the operating system for next-generation urban infrastructure.",
      date: "Nov 5, 2025",
      readTime: "8 min",
      category: "Technology",
      gradient: "from-[#8b5cf6] to-[#6366f1]"
    },
    {
      title: "ProfitQuest Beta Launch",
      excerpt: "Start earning real income through AI-powered micro-tasks. Join the beta today.",
      date: "Oct 28, 2025",
      readTime: "6 min",
      category: "Product Launch",
      gradient: "from-[#e81899] to-[#d946ef]"
    },
    {
      title: "Decentralized Financial Infrastructure",
      excerpt: "Our FinTech Suite leverages blockchain for next-gen financial services.",
      date: "Oct 20, 2025",
      readTime: "10 min",
      category: "Technology",
      gradient: "from-[#8b5cf6] to-[#a855f7]"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5d5ed] via-[#faf8f5] to-[#faf8f5]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Blog & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest news, product launches, and insights from the Genovo team.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className={`w-full md:w-48 h-48 bg-gradient-to-br ${post.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-6xl font-bold text-white opacity-30">{(index + 1).toString().padStart(2, '0')}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium px-4 py-1 rounded-full bg-gray-100 text-gray-700">
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#e81899] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <Button variant="ghost" className="text-gray-900 hover:bg-gray-100 group-hover:translate-x-2 transition-transform duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
