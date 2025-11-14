"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Target, TrendingUp, BarChart, Calendar, Clock, Slack, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <FadeIn delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                Think, plan, and track
                <br />
                <span className="text-gray-400 dark:text-gray-500">all in one place</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                Efficiently manage your tasks and boost productivity.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-6 text-lg font-medium shadow-lg"
              >
                Get free demo
              </Button>
            </FadeIn>

            {/* Hero Visual Elements */}
            <div className="mt-16 relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sticky Note */}
                <FadeIn delay={600}>
                  <Card className="bg-yellow-100 dark:bg-yellow-900/20 border-0 shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-handwriting">
                        Take notes to keep track of crucial details, and accomplish more tasks with ease.
                      </p>
                      <div className="mt-4 bg-white dark:bg-gray-800 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                {/* App Icon */}
                <FadeIn delay={700}>
                  <div className="flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 w-32 h-32 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                        <div className="w-8 h-8 bg-black dark:bg-white rounded-full"></div>
                        <div className="w-8 h-8 bg-black dark:bg-white rounded-full"></div>
                        <div className="w-8 h-8 bg-black dark:bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                {/* Reminders Card */}
                <FadeIn delay={800}>
                  <Card className="bg-white dark:bg-gray-800 border shadow-lg rotate-[2deg] hover:rotate-0 transition-transform">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Reminders</h3>
                        <Clock className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="space-y-3">
                        <div className="text-sm text-gray-600 dark:text-gray-400">Meeting</div>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Today's Meeting</div>
                          <div className="flex items-center text-sm">
                            <Clock className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-blue-600 font-medium">13:00 - 14:45</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              {/* Today's Tasks Widget */}
              <FadeIn delay={900}>
                <Card className="mt-8 max-w-xs mx-auto md:absolute md:bottom-0 md:left-0 bg-white dark:bg-gray-800 border shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Today's tasks</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">New Ideas for campaign</div>
                            <div className="text-xs text-gray-500">Sep 30</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">60%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full">
                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "60%" }}></div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Design PPT #4</div>
                            <div className="text-xs text-gray-500">Sep 18</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">10%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full">
                        <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Integrations Badge */}
              <FadeIn delay={1000}>
                <Card className="mt-8 max-w-xs mx-auto md:absolute md:bottom-0 md:right-0 bg-white dark:bg-gray-800 border shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">100+ Integrations</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Slack className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Solve your team's
              <br />
              biggest challenges
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={100}>
              <Card className="border bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Empower each team to optimize their unique processes
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Customize workflows to match your team's needs with flexible project management tools.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="border bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Maintain an integrated view of project progress across teams
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get real-time visibility into all your projects with comprehensive dashboards.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="border bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Collaboratively plan milestones and track progress
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Work together to set goals and monitor achievements in real-time.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Dashboard Preview */}
          <div className="relative max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-white dark:bg-gray-900 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Good morning, Amanda</h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400">04:21:58</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">To do list</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">Review project proposal</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">Update team schedule</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Activity</h4>
                      <div className="flex items-center justify-center h-32">
                        <div className="w-32 h-32 rounded-full border-8 border-blue-600 border-t-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keep Everything Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Keep everything in one place
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Forget complex project management tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={100}>
              <Card className="border bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Seamless Collaboration</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Effortlessly manage tasks, share updates, and collaborate with your team in real-time.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 dark:text-gray-300">Design concept</span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 dark:text-gray-300">User research</span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="border bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Clock className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Time Management Tools</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Optimize your workflow with advanced time tracking and scheduling capabilities.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="h-12 w-12 bg-blue-500 rounded"></div>
                        <div className="h-16 w-12 bg-cyan-500 rounded"></div>
                        <div className="h-10 w-12 bg-purple-500 rounded"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="border bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Advanced Task Tracking</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Monitor task progress with intuitive kanban boards and powerful analytics.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 dark:text-gray-300">Project Tracker</span>
                      <BarChart className="w-4 h-4 text-orange-500" />
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 dark:text-gray-300">Team Dashboard</span>
                      <BarChart className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={400}>
              <Card className="border bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Target className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customizable Workspaces</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Tailor your workspace to fit your unique workflow and preferences.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">04:21</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to boost your productivity?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
            Join thousands of teams already using ChronoTask to manage their work.
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
            <Link href="/features">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-8 py-6 text-lg font-medium"
              >
                Explore features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
