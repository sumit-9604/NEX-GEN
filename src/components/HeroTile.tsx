"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Flame, Sparkles, TrendingUp, BookOpen, Award } from "lucide-react";
import { useRef, useCallback } from "react";

const spring = { type: "spring", stiffness: 300, damping: 22 } as const;

export function HeroTile({ name, streak }: { name: string; streak: number }) {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(300);
  const mouseY = useMotionValue(120);

  const spotlight = useMotionTemplate`radial-gradient(
    400px circle at ${mouseX}px ${mouseY}px,
    rgba(27,59,43,0.04),
    transparent 70%
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08, ...spring }}
      className="relative overflow-hidden rounded-xl bg-white border border-[#E5E2D9] p-6 md:p-7 min-h-[200px]"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: spotlight }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex-1 min-w-0">
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, ...spring }}
            className="flex items-center gap-2 mb-2.5"
          >
            <span className="p-1 rounded bg-[#EBF0EC] text-[#1B3B2B]">
              <BookOpen className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-sans font-semibold text-[#1B3B2B] tracking-wider uppercase">
              Academic Dashboard
            </span>
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, ...spring }}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1D1B] leading-tight mb-2"
            >
              Welcome back, {name} 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, ...spring }}
              className="font-sans text-[#5C6058] text-sm sm:text-base max-w-lg leading-relaxed"
            >
              You've completed 78% of your weekly academic target. Keep up the momentum!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, ...spring }}
            className="flex flex-wrap items-center gap-3 mt-4"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FDF6F3] border border-[#FBEBE5] text-[#C85A32]">
              <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold">
                Top 15% this week
              </span>
              <Sparkles className="w-3 h-3 flex-shrink-0" />
            </div>

            <span className="w-1.5 h-1.5 rounded-full bg-[#E5E2D9]" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EBF0EC] border border-[#D9E3DC] text-[#1B3B2B]">
              <Award className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="font-sans text-xs font-semibold">
                24,850 XP Earned
              </span>
            </div>
          </motion.div>
        </div>

        {/* Streak Counter Tile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.26, ...spring }}
          whileHover={{ scale: 1.02 }}
          className="flex-shrink-0 flex flex-col items-center justify-center p-5 rounded-xl bg-[#FDF6F3] border border-[#FBEBE5] min-w-[130px]"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Flame className="w-8 h-8 text-[#C85A32]" />
          </motion.div>
          <span className="font-serif text-3xl font-bold text-[#C85A32] leading-none tabular-nums mt-2">
            {streak}
          </span>
          <span className="font-sans text-[11px] font-bold text-[#C85A32]/80 uppercase tracking-wider mt-1">
            Day Streak
          </span>
        </motion.div>
      </div>
    </motion.article>
  );
}
