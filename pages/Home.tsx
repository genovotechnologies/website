import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [profileRequest, setProfileRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Genovo Technologies | Foundational Rails for Deep Engineering";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Highly optimized systems, unbreakable execution guardrails, and deterministic data validation via Synthos, SCOS, and Asphallea.'
    );
  }, []);

  // Custom requestAnimationFrame fade system for video loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animFrameId: number;
    let isFadingIn = true;
    let isFadingOut = false;
    let fadeStartTime: number | null = null;
    const FADE_DURATION = 500; // 500ms
    let isWaitingForReset = false;

    const resetAndPlay = () => {
      if (isWaitingForReset) return;
      isWaitingForReset = true;
      if (video) {
        video.style.opacity = '0';
      }
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                fadeStartTime = performance.now();
                isFadingIn = true;
                isFadingOut = false;
                isWaitingForReset = false;
              })
              .catch(() => {
                isWaitingForReset = false;
              });
          } else {
            fadeStartTime = performance.now();
            isFadingIn = true;
            isFadingOut = false;
            isWaitingForReset = false;
          }
        }
      }, 100);
    };

    const checkVideoLoop = (now: number) => {
      if (!video) return;

      const duration = video.duration;
      const currentTime = video.currentTime;

      if (duration && duration > 0 && !isWaitingForReset) {
        if (currentTime >= duration - 0.55 && !isFadingOut) {
          isFadingOut = true;
          isFadingIn = false;
          fadeStartTime = now;
        }

        if (isFadingIn && fadeStartTime !== null) {
          const elapsed = now - fadeStartTime;
          const progress = Math.min(elapsed / FADE_DURATION, 1);
          video.style.opacity = progress.toString();
          if (progress >= 1) {
            isFadingIn = false;
            fadeStartTime = null;
          }
        }

        if (isFadingOut && fadeStartTime !== null) {
          const elapsed = now - fadeStartTime;
          const progress = Math.min(elapsed / FADE_DURATION, 1);
          video.style.opacity = (1 - progress).toString();
          if (progress >= 1 || currentTime >= duration - 0.05 || video.ended) {
            resetAndPlay();
          }
        } else if (video.ended) {
          resetAndPlay();
        }
      }

      animFrameId = requestAnimationFrame(checkVideoLoop);
    };

    video.style.opacity = '0';

    const handleCanPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
      fadeStartTime = performance.now();
      isFadingIn = true;
      isFadingOut = false;
    };

    video.addEventListener('loadeddata', handleCanPlay);
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    animFrameId = requestAnimationFrame(checkVideoLoop);

    return () => {
      cancelAnimationFrame(animFrameId);
      if (video) {
        video.removeEventListener('loadeddata', handleCanPlay);
      }
    };
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (profileRequest) {
      setSubmitted(true);
      try {
        const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "9921c6c9-a27a-4b57-9782-f8cb86b95444";
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            request: profileRequest,
            from_name: 'Genovo Home Hero Request',
            subject: `Execution Profile Request: ${profileRequest}`,
          }),
        });
      } catch (err) {
        console.error(err);
      }
      setTimeout(() => setSubmitted(false), 5000);
      setProfileRequest('');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const corePlatforms = [
    {
      id: 'synthos',
      name: 'Synthos',
      category: 'Dataset Validation Engine',
      path: '/products/synthos',
      description: 'Entropic validation engine eliminating statistical pipeline drift across deep computation architectures.',
      github: 'https://github.com/genovotechnologies',
    },
    {
      id: 'scos',
      name: 'SCOS',
      category: 'Industrial Systems OS',
      path: '/products/scos',
      description: 'Bare-metal microkernel hypervisor built for city-scale autonomy, robotics, and sub-millisecond interrupts.',
      github: 'https://github.com/genovotechnologies',
    },
    {
      id: 'asphallea',
      name: 'Asphallea',
      category: 'Execution Policy Guardrails',
      path: '/products/asphallea',
      description: 'Zero-trust security utility enforcing capability boundaries, syscall containment, and tool guardrails.',
      github: 'https://github.com/Asphallea/Asphallea',
      live: 'https://asphallea.vercel.app',
    },
  ];

  return (
    <div className="relative w-full bg-[#050505] text-white overflow-hidden min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden px-6">
        {/* Background Video */}
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
          muted
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 translate-y-[17%] pointer-events-none"
        />

        {/* Ambient Dark Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/40 to-[#050505] z-0 pointer-events-none" />

        {/* Foreground Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center max-w-[760px] mx-auto -translate-y-[10%]"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold tracking-tight leading-[1.05] text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
          >
            Foundational Rails for Deep Engineering.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-[660px] mb-10"
          >
            Highly optimized systems, unbreakable execution guardrails, and deterministic data validation via Synthos, SCOS, and Asphallea.
          </motion.p>

          {/* CTA Email Container */}
          <motion.div variants={itemVariants} className="w-full max-w-[480px]">
            {submitted ? (
              <div className="liquid-glass rounded-full px-6 py-4 text-emerald-400 text-sm font-medium text-center shadow-xl">
                ✓ Execution profile request transmitted.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="liquid-glass rounded-full p-1.5 flex items-center w-full shadow-2xl group transition-all"
              >
                <input
                  type="text"
                  value={profileRequest}
                  onChange={(e) => setProfileRequest(e.target.value)}
                  placeholder="Request execution profile..."
                  className="bg-transparent border-none outline-none text-white placeholder-white/50 px-5 py-3 text-sm flex-grow font-body w-full"
                  required
                />
                <button
                  type="submit"
                  className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 hover:scale-105 transition-all duration-200 shrink-0 shadow-md"
                  aria-label="Submit Request"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* CORE PLATFORMS (CLEAN APPLE EDITORIAL LAYOUT) */}
      <section className="relative z-10 max-w-[1280px] mx-auto px-6 py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7342E2] block mb-3">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Determinism & Security
            </h2>
          </div>
          <a
            href="https://github.com/genovotechnologies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors py-2"
          >
            <Github size={16} /> Access Repositories <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Floating Editorial Columns (Zero Icon Badges) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {corePlatforms.map((platform, idx) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col justify-between py-6 group"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/50 block mb-3">
                  {platform.category}
                </span>

                <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-[#7342E2] transition-colors">
                  {platform.name}
                </h3>

                <p className="text-white/70 text-base font-body leading-relaxed mb-8">
                  {platform.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={platform.path}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 group-hover:text-white transition-colors"
                >
                  Technical Specs <ArrowRight size={14} />
                </Link>

                <a
                  href={platform.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors p-1"
                  aria-label={`${platform.name} GitHub Repository`}
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SYNTHOS & ASPHALLEA FEATURED BANNER */}
      <section className="relative z-10 max-w-[1280px] mx-auto px-6 mb-28">
        <div className="floating-panel p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7342E2]/15 text-[#7342E2] text-xs font-semibold uppercase tracking-wider mb-6">
              Deterministic Guardrails
            </span>
            <h3 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              Synthos & Asphallea Security Engine
            </h3>
            <p className="text-white/70 text-base sm:text-lg font-body leading-relaxed mb-8">
              Combining entropic dataset validation with zero-trust execution guardrails. Preventing structural pipeline drift and securing tool execution across distributed environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.synthos.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-xl"
              >
                Visit synthos.dev <ArrowUpRight size={16} />
              </a>
              <a
                href="https://asphallea.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm hover:bg-white/10 transition-all border border-white/10"
              >
                Visit asphallea.vercel.app <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
