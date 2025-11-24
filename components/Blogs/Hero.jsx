'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function BlogsHero() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  return (
    <section className="min-h-screen w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center relative px-4 py-20 selection:bg-white selection:text-black overflow-hidden">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10 text-center">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2
          }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-cyan-400" />
            <span className="font-mono text-cyan-400 text-sm tracking-widest uppercase">
              {isArabic ? "المدونة التقنية" : "TECH BLOG"}
            </span>
            <div className="h-[1px] w-12 bg-cyan-400" />
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-4">
            {isArabic ? "المدونة" : "BLOG"}
          </h1>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6
            }}
          >
            {isArabic ? "التقنية" : "TECHNICAL"}
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.8
          }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
            {isArabic
              ? "استكشف أحدث الاتجاهات في تطوير الويب، البرمجة، والتكنولوجيا. مقالات تقنية مفصلة وتحليلات عميقة لمساعدتك في رحلتك المهنية."
              : "Explore the latest trends in web development, programming, and technology. In-depth technical articles and analysis to help you on your professional journey."
            }
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-gray-500">
            <span className="px-3 py-1 border border-white/20 ">
              {isArabic ? "تطوير الويب" : "Web Development"}
            </span>
            <span className="px-3 py-1 border border-white/20">
              {isArabic ? "برمجة" : "Programming"}
            </span>
            <span className="px-3 py-1 border border-white/20">
              {isArabic ? "تكنولوجيا" : "Technology"}
            </span>
            <span className="px-3 py-1 border border-white/20">
              {isArabic ? "دروس" : "Tutorials"}
            </span>
          </div>
        </motion.div>

      

      </div>
    </section>
  );
}