"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

const commands = {
  help: "Available commands: about, products, careers, contact, team, tech, matrix, hack, clear, whoami, ls, pwd, date",
  about:
    "Genovo Technologies - Building the Digital Future with AI\nFounded: 2025 | HQ: San Francisco, CA\nWebsite: https://genovotech.com",
  products:
    "🚀 AI Infrastructure | 💰 FinTech Platform | 🏭 Manufacturing 4.0 | 🏥 Healthcare AI\n🌆 Smart Cities | ⚡ Energy Management | 🔒 Cybersecurity Suite",
  careers:
    "Join our team! Open positions:\n• Senior AI Engineer\n• Full Stack Developer\n• Product Manager\n• DevOps Engineer\nApply at: careers@genovotech.com",
  contact:
    "📧 hello@genovotech.com\n📞 +1 (555) GENOVO-1\n🏢 123 Innovation Drive, San Francisco, CA 94107\n🌐 https://genovotech.com",
  team: "Our team includes world-class engineers from:\n• Stanford, MIT, Carnegie Mellon\n• Google, Apple, Tesla, SpaceX\n• 50+ countries worldwide",
  tech: "Tech Stack:\n• AI/ML: TensorFlow, PyTorch, Quantum Computing\n• Backend: Node.js, Python, Go, Rust\n• Frontend: React, Next.js, TypeScript\n• Cloud: AWS, GCP, Azure, Edge Computing",
  clear: "",
  matrix: "Wake up, Neo... The Matrix has you...\n01001000 01100101 01101100 01101100 01101111\n🔴 🔵 🔴 🔵 🔴 🔵",
  hack: "🚨 INTRUSION DETECTED 🚨\nInitiating countermeasures...\nJust kidding! Nice try though! 😄",
  whoami: "guest@genovotech.com\nAccess Level: Visitor\nLocation: Earth 🌍",
  ls: "📁 projects/\n📁 innovations/\n📁 solutions/\n📄 README.md\n📄 LICENSE",
  pwd: "/home/genovo/future",
  date: new Date().toLocaleString(),
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState([
    "Welcome to Genovo Terminal v3.0",
    "Quantum-powered command interface initialized",
    "Type 'help' for available commands",
    "",
  ])
  const [isTyping, setIsTyping] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim()
    setHistory((prev) => [...prev, `$ ${cmd}`])

    if (command === "clear") {
      setHistory(["Welcome to Genovo Terminal v3.0", "Quantum-powered command interface initialized", ""])
      return
    }

    const response =
      commands[command as keyof typeof commands] || `Command not found: ${cmd}\nType 'help' for available commands`

    setIsTyping(true)
    setTimeout(() => {
      setHistory((prev) => [...prev, response, ""])
      setIsTyping(false)
    }, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput("")
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <div className="bg-gray-900 dark:bg-black rounded-lg p-6 font-mono text-sm text-green-400 h-96 overflow-hidden border border-gray-700 dark:border-gray-800 shadow-2xl">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-gray-400 ml-4">genovo@terminal:~$</span>
      </div>

      <div ref={terminalRef} className="h-64 overflow-y-auto mb-4 space-y-1">
        {history.map((line, index) => (
          <div key={index} className={line.startsWith("$") ? "text-blue-400" : "text-green-400 whitespace-pre-line"}>
            {line}
          </div>
        ))}
        {isTyping && (
          <div className="text-green-400">
            <span className="animate-pulse">Processing...</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <span className="text-blue-400">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-green-400"
          placeholder="Enter command..."
        />
        <span className="text-green-400 animate-pulse">█</span>
      </form>
    </div>
  )
}
