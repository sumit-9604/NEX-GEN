"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Flame, Sparkles, TrendingUp, BookOpen, Award } from "lucide-react";
import { useRef, useCallback, useState, useEffect } from "react";
import CircularText from "./CircularText";

const spring = { type: "spring", stiffness: 300, damping: 22 } as const;

export function HeroTile({ name, streak }: { name: string; streak: number }) {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(300);
  const mouseY = useMotionValue(120);
  const [radius, setRadius] = useState(40);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateRadius = () => {
      setRadius(window.innerWidth < 640 ? 28 : 40);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const spotlight = useMotionTemplate`radial-gradient(
    380px circle at ${mouseX}px ${mouseY}px,
    rgba(59,130,246,0.15),
    transparent 65%
  )`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(300);
    mouseY.set(120);
  }, [mouseX, mouseY]);

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, ...spring }}
      className="relative overflow-hidden rounded-2xl glass p-6 md:p-8 min-h-[220px]"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: spotlight }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, ...spring }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="p-1 rounded-md bg-blue-500/20 text-blue-400">
              <BookOpen className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-bold text-sky-300 tracking-wider uppercase">
              Dashboard Overview
            </span>
          </motion.div>

          <div className="flex items-center gap-4">
            {isMounted && (
              <div className="scale-75 sm:scale-100 origin-left flex-shrink-0">
                <CircularText
                  text="NEXLEARN • EXPLORE • "
                  radius={radius}
                  spinDuration={22}
                  onHover="speedUp"
                  className="text-sky-300 font-semibold"
                />
              </div>
            )}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, ...spring }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 30%, rgba(96,165,250,0.9) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Welcome back, {name} 👋
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, ...spring }}
                className="text-white/60 text-sm sm:text-base max-w-md"
              >
                You've completed 78% of your weekly learning target. Keep up the momentum!
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, ...spring }}
            className="flex flex-wrap items-center gap-3 mt-5"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-amber-300">
                Top 15% this week
              </span>
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse flex-shrink-0" />
            </div>

            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Award className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-sky-300">
                ⚡ 24,850 XP Earned
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.26, ...spring }}
          whileHover={{ scale: 1.04 }}
          className="flex-shrink-0 flex flex-col items-center justify-center p-5 rounded-2xl glass border border-orange-500/30 bg-gradient-to-b from-orange-500/10 to-transparent min-w-[140px]"
        >
          <motion.div
            animate={{ y: [0, -4, 0], scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Flame className="w-8 h-8 text-orange-400 drop-shadow-[0_0_12px_rgba(251,146,60,0.6)]" />
          </motion.div>
          <span className="text-3xl font-black text-orange-400 leading-none tabular-nums mt-2">
            {streak}
          </span>
          <span className="text-xs font-bold text-orange-300/80 uppercase tracking-widest mt-1">
            Day Streak
          </span>
        </motion.div>
      </div>
    </motion.article>
  );
}
