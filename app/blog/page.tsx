"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { FloatingParticles } from "@/components/3d/floating-particles"
import { TechGrid } from "@/components/3d/tech-grid"
import { ArrowRight, Calendar, Clock, User, Eye, MessageCircle } from "lucide-react"

import { FadeIn } from "@/components/animations/fade-in"
import { SlideIn } from "@/components/animations/slide-in"
import { StaggerContainer } from "@/components/animations/stagger-container"

export default function BlogPage() {
  const featuredPost = {
    id: "quantum-ai-breakthrough",
    title: "Quantum AI: The Next Frontier in Computing",
    excerpt:
      "Exploring how quantum computing is revolutionizing artificial intelligence and what it means for the future of technology.",
    author: "Dr. Sarah Chen",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Quantum Computing",
    image: "/placeholder.svg?height=400&width=800",
    views: "2.1k",
    comments: 24,
  }

  const blogPosts = [
    {
      id: "ai-ethics-2025",
      title: "AI Ethics in 2025: Building Responsible Systems",
      excerpt: "How we're implementing ethical AI principles in our development process and why it matters.",
      author: "Marcus Rodriguez",
      date: "2025-01-12",
      readTime: "6 min read",
      category: "AI Ethics",
      views: "1.8k",
      comments: 18,
    },
    {
      id: "fintech-revolution",
      title: "The FinTech Revolution: Blockchain Meets AI",
      excerpt: "Exploring the intersection of blockchain technology and artificial intelligence in financial services.",
      author: "Emily Zhang",
      date: "2025-01-10",
      readTime: "7 min read",
      category: "FinTech",
      views: "1.5k",
      comments: 12,
    },
    {
      id: "manufacturing-automation",
      title: "Smart Manufacturing: The Industry 4.0 Transformation",
      excerpt: "How AI-powered automation is reshaping manufacturing processes and supply chains.",
      author: "David Kim",
      date: "2025-01-08",
      readTime: "5 min read",
      category: "Manufacturing",
      views: "1.3k",
      comments: 15,
    },
    {
      id: "healthcare-ai-diagnostics",
      title: "AI in Healthcare: Revolutionizing Medical Diagnostics",
      excerpt: "The impact of machine learning on medical imaging and diagnostic accuracy.",
      author: "Dr. Lisa Park",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Healthcare",
      views: "2.3k",
      comments: 31,
    },
    {
      id: "cybersecurity-quantum",
      title: "Quantum Cryptography: The Future of Cybersecurity",
      excerpt: "How quantum encryption is set to revolutionize data security and privacy protection.",
      author: "Alex Thompson",
      date: "2025-01-03",
      readTime: "6 min read",
      category: "Cybersecurity",
      views: "1.9k",
      comments: 22,
    },
    {
      id: "edge-computing-iot",
      title: "Edge Computing: Bringing AI Closer to IoT Devices",
      excerpt: "The benefits of processing data at the edge and its impact on IoT applications.",
      author: "Rachel Green",
      date: "2025-01-01",
      readTime: "7 min read",
      category: "Edge Computing",
      views: "1.6k",
      comments: 19,
    },
  ]

  const categories = [
    "All",
    "AI & Machine Learning",
    "Quantum Computing",
    "Cybersecurity",
    "FinTech",
    "Healthcare",
    "Manufacturing",
    "Edge Computing",
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
              Tech Insights
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Insights, research, and thought leadership from the Genovo Technologies team on AI, quantum computing, and
              the future of enterprise technology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <TechGrid />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
          </FadeIn>

          <SlideIn direction="up">
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-500 group overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                      </div>
                      <div className="text-sm opacity-80">Featured Article</div>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className="bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{featuredPost.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-medium">{featuredPost.author}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Senior AI Researcher</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{featuredPost.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{featuredPost.comments}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full group/btn">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SlideIn>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Latest Articles</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  {category}
                </Button>
              ))}
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={100}>
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id}>
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="text-xs">{post.category}</Badge>
                      <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 group/btn"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights on AI, quantum computing, and enterprise technology delivered to your inbox.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
