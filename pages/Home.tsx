import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers, Globe, Shield, Terminal, Zap, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, ARTICLES } from '../constants';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Genovo Technologies | Foundational Rails for Deep Engineering";
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Highly optimized systems, unbreakable execution guardrails, and deterministic data validation via Synthos, Taskr, and SCOS.'
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
        // 1. Check if video reached fade-out trigger point (duration - 0.55s)
        if (currentTime >= duration - 0.55 && !isFadingOut) {
          isFadingOut = true;
          isFadingIn = false;
          fadeStartTime = now;
        }

        // 2. Handle Fade In (0 to 1 over 500ms)
        if (isFadingIn && fadeStartTime !== null) {
          const elapsed = now - fadeStartTime;
          const progress = Math.min(elapsed / FADE_DURATION, 1);
          video.style.opacity = progress.toString();
          if (progress >= 1) {
            isFadingIn = false;
            fadeStartTime = null;
          }
        }

        // 3. Handle Fade Out (1 to 0 over 500ms)
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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
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

  return (
    <div className="relative w-full bg-[#050505] text-white overflow-hidden min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden px-6">
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
            className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] tracking-tight leading-[1.05] text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
          >
            Foundational Rails for Deep Engineering.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-[660px] mb-10"
          >
            Highly optimized systems, unbreakable execution guardrails, and deterministic data validation via Synthos, Taskr, and SCOS.
          </motion.p>

          {/* CTA Email Container */}
          <motion.div variants={itemVariants} className="w-full max-w-[480px]">
            {submitted ? (
              <div className="liquid-glass rounded-full px-6 py-4 text-emerald-400 text-sm font-medium text-center shadow-xl">
                ✓ Thank you. Access request recorded.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="liquid-glass rounded-full p-1.5 flex items-center w-full shadow-2xl group transition-all"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="bg-transparent border-none outline-none text-white placeholder-white/50 px-5 py-3 text-sm flex-grow font-body w-full"
                  required
                />
                <button
                  type="submit"
                  className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 hover:scale-105 transition-all duration-200 shrink-0 shadow-md"
                  aria-label="Submit Email"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURED PLATFORMS SECTION */}
      <section className="relative z-10 max-w-[1280px] mx-auto px-6 py-24 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7342E2] block mb-3">
              Core Systems
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Engineered for Deterministic Execution
            </h2>
          </div>
          <Link
            to="/products"
            className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white/90 hover:text-white inline-flex items-center gap-2 w-fit transition-all"
          >
            Explore All Platforms <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid of Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="liquid-glass rounded-[2rem] p-8 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-500 min-h-[360px]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {product.id === 'synthos' && <Cpu size={24} />}
                  {product.id === 'taskr' && <Globe size={24} />}
                  {product.id === 'scos' && <Layers size={24} />}
                  {product.id === 'tosinlang' && <Terminal size={24} />}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {product.name}
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                    {product.category}
                  </span>
                </div>

                <p className="text-white/70 text-sm font-body leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {product.features.slice(0, 2).map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[10px] text-white/50 px-2 py-0.5 rounded bg-white/5"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {product.id === 'synthos' ? (
                  <a
                    href="https://synthos.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#7342E2] transition-colors p-2"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                ) : (
                  <Link
                    to={`/products/${product.id}`}
                    className="text-white hover:text-[#7342E2] transition-colors p-2"
                  >
                    <ArrowRight size={20} />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SYNTHOS HIGHLIGHT BANNER */}
      <section className="relative z-10 max-w-[1280px] mx-auto px-6 mb-24">
        <div className="liquid-glass rounded-[2.5rem] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Zap size={14} /> Flagship Innovation
            </span>
            <h3 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              SynthOS: Eradicating the $5B Model Collapse Problem
            </h3>
            <p className="text-white/70 text-base sm:text-lg font-body leading-relaxed mb-8">
              Automated synthetic dataset verification and mathematical constraint checking for deep learning models operating in mission-critical environments.
            </p>
            <a
              href="https://synthos.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all shadow-xl hover:scale-105"
            >
              Explore SynthOS <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#7342E2]/30 to-purple-900/10 flex items-center justify-center border border-white/10 shadow-2xl relative">
              <div className="absolute inset-4 rounded-full border border-white/10 animate-spin-slow" />
              <Cpu size={72} className="text-white/90" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
