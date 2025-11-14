"use client"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Linkedin, Mail } from "lucide-react"

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "15+ years building global tech platforms. Former VP at leading unicorn.",
      initials: "SC",
      color: "from-[#e81899] to-[#a855f7]",
      linkedin: "#",
      email: "sarah@genovotech.com"
    },
    {
      name: "Michael Adeyemi",
      role: "Chief Technology Officer",
      bio: "Principal Engineer with expertise in distributed systems and AI architecture.",
      initials: "MA",
      color: "from-[#8b5cf6] to-[#6366f1]",
      linkedin: "#",
      email: "michael@genovotech.com"
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Product Officer",
      bio: "Product leader who launched products used by millions at Fortune 500.",
      initials: "ER",
      color: "from-[#e81899] to-[#d946ef]",
      linkedin: "#",
      email: "emily@genovotech.com"
    },
    {
      name: "David Okonkwo",
      role: "Chief Financial Officer",
      bio: "Led $100M+ fundraising rounds. Former investment banker.",
      initials: "DO",
      color: "from-[#8b5cf6] to-[#a855f7]",
      linkedin: "#",
      email: "david@genovotech.com"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5d5ed] via-[#faf8f5] to-[#faf8f5]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Meet the team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse group of engineers, designers, and innovators building the future of technology.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-lg text-gray-600">Experienced leaders driving innovation and growth</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-[#e81899] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <a href={member.linkedin} className="text-gray-600 hover:text-[#e81899] transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-[#e81899] transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
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
