import React, { useEffect, useState, useRef } from 'react';
import { 
  Maximize2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  FolderKanban, 
  GitPullRequest, 
  Layers, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database
} from 'lucide-react';

const ClickUp: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'deck' | 'guide'>('deck');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    document.title = "ClickUp Enablement & Onboarding | Genovo Technologies";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "Genovo Technologies internal ClickUp onboarding and enablement guide for engineering teams, labs, and operations."
      );
    }
  }, []);

  const handleToggleFullscreen = () => {
    if (!iframeRef.current) return;
    if (!document.fullscreenElement) {
      iframeRef.current.requestFullscreen().catch(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().catch(() => {
        setIsFullscreen(false);
      });
    }
  };

  const deckUrl = `${import.meta.env.BASE_URL || '/'}clickup.html`;

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 md:pt-40 pb-24">
      {/* Header Banner */}
      <div className="max-w-[1280px] mx-auto px-6 mb-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff5722] text-xs font-semibold uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Workspace Operations</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('deck')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'deck'
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
              }`}
            >
              Interactive Deck
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'guide'
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
              }`}
            >
              Engineering Reference
            </button>
            <a
              href={deckUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass px-4 py-2 rounded-full text-xs font-semibold text-white inline-flex items-center gap-1.5 hover:bg-white/10 transition-all"
            >
              Open Direct <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <h1 className="font-heading text-4xl md:text-7xl font-bold tracking-tight text-white mb-4 uppercase">
          ClickUp <span className="text-[#ff5722]">Enablement</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 font-body max-w-3xl leading-relaxed">
          The single source of truth for engineering velocity, sprint alignment, and cross-discipline visibility across Synthos, SCOS, Asphallea, and R&amp;D Labs.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-6">
        {activeTab === 'deck' ? (
          <div className="flex flex-col gap-6">
            {/* Interactive Presentation Deck Frame */}
            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl backdrop-blur-xl">
              {/* Top Controls Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/10 text-xs text-white/60">
                <div className="flex items-center gap-2 font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5722] animate-pulse" />
                  <span className="text-white font-medium">GENOVO CLICKUP ONBOARDING DECK</span>
                  <span className="hidden sm:inline text-white/40">// Use Arrow keys, swipe, or click to navigate</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleToggleFullscreen}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                  >
                    <Maximize2 size={13} />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </button>
                </div>
              </div>

              {/* Iframe Viewport */}
              <div className="relative w-full h-[600px] md:h-[780px] bg-neutral-900">
                <iframe
                  ref={iframeRef}
                  src={deckUrl}
                  title="Genovo ClickUp Onboarding Deck"
                  className="w-full h-full border-0"
                  allow="fullscreen"
                />
              </div>
            </div>

            {/* Quick Navigation Hint */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-sm text-white/60 font-body">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#ff5722]" />
                <span>Need a quick breakdown? Switch to the <strong>Engineering Reference</strong> tab above.</span>
              </div>
              <button
                onClick={() => setActiveTab('guide')}
                className="text-[#ff5722] hover:underline font-semibold text-xs uppercase tracking-wider flex items-center gap-1"
              >
                View Reference Guide <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ) : (
          /* Engineering Reference Tab */
          <div className="flex flex-col gap-12">
            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center text-[#ff5722] mb-4">
                    <Cpu size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">Core Systems</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    SCOS kernel releases, TosinLang compiler milestones, and EPOCH VCS infrastructure.
                  </p>
                </div>
                <div className="font-mono text-[11px] text-[#ff5722] bg-[#ff5722]/10 px-2.5 py-1 rounded w-fit">
                  Space: [CORE-SYS]
                </div>
              </div>

              <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <Database size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">Validation Engine</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Synthos streaming drift validation, benchmark suites, and entropic data tests.
                  </p>
                </div>
                <div className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded w-fit">
                  Space: [SYNTHOS]
                </div>
              </div>

              <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">Security &amp; Policy</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Asphallea runtime guardrails, deterministic AST security policies, and zero-trust rules.
                  </p>
                </div>
                <div className="font-mono text-[11px] text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded w-fit">
                  Space: [ASPHALLEA]
                </div>
              </div>

              <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                    <Layers size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">R&amp;D Innovation</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    Aether IoT compute, Quantum Lattice cryptography, and Silicon Soul research.
                  </p>
                </div>
                <div className="font-mono text-[11px] text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded w-fit">
                  Space: [GEN-LABS]
                </div>
              </div>
            </div>

            {/* Practical Conventions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Task Naming & Structure */}
              <div className="liquid-glass rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white">
                    <FolderKanban size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">Task Blueprint &amp; Naming</h3>
                    <p className="text-xs text-white/50">Standards for clear, searchable tasks</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-sm text-white/80 leading-relaxed font-body">
                  <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs">
                    <div className="text-white/50 mb-1">// Convention:</div>
                    <div className="text-[#ff5722] font-semibold">[SPACE-CODE] Verb + Specific Component + Expected Outcome</div>
                    <div className="text-white/40 mt-2">// Examples:</div>
                    <div className="text-white/80">• [SCOS-102] Refactor microkernel IRQ dispatch table for sub-40ns latency</div>
                    <div className="text-white/80">• [SYN-044] Implement streaming parquet entropic drift validator</div>
                    <div className="text-white/80">• [ASPH-210] Add zero-trust eBPF syscall filter for network egress</div>
                  </div>

                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Single DRI:</strong> Assign one primary owner to avoid ambiguity in execution.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Acceptance Criteria:</strong> Clearly bullet what "Done" means before starting work.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Milestone Timing:</strong> Assign tasks to active Sprint sprints with explicit due dates.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* GitHub & PR Integration */}
              <div className="liquid-glass rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-white/10 text-white">
                    <GitPullRequest size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">GitHub PR &amp; Commit Linking</h3>
                    <p className="text-xs text-white/50">Automatic trace from code commit to roadmap</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-sm text-white/80 leading-relaxed font-body">
                  <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs">
                    <div className="text-white/50 mb-1">// Git Branch &amp; Commit Format:</div>
                    <div className="text-emerald-400">git checkout -b feat/scos-102-irq-dispatch</div>
                    <div className="text-white/80 mt-1">git commit -m "feat(scos): optimize IRQ dispatch latency [SCOS-102]"</div>
                  </div>

                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#ff5722] flex-shrink-0 mt-0.5" />
                      <span><strong>PR Description:</strong> Include the ClickUp task link in all GitHub Pull Requests.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#ff5722] flex-shrink-0 mt-0.5" />
                      <span><strong>Status Progression:</strong> Move tasks from <em>In Progress</em> → <em>In Review (PR)</em> → <em>Verified</em> → <em>Closed</em>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-[#ff5722] flex-shrink-0 mt-0.5" />
                      <span><strong>Async Blocker Flag:</strong> Tag leads directly in task comments when external dependencies block code merges.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Back to Interactive Deck CTA */}
            <div className="liquid-glass rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Ready to view the slide presentation?</h3>
                <p className="text-white/70 text-sm">Review the high-level onboarding deck with keyboard navigation and interactive steps.</p>
              </div>
              <button
                onClick={() => setActiveTab('deck')}
                className="px-8 py-3.5 rounded-full bg-[#ff5722] text-white text-sm font-semibold hover:bg-[#ff5722]/90 transition-all flex-shrink-0 shadow-lg shadow-[#ff5722]/20"
              >
                Switch to Slide Deck
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClickUp;
