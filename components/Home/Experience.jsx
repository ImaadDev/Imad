'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Terminal, Calendar, Code, ChevronRight, Briefcase } from 'lucide-react';

// --- Experience Data ---
const experienceData = [
  {
    id: 1,
    title: { en: "Full Stack Web Developer", ar: "مطور ويب متكامل" },
    company: { en: "Creativemark | Riyadh, KSA", ar: "كرييتف مارك | الرياض، السعودية" },
    dates: { en: "08/2025 - Present", ar: "08/2025 - الحاضر" },
    keyStack: ["Next.js", "Node.js", "MongoDB", "Docker"],
    responsibilities: {
      en: [
        "Built scalable dashboards using Next.js, Node.js, and MongoDB for 1K+ active users.",
        "Implemented JWT-based authentication and optimized MongoDB queries.",
        "Automated deployments using Docker and GitHub Actions."
      ],
      ar: [
        "بناء لوحات تحكم قابلة للتوسع باستخدام Next.js و Node.js لأكثر من 1000 مستخدم.",
        "تنفيذ المصادقة المستندة إلى JWT وتحسين استعلامات MongoDB.",
        "أتمتة عمليات النشر باستخدام Docker و GitHub Actions."
      ]
    }
  },
  {
    id: 2,
    title: { en: "Full Stack Web Developer", ar: "مطور ويب متكامل" },
    company: { en: "Eccentric Technologies | Riyadh, KSA", ar: "إكسنتريك تكنولوجيز | الرياض، السعودية" },
    dates: { en: "08/2022 - 11/2024", ar: "08/2022 - 11/2024" },
    keyStack: ["React.js", "Express", "Docker"],
    responsibilities: {
      en: [
        "Developed web apps using React.js / Next.js, improving page load speed by 20%.",
        "Integrated REST APIs with Node.js & Express, increasing data reliability.",
        "Built Tailwind CSS UI components, speeding up UI development by 35%."
      ],
      ar: [
        "تطوير تطبيقات الويب باستخدام React.js / Next.js، وتحسين السرعة بنسبة 20%.",
        "دمج واجهات برمجة التطبيقات REST مع Node.js & Express.",
        "بناء مكونات واجهة المستخدم Tailwind CSS لتسريع التطوير."
      ]
    }
  },
  {
    id: 3,
    title: { en: "Full Stack Web Developer", ar: "مطور ويب متكامل" },
    company: { en: "Mazhar Enterprises | Peshawar, PK", ar: "مشاريع مظهر | بيشاور، باكستان" },
    dates: { en: "02/2020 - 06/2022", ar: "02/2020 - 06/2022" },
    keyStack: ["React.js", "MongoDB", "Tailwind"],
    responsibilities: {
      en: [
        "Delivered 10+ production-level web apps increasing user engagement by 30%.",
        "Built secure REST APIs using Node.js + MongoDB.",
        "Implemented code splitting & lazy loading for performance."
      ],
      ar: [
        "تسليم أكثر من 10 تطبيقات ويب بمستوى الإنتاج وزيادة التفاعل بنسبة 30%.",
        "بناء واجهات برمجة تطبيقات REST آمنة باستخدام Node.js.",
        "تنفيذ تقسيم الكود والتحميل الكسول لتحسين الأداء."
      ]
    }
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);
  const containerRef = useRef(null);
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // --- Optimized Scroll Physics ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Parallax Header: Moves slower than scroll to create depth, fades out
  const headerY = useTransform(scrollYProgress, [0, 0.2], ['0%', '50%']);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Content Reveal: slides up over the header
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="relative bg-[#0a0a0a] text-white min-h-[200vh]" // Reduced height for better scroll feel
    >

      {/* --- 1. Creative Sticky Header (Parallax) --- */}
      <motion.div 
        style={{ y: headerY, opacity: headerOpacity }}
        className="sticky top-0 left-0 right-0 h-screen flex items-center justify-center z-0 pointer-events-none overflow-hidden"
      >
        <div className="relative w-full text-center">
            {/* Background Grid for Tech Feel */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
            
            <h2 className="text-[12vw] md:text-[15vw] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 leading-none select-none">
                {isArabic ? "الخبرات" : "CAREER"}
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4 text-cyan-400 font-mono text-sm tracking-[0.5em] uppercase">
                <span className="w-12 h-[1px] bg-cyan-400"></span>
                {isArabic ? "سجل النظام" : "SYSTEM_LOG_V2.0"}
                <span className="w-12 h-[1px] bg-cyan-400"></span>
            </div>
        </div>
      </motion.div>


      {/* --- 2. Scroll Spacer --- */}
      {/* Removed spacer because sticky header occupies space now */}


      {/* --- 3. The Data Feed (Main Content) --- */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 pb-24"
      >
        {/* Header Bar */}
        <div className="bg-[#0a0a0a]/90 backdrop-blur-md border-y border-white/20 py-4 mb-12 sticky top-20 z-20 flex justify-between items-center px-4">
            <span className="font-mono text-xs text-gray-400 flex items-center gap-2">
                <Terminal size={14} className="text-cyan-400" />
                {isArabic ? "المسار المهني" : "EXECUTION_PATH"}
            </span>
            <span className="font-mono text-xs text-cyan-400 animate-pulse">
                ● {isArabic ? "متصل" : "LIVE"}
            </span>
        </div>

        {/* The Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-8 md:pl-12 space-y-8">
            
            {experienceData.map((job) => {
                const isActive = expandedId === job.id;
                
                return (
                    <motion.div 
                        key={job.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                    >
                        {/* Timeline Connector Dot */}
                        <div className={`absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 bg-[#0a0a0a] border transition-colors duration-300 z-10 flex items-center justify-center
                            ${isActive ? 'border-cyan-400' : 'border-white/20 group-hover:border-white'}`}
                        >
                            <div className={`w-2 h-2 transition-all duration-300 ${isActive ? 'bg-cyan-400' : 'bg-white/20 group-hover:bg-white'}`} />
                        </div>

                        {/* Job Card (The Cartridge) */}
                        <div 
                            onClick={() => toggleAccordion(job.id)}
                            className={`relative border transition-all duration-300 cursor-pointer overflow-hidden
                                ${isActive 
                                    ? 'bg-white/5 border-cyan-400' 
                                    : 'bg-black/50 border-white/10 hover:border-white/40 hover:bg-white/5'
                                }`}
                        >
                            {/* Card Header */}
                            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-start justify-between relative z-10">
                                
                                {/* Left: Role & Company */}
                                <div className="space-y-2 flex-1">
                                    <h3 className={`text-2xl md:text-3xl font-black uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-200'}`}>
                                        {job.title[isArabic ? 'ar' : 'en']}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm font-mono text-cyan-400">
                                        <Briefcase size={14} />
                                        {job.company[isArabic ? 'ar' : 'en']}
                                    </div>
                                </div>

                                {/* Right: Date & Expand Icon */}
                                <div className="flex items-center justify-between md:flex-col md:items-end gap-4">
                                    <div className="flex items-center gap-2 font-mono text-xs text-gray-500 border border-white/10 px-3 py-1 bg-black">
                                        <Calendar size={12} />
                                        {job.dates[isArabic ? 'ar' : 'en']}
                                    </div>
                                    <motion.div 
                                        animate={{ rotate: isActive ? 90 : 0 }}
                                        className={`p-2 border transition-colors ${isActive ? 'border-cyan-400 text-cyan-400' : 'border-white/20 text-gray-500'}`}
                                    >
                                        <ChevronRight size={16} />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Card Body (Accordion) */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }} // Fast & Smooth
                                        className="overflow-hidden bg-black/40 border-t border-white/10"
                                    >
                                        <div className="p-6 md:p-8 pt-4">
                                            
                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {job.keyStack.map(tech => (
                                                    <span key={tech} className="text-[10px] font-bold uppercase px-2 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Responsibilities */}
                                            <div className="space-y-3">
                                                {job.responsibilities[isArabic ? 'ar' : 'en'].map((resp, idx) => (
                                                    <div key={idx} className="flex gap-3 text-sm text-gray-300 font-mono leading-relaxed group/item hover:text-white transition-colors">
                                                        <span className="text-cyan-400/50 mt-1">
                                                            <Code size={12} />
                                                        </span>
                                                        {resp}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Hover Glitch Line (Decoration) */}
                            <div className={`absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-out
                                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>

        {/* Footer Data Block */}
        <div className="mt-20 border-t border-white/20 pt-8 flex justify-between items-end">
            <div className="text-xs font-mono text-gray-500">
                <p>TOTAL_YEARS: 05+</p>
                <p>STATUS: SENIOR_LEVEL</p>
            </div>
            <a href="#contact" className="px-6 py-3 bg-white text-black font-bold text-xs uppercase hover:bg-cyan-400 transition-colors">
                {isArabic ? "تحميل السيرة الذاتية" : "DOWNLOAD CV_FILE"}
            </a>
        </div>

      </motion.div>
    </section>
  );
}