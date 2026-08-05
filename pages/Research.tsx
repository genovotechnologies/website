import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Server, Code, ArrowUpRight, Github, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Research: React.FC = () => {
  useEffect(() => {
    document.title = "Research & Engineering Assets | Genovo Technologies";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      "Explore Genovo's internal engineering assets, legacy migration tools, automated SRE agents, and core systems infrastructure."
    );
  }, []);

  const internalAssets = [
    {
      id: 'cobol-to-go',
      title: 'COBOL-to-Go Migration Tool',
      tag: 'Modernization Utility',
      description: 'A high-precision modernization utility designed to parse, analyze, and translate legacy enterprise COBOL infrastructure directly into idiomatic, concurrent Go codebases.',
      specs: ['AST Transformation', 'Go Target', 'Zero-downtime Transpilation'],
      github: 'https://github.com/genovotechnologies',
      icon: Code,
    },
    {
      id: 'sre-agent',
      title: 'SRE Agent',
      tag: 'Autonomous Systems Ops',
      description: 'An automated site reliability engineering tool for managing real-time system operations, telemetry anomaly detection, and self-healing infrastructure performance.',
      specs: ['eBPF Telemetry', 'Autonomous Mitigation', 'gRPC Control Plane'],
      github: 'https://github.com/genovotechnologies',
      icon: Server,
    },
  ];

  const associatedSystems = [
    {
      id: 'asphallea',
      title: 'Asphallea',
      tag: 'Security Infrastructure',
      description: 'A security utility designed to enforce execution policies, capability boundaries, and deterministic guardrails around runtime tools.',
      specs: ['AST Policy Engine', '<5μs Syscall Check', 'eBPF Sandbox'],
      github: 'https://github.com/genovotechnologies',
      link: '/products/asphallea',
      icon: Shield,
    },
    {
      id: 'epoch-vcs',
      title: 'EPOCH VCS',
      tag: 'Distributed Version Control',
      description: 'A next-generation distributed version control system built with C++ and Rust that leverages Merkle DAGs for petabyte-scale diffing.',
      specs: ['C++ / Rust Core', 'Merkle DAG Structure', '10GB/s Checkout'],
      github: 'https://github.com/genovotechnologies',
      icon: GitBranch,
    },
    {
      id: 'tocinlang',
      title: 'TocinLang',
      tag: 'Systems Programming Language',
      description: 'A high-performance systems programming language featuring a custom hand-written lexer and parser targeting LLVM IR.',
      specs: ['Custom Lexer/Parser', 'LLVM IR Target', 'Zero-cost C Interop'],
      github: 'https://github.com/genovotechnologies',
      icon: Terminal,
    },
    {
      id: 'tosinos',
      title: 'TosinOS',
      tag: 'Operating System Kernel',
      description: 'A 32-bit protected-mode monolithic operating system kernel utilizing x86 Assembly and C with custom virtual memory management.',
      specs: ['x86 Assembly / C', 'Protected Mode', 'Custom VMM & Scheduler'],
      github: 'https://github.com/genovotechnologies',
      icon: Cpu,
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-28 pb-24">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 mb-24">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7342E2] block mb-3">
          Research & Systems Directory
        </span>
        <h1 className="font-heading text-5xl md:text-8xl font-bold tracking-tight leading-none text-white mb-6">
          ENGINEERING ASSETS <br /> & ASSOCIATED SYSTEMS
        </h1>
        <p className="text-xl text-white/70 font-body max-w-2xl leading-relaxed">
          Proprietary infrastructure utilities, compiler toolchains, legacy translation engines, and deterministic security guardrails developed by Genovo Technologies.
        </p>
      </div>

      {/* Section 1: Internal Engineering Assets */}
      <div className="max-w-[1280px] mx-auto px-6 mb-28">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2 h-2 rounded-full bg-[#7342E2] animate-pulse" />
          <h2 className="text-xs font-bold tracking-[0.25em] text-white/50 uppercase">
            01 // INTERNAL ENGINEERING ASSETS
          </h2>
        </div>

        <div className="space-y-4">
          {internalAssets.map((asset, idx) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="editorial-row flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1 max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/80">
                    <asset.icon size={18} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                    {asset.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                  {asset.title}
                </h3>
                <p className="text-white/70 text-sm font-body leading-relaxed mb-4">
                  {asset.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {asset.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={asset.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors"
                >
                  <Github size={16} /> Repository <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 2: Associated Systems & Security Infrastructure */}
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <h2 className="text-xs font-bold tracking-[0.25em] text-white/50 uppercase">
            02 // ASSOCIATED SYSTEMS & SECURITY INFRASTRUCTURE
          </h2>
        </div>

        <div className="space-y-4">
          {associatedSystems.map((system, idx) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="editorial-row flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1 max-w-3xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#7342E2]">
                    <system.icon size={18} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
                    {system.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                  {system.title}
                </h3>
                <p className="text-white/70 text-sm font-body leading-relaxed mb-4">
                  {system.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {system.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {system.link && (
                  <Link
                    to={system.link}
                    className="text-xs font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    Specifications
                  </Link>
                )}
                <a
                  href={system.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors"
                >
                  <Github size={16} /> Repository <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
