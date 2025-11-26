'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Terminal, Cpu, Globe, Zap, Layers, Hash } from 'lucide-react';

// --- CONTENT CONFIGURATION ---
const content = {
    en: {
        nav: { status: "SYSTEM ONLINE", location: "RIYADH, KSA", toggle: "AR" },
        hero: {
            greeting: "HELLO, I AM",
            name: "IMAD",
            surname: "KHAN",
            role: "FULL STACK ENGINEER",
            description: "Architecting digital ecosystems with MERN & Next.js. I build scalable, high-performance web applications that drive real business value.",
            cta: "EXPLORE SYSTEM"
        },
        stats: [
            { label: "YEARS EXP", value: "04+" },
            { label: "PROJECTS", value: "25+" },
            { label: "UPTIME", value: "99.9%" },
        ],
        sections: {
            exp: "01 // EXPERIENCE LOGS",
            skills: "02 // TECH ARSENAL",
            lang: "03 // LANGUAGE DATA"
        },
        experience: [
            {
                id: "01",
                company: "CREATIVEMARK",
                role: "FULL STACK DEVELOPER",
                date: "PRESENT",
                desc: "Spearheading the development of high-performance analytics dashboards for 1,000+ active users. Achieved 25% faster API responses via advanced JWT authentication & MongoDB indexing strategies.",
                tech: ["React", "Node.js", "MongoDB", "Redis"]
            },
            {
                id: "02",
                company: "ECCENTRIC TECH",
                role: "BACKEND SPECIALIST",
                date: "2022 — 2024",
                desc: "Engineered robust REST APIs ensuring 99% uptime. Accelerated core page load speeds by 20% through Next.js server-side rendering and reduced deployment failures by 30% using Docker containerization.",
                tech: ["Next.js", "Docker", "AWS", "CI/CD"]
            },
            {
                id: "03",
                company: "MAZHAR ENT.",
                role: "WEB DEVELOPER",
                date: "2020 — 2022",
                desc: "Delivered 10+ production-grade applications. Implemented lazy-loading architectures that boosted user engagement by 30% and improved overall site performance metrics significantly.",
                tech: ["MERN", "Redux", "SaaS"]
            },
        ],
        skills: {
            categories: [
                { title: "CORE STACK", items: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript"] },
                { title: "DEVOPS & CLOUD", items: ["Docker", "AWS EC2", "AWS S3", "GitHub Actions", "Vercel", "Nginx"] },
                { title: "ARCHITECTURE", items: ["Microservices", "REST API", "GraphQL", "System Design", "Clean Arch"] }
            ]
        },
        languages: [
            { name: "English", level: "Fluent / C2", code: "EN" },
            { name: "Urdu", level: "Native", code: "UR" },
            { name: "Pashto", level: "Native", code: "PS" },
            { name: "Arabic", level: "Basic", code: "AR" },
        ]
    },
    ar: {
        nav: { status: "النظام يعمل", location: "الرياض، السعودية", toggle: "EN" },
        hero: {
            greeting: "مرحباً، أنا",
            name: "عماد",
            surname: "حسين",
            role: "مهندس برمجيات",
            description: "أقوم ببناء أنظمة رقمية باستخدام MERN و Next.js. تطبيقات ويب عالية الأداء وقابلة للتوسع تحقق قيمة فعلية للأعمال.",
            cta: "استكشف النظام"
        },
        stats: [
            { label: "سنوات خبرة", value: "+04" },
            { label: "مشاريع", value: "+25" },
            { label: "جاهزية", value: "99.9%" },
        ],
        sections: {
            exp: "01 // سجل الخبرات",
            skills: "02 // الترسانة التقنية",
            lang: "03 // بيانات اللغة"
        },
        experience: [
            {
                id: "01",
                company: "كريتيف مارك",
                role: "مطور ويب متكامل",
                date: "حالياً",
                desc: "قيادة تطوير لوحات تحليل بيانات لأكثر من 1000 مستخدم. تحسين استجابة API بنسبة 25% عبر تقنيات المصادقة وفهرسة قواعد البيانات.",
                tech: ["React", "Node.js", "MongoDB", "Redis"]
            },
            {
                id: "02",
                company: "إكسنتريك تك",
                role: "مطور خلفية",
                date: "2022 — 2024",
                desc: "هندسة واجهات برمجة تطبيقات موثوقة بنسبة 99%. تسريع تحميل الصفحات بنسبة 20% عبر Next.js وتقليل أخطاء النشر بنسبة 30% باستخدام Docker.",
                tech: ["Next.js", "Docker", "AWS", "CI/CD"]
            },
            {
                id: "03",
                company: "مشاريع مظهر",
                role: "مطور ويب",
                date: "2020 — 2022",
                desc: "تسليم أكثر من 10 تطبيقات إنتاجية. تطبيق معماريات التحميل الكسول مما زاد تفاعل المستخدمين بنسبة 30%.",
                tech: ["MERN", "Redux", "SaaS"]
            },
        ],
        skills: {
            categories: [
                { title: "التقنيات الأساسية", items: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript"] },
                { title: "العمليات والسحابة", items: ["Docker", "AWS EC2", "AWS S3", "GitHub Actions", "Vercel", "Nginx"] },
                { title: "هيكلية الأنظمة", items: ["Microservices", "REST API", "GraphQL", "System Design", "Clean Arch"] }
            ]
        },
        languages: [
            { name: "الإنجليزية", level: "بطلاقة / C2", code: "EN" },
            { name: "الأردية", level: "لغة أم", code: "UR" },
            { name: "الباشتو", level: "لغة أم", code: "PS" },
            { name: "العربية", level: "أساسي", code: "AR" },
        ]
    }
};

export default function ArchitectPortfolio() {
    const [lang, setLang] = useState('en');
    const [hoveredExp, setHoveredExp] = useState(0); // Default to first item active
    
    const t = content[lang];
    const isRTL = lang === 'ar';
    const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

    return (
        <div className={`min-h-screen bg-[#030303] text-[#e5e5e5] font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* --- BACKGROUND FX --- */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            

            <main className="relative z-10 pt-32 pb-20 px-4 md:px-12 max-w-[1600px] mx-auto">
                
                {/* --- HERO SECTION --- */}
                <section className="mb-32 md:mb-48">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Greeting and Horizontal Rule: Adjusted for RTL */}
                        <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <span className="h-[1px] w-12 bg-cyan-500/50"></span>
                            <span className="text-cyan-400 font-mono text-xs tracking-[0.2em]">{t.hero.greeting}</span>
                        </div>

                        <h1 className="text-[14vw] md:text-[11vw] leading-[0.8] font-black tracking-tighter mix-blend-screen text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 select-none">
                            {t.hero.name}<br/>
                            <span className="text-cyan-500/90 outline-text">{t.hero.surname}</span>.
                        </h1>
                    </motion.div>

                    <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                        <div className="md:col-span-7">
                             <div className="h-[1px] w-full bg-white/10 mb-8"></div>
                             <div className="flex justify-between items-end">
                                 {t.stats.map((stat, i) => (
                                     <div key={i} className="flex flex-col">
                                         <span className="text-[10px] font-mono text-gray-500 tracking-widest mb-1">{stat.label}</span>
                                         <span className="text-2xl md:text-4xl font-light tracking-tighter">{stat.value}</span>
                                     </div>
                                 ))}
                             </div>
                        </div>

                        <div className="md:col-span-5 relative">
                            {/* Description: Adjusted for RTL text alignment */}
                            <p className={`text-lg md:text-xl text-gray-400 leading-relaxed font-light ${isRTL ? 'text-right' : 'text-left'}`}>
                                {t.hero.description}
                            </p>
                            <div className="mt-8 flex items-center gap-2 text-cyan-400">
                                <Terminal size={16} />
                                <span className="font-mono text-xs tracking-widest animate-pulse">_READY_TO_DEPLOY</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- INTERACTIVE EXPERIENCE --- */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12 opacity-50">
                        <Hash size={16} />
                        <h2 className="font-mono text-xs tracking-[0.2em]">{t.sections.exp}</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-white/10">
                        
                        {/* LIST COLUMN: Border adjusted for RTL */}
                        <div className={`lg:col-span-5 ${isRTL ? 'lg:border-l border-r-0' : 'lg:border-r'} border-white/0 lg:border-white/10`}>
                            {t.experience.map((job, index) => (
                                <div 
                                    key={job.id}
                                    onMouseEnter={() => setHoveredExp(index)}
                                    className={`
                                        group relative p-6 md:p-10 border-b border-white/10 cursor-pointer transition-all duration-300
                                        ${hoveredExp === index ? 'bg-white/5' : 'hover:bg-white/[0.02]'}
                                    `}
                                >
                                    {/* Active Bar: Position adjusted for RTL */}
                                    <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 bottom-0 w-[2px] bg-cyan-500 transition-all duration-300 ${hoveredExp === index ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}></div>
                                    
                                    <span className={`font-mono text-[10px] text-gray-500 mb-2 block ${isRTL ? 'text-right' : 'text-left'}`}>{job.date}</span>
                                    <h3 className={`text-2xl md:text-3xl font-bold uppercase transition-colors ${hoveredExp === index ? 'text-white' : 'text-gray-500'} ${isRTL ? 'text-right' : 'text-left'}`}>
                                        {job.company}
                                    </h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs font-mono text-cyan-400 tracking-wider opacity-80">{job.role}</span>
                                        {/* Arrow direction reversed for RTL visual flow */}
                                        <ArrowUpRight size={18} className={`transform transition-transform duration-300 ${isRTL ? 'rotate-180' : ''} ${hoveredExp === index ? 'translate-x-1 -translate-y-1 text-cyan-400' : 'text-gray-600'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* DETAIL PREVIEW COLUMN (Sticky) */}
                        <div className="lg:col-span-7 relative bg-[#080808] p-8 md:p-12 min-h-[400px] flex flex-col justify-center border-b border-white/10 lg:border-b-0">
                            {/* Grid decoration */}
                            <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} text-white/5`}>
                                <Cpu size={120} strokeWidth={0.5} />
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={hoveredExp}
                                    initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10"
                                >
                                    <div className={`mb-6 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                                        <div className="w-1.5 h-1.5 bg-cyan-500"></div>
                                        <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">
                                            {t.experience[hoveredExp].role}
                                        </span>
                                    </div>
                                    
                                    {/* Description: Adjusted for RTL text alignment */}
                                    <p className={`text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                                        {t.experience[hoveredExp].desc}
                                    </p>

                                    {/* Tech Tags: Adjusted for RTL flow */}
                                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                                        {t.experience[hoveredExp].tech.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest uppercase text-gray-400">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* --- SKILLS GRID --- */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12 opacity-50">
                        <Layers size={16} />
                        <h2 className="font-mono text-xs tracking-[0.2em]">{t.sections.skills}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {t.skills.categories.map((cat, i) => (
                            <div key={i} className="bg-[#050505] border border-white/10 p-8 hover:border-cyan-500/30 transition-colors duration-500 group">
                                <div className="mb-6 pb-4 border-b border-white/5 group-hover:border-cyan-500/20 transition-colors">
                                    <h3 className={`font-mono text-xs text-cyan-400 tracking-widest mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>0{i+1}</h3>
                                    <h4 className={`text-xl font-bold uppercase ${isRTL ? 'text-right' : 'text-left'}`}>{cat.title}</h4>
                                </div>
                                <div className={`flex flex-wrap gap-x-2 gap-y-3 ${isRTL ? 'justify-end' : ''}`}>
                                    {cat.items.map((item, j) => (
                                        <span key={j} className={`text-sm text-gray-400 group-hover:text-white transition-colors duration-300 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                            <span className="w-1 h-1 bg-gray-700 group-hover:bg-cyan-400 rounded-full transition-colors"></span>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- LANGUAGES --- */}
                <section>
                     <div className="flex items-center gap-4 mb-12 opacity-50">
                        <Globe size={16} />
                        <h2 className="font-mono text-xs tracking-[0.2em]">{t.sections.lang}</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border-t border-l border-white/10">
                        {t.languages.map((lang, i) => (
                            <div key={i} className="border-r border-b border-white/10 p-6 md:p-8 hover:bg-white/5 transition-colors duration-300">
                                {/* Adjusted for RTL text alignment */}
                                <div className={`text-3xl md:text-5xl font-black text-white/10 mb-2 select-none ${isRTL ? 'text-right' : 'text-left'}`}>{lang.code}</div>
                                <div className={`text-lg font-bold mb-1 ${isRTL ? 'text-right' : 'text-left'}`}>{lang.name}</div>
                                <div className={`text-[10px] font-mono text-cyan-500 tracking-widest uppercase ${isRTL ? 'text-right' : 'text-left'}`}>{lang.level}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FOOTER --- */}
                <footer className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
                    <p className="font-mono text-[10px] tracking-widest">DESIGNED BY IMAD.KHAN</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <p className="font-mono text-[10px] tracking-widest">ALL SYSTEMS OPERATIONAL</p>
                    </div>
                </footer>

            </main>

            <style jsx global>{`
                .outline-text {
                    -webkit-text-stroke: 1px rgba(6, 182, 212, 0.5);
                    color: transparent;
                }
                .rtl { direction: rtl; }
                .ltr { direction: ltr; }
            `}</style>
        </div>
    );
}