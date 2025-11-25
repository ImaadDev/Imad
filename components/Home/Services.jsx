'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Layers, 
    Zap, 
    Database, 
    Code, 
    Cpu, 
    Globe, 
    ArrowUpRight,
    Terminal 
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Services() {
    const pathname = usePathname();
    const isArabic = pathname?.startsWith("/ar");

    const services = [
        {
            id: "01",
            title: isArabic ? "هندسة النظام" : "FULL_STACK ARCHITECTURE",
            tag: "MERN_STACK_V.2",
            description: isArabic 
                ? "بناء تطبيقات ويب معقدة وقابلة للتوسع. من تصميم قواعد البيانات إلى واجهات المستخدم التفاعلية."
                : "End-to-end development of scalable web applications. From database modeling to frontend implementation using Next.js & Node.",
            specs: ["React / Next.js", "Node / Express", "PostgreSQL / Mongo"],
            icon: Layers
        },
        {
            id: "02",
            title: isArabic ? "واجهات تفاعلية" : "UI/UX ENGINEERING",
            tag: "INTERACTION_DESIGN",
            description: isArabic
                ? "إنشاء تجارب مستخدم غامرة وسلسة مع التركيز على الأداء والحركة."
                : "Crafting immersive user experiences with a focus on micro-interactions, accessibility, and fluid motion.",
            specs: ["Framer Motion", "Tailwind CSS", "WebGL / Three.js"],
            icon: Zap
        },
        {
            id: "03",
            title: isArabic ? "أنظمة SaaS" : "SAAS PLATFORMS",
            tag: "MULTI_TENANT_SYS",
            description: isArabic
                ? "تطوير منصات البرمجيات كخدمة مع أنظمة دفع وإدارة مستخدمين متقدمة."
                : "Building sophisticated multi-tenant platforms with role-based access, stripe integration, and real-time data.",
            specs: ["Authentication", "Stripe Connect", "Real-time Sockets"],
            icon: Database
        },
        {
            id: "04",
            title: isArabic ? "تحسين الأداء" : "PERFORMANCE OPS",
            tag: "SYSTEM_OPTIMIZATION",
            description: isArabic
                ? "تسريع أوقات التحميل وتحسين محركات البحث لضمان أقصى قدر من الكفاءة."
                : "Auditing and optimizing application speed, Core Web Vitals, and server response times for maximum efficiency.",
            specs: ["Lighthouse 100", "Server Actions", "Caching Strat"],
            icon: Cpu
        }
    ];

    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section id="services" className="bg-[#050505] text-white min-h-screen relative border-b border-zinc-800">
            
            {/* 1. Header Area with Decorative Grid */}
            <div className="relative border-b border-zinc-800 bg-[#050505] z-10">
                <div className="max-w-[1800px] mx-auto px-4 md:px-8 py-16 md:py-24">
                    <div className="flex items-start justify-between">
                        <div>
                            <span className="font-mono text-cyan-500 text-xs tracking-widest mb-4 block">
                                // {isArabic ? "خدماتنا" : "CAPABILITIES_INDEX"}
                            </span>
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                                {isArabic ? "الحلول" : "TECHNICAL"}<br />
                                <span className="text-zinc-500">{isArabic ? "التقنية" : "SERVICES"}</span>
                            </h2>
                        </div>
                        {/* Decorative Icon */}
                        <div className="hidden md:block">
                            <Cpu size={64} strokeWidth={1} className="text-zinc-800" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Split Screen Layout */}
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
                
                {/* LEFT: Service List (Menu) */}
                <div className="lg:col-span-5 border-r border-zinc-800">
                    {services.map((service) => (
                        <div 
                            key={service.id}
                            onMouseEnter={() => setActiveService(service)}
                            className={`
                                group relative border-b border-zinc-800 cursor-pointer transition-all duration-300
                                ${activeService.id === service.id ? 'bg-white text-black' : 'bg-[#050505] hover:bg-zinc-900'}
                            `}
                        >
                            <div className="p-8 md:p-10 flex flex-col gap-4 relative z-10">
                                <div className="flex justify-between items-start">
                                    <span className={`font-mono text-xs tracking-widest ${activeService.id === service.id ? 'text-black/60' : 'text-cyan-500'}`}>
                                        {service.id}
                                    </span>
                                    <ArrowUpRight 
                                        className={`transition-transform duration-300 ${activeService.id === service.id ? 'rotate-45' : 'opacity-0 group-hover:opacity-100'}`} 
                                        size={20} 
                                    />
                                </div>
                                <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
                                    {service.title}
                                </h3>
                                <p className={`font-mono text-xs uppercase ${activeService.id === service.id ? 'text-black/60' : 'text-zinc-600'}`}>
                                    [{service.tag}]
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT: Visual Preview (Sticky) */}
                <div className="hidden lg:flex lg:col-span-7 bg-[#080808] relative overflow-hidden flex-col justify-center items-center">
                    
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 opacity-20" 
                        style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    </div>

                    <div className="relative w-full h-full p-20 flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                {/* Large Icon Schematic */}
                                <div className="mb-12 relative inline-block">
                                    <activeService.icon size={120} strokeWidth={1} className="text-cyan-400" />
                                    {/* Decoration rings */}
                                    <div className="absolute -inset-8 border border-zinc-800 border-dashed animate-[spin_10s_linear_infinite]"></div>
                                    <div className="absolute -inset-4 border border-zinc-700"></div>
                                </div>

                                <h4 className="text-4xl font-black uppercase tracking-tight mb-6 text-white">
                                    {activeService.title}
                                </h4>
                                
                                <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mb-12 border-l-2 border-cyan-500 pl-6">
                                    {serviceDescription(activeService.description)}
                                </p>

                                {/* Tech Specs Grid */}
                                <div className="grid grid-cols-3 gap-4 border-t border-zinc-800 pt-8">
                                    {activeService.specs.map((spec, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <Terminal size={14} className="text-cyan-500" />
                                            <span className="font-mono text-xs text-white uppercase tracking-wider">{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Corner Decorative Elements for "Screen" feel */}
                        <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-zinc-700"></div>
                        <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-zinc-700"></div>
                        <div className="absolute bottom-10 left-10 font-mono text-xs text-zinc-600">
                            SYS_DISPLAY_MODE // PREVIEW
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper to highlight important words (Optional, adds nice touch)
function serviceDescription(text) {
    return text;
}