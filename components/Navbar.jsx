"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Globe, Zap } from 'lucide-react';
import Image from 'next/image';
// Removed Next.js dependencies (usePathname, useRouter, Link, Image)

/**
 * Custom hook to simulate usePathname by reading window.location.pathname.
 */
const usePathnameSimulation = () => {
    const [pathname, setPathname] = useState('/');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPathname(window.location.pathname || '/');
        }
    }, []);

    return pathname;
};

// --- LOCALIZED CONTENT STRUCTURE ---
const content = {
    en: {
        logoText: "IMAD.KHAN", // Changed key to logoText for clarity, value is fixed
        toggle: "AR",
        menuText: "MENU",
        closeText: "CLOSE",
        currentStatus: "CURRENT_STATUS",
        statusText: "Building digital ecosystems that bridge function and aesthetics.",
        freelance: "AVAILABLE FOR FREELANCE",
        location: "BASED IN WORLDWIDE",
        version: "SYSTEM VER. 2.5",
        navLinks: [
            { name: 'ABOUT', href: '/en/about' },
            { name: 'PROJECTS', href: '#projects' },
            { name: 'BLOGS', href: '/en/blogs' },
            { name: 'CONTACT', href: '/en/contact' },
            { name: 'EXPERIENCE', href: '#experience' },
            
            
        ]
    },
    ar: {
        logoText: "عماد خان", // Changed key to logoText for clarity, value is fixed
        toggle: "EN",
        menuText: "القائمة",
        closeText: "إغلاق",
        currentStatus: "الحالة الحالية",
        statusText: "بناء أنظمة رقمية تجمع بين الوظيفة والجماليات.",
        freelance: "متاح للعمل الحر",
        location: "مقرها في جميع أنحاء العالم",
        version: "إصدار النظام 2.5",
        navLinks: [
            { name: 'عني', href: '/ar/about' },
            { name: 'المشاريع', href: '#projects' },
            { name: 'مقالات', href: '/ar/blogs' },
            { name: 'تواصل', href: '/ar/contact' },
            { name: 'الخبرات', href: '#experience' },
            
            
        ]
    }
};

export default function ArchitecturalNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");
    const pathname = usePathnameSimulation();
    const isArabic = pathname.startsWith("/ar");
    // Removed [scrolled] state as it was unused in the provided logic

    const t = isArabic ? content.ar : content.en;

    // System Time Logic
    const updateTime = useCallback(() => {
        const now = new Date();
        setTime(now.toLocaleTimeString('sv', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, []);

    useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 1000);
        
        // Removed scroll listener as it depended on unused state
        return () => clearInterval(interval);
    }, [updateTime]);

    // --- FIX: Language Toggle using URL navigation ---
    const toggleLanguage = () => {
        const newLocale = isArabic ? "en" : "ar";
        const hasLocalePrefix = /^\/(en|ar)/.test(pathname);
        let newPath;
        if (hasLocalePrefix) {
            newPath = pathname.replace(/^\/(en|ar)/, `/${newLocale}`);
        } else {
            newPath = `/${newLocale}${pathname}`;
        }
        window.location.href = newPath;
    };

    // --- UPDATED: Logo Placeholder (Using placeholder image URL) ---
    const LogoPlaceholder = () => (
        <a
            href={`/${isArabic ? 'ar' : 'en'}`} // Link to current locale root
            className="group flex items-center"
        >
            {/* Placeholder Image simulating the Imaadlogo.png (120x32, Cyan text on Dark background) */}
            <Image
                src="/Imaadlogo.png"
                alt="IMAD.KHAN Developer Logo"
                width={120} 
                height={32}
                // Styling maintained from original code
                className="hidden md:block transition-opacity opacity-80 group-hover:opacity-100 rounded-sm" 
            />
             {/* Mobile Fallback: Use stylized text on small screens */}
             <span className="md:hidden text-xl font-extrabold text-white tracking-widest uppercase flex items-center gap-1">
                <Zap size={16} className="text-cyan-400/80" />
                {t.logoText}
            </span>
        </a>
    );

    return (
        <div dir={isArabic ? 'rtl' : 'ltr'} className="text-white">
            {/* 1. FIXED NAVBAR HEADER (THE HUD) */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between relative">
                    
                    {/* LEFT: Logo Placeholder (Now a stylized text logo) */}
                    <div className="relative z-50 group flex items-center">
                        <LogoPlaceholder />
                    </div>
                    
                    {/* RIGHT: Language Toggle + Menu Trigger */}
                    <div className="flex items-center gap-6 relative z-50">
                        
                        {/* Language Toggle */}
                        <button 
                            onClick={toggleLanguage}
                            className="group flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
                        >
                            <Globe size={14} className="text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
                            <span className="text-[10px] font-bold font-mono tracking-widest">{t.toggle}</span>
                        </button>

                        {/* UNIFIED MENU TRIGGER (CONTROLS THE OVERLAY) */}
                        <button
                            className={`flex items-end gap-3 group pl-4 border-l border-white/20 ${isArabic ? 'flex-row-reverse pl-0 pr-4 border-l-0 border-r' : ''}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="font-mono text-xs font-bold text-white hidden md:block group-hover:text-cyan-400 transition-colors">
                                {isOpen ? t.closeText : t.menuText}
                            </span>
                            <div className={`flex flex-col gap-1.5 w-8 ${isArabic ? 'order-first' : ''}`}>
                                <motion.div
                                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                                    className="w-full h-0.5 bg-white origin-center transition-colors group-hover:bg-cyan-400"
                                />
                                <motion.div
                                    animate={{ opacity: isOpen ? 0 : 1 }}
                                    className="w-full h-0.5 bg-white transition-colors group-hover:bg-cyan-400"
                                />
                                <motion.div
                                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                                    className="w-full h-0.5 bg-white origin-center transition-colors group-hover:bg-cyan-400"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* 2. FULL SCREEN MENU OVERLAY (APPEARS ON CLICK) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        // Animation direction adjusted based on language
                        initial={{ x: isArabic ? "100%" : "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: isArabic ? "100%" : "-100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col pt-20"
                        dir={isArabic ? 'rtl' : 'ltr'}
                    >
                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                            style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                        </div>

                        {/* Menu Content (Links, Manifesto, Footer) */}
                        <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 h-full lg:h-auto items-center">

                                {/* Navigation Links */}
                                <div className={`flex flex-col gap-2 ${isArabic ? 'lg:order-2' : ''}`}>
                                    {t.navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            // Animation direction adjusted based on language
                                            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: isArabic ? 50 : -50 }}
                                            transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                                            className={`group flex items-center gap-6 py-2 lg:py-4 ${isArabic ? 'justify-end' : ''}`}
                                        >
                                            <span className={`font-mono text-sm text-cyan-400 transition-opacity duration-300 ${isArabic ? 'order-2' : ''}`}>
                                                0{index + 1}
                                            </span>
                                            <span className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent text-stroke-white hover:text-white transition-all duration-300 tracking-tighter leading-none">
                                                {link.name}
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Info / Manifesto */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className={`hidden lg:flex flex-col justify-center border-white/10 h-1/2 ${isArabic ? 'lg:border-r pr-12 text-right lg:order-1' : 'lg:border-l pl-12 text-left'}`}
                                >
                                    <p className="font-mono text-cyan-400 mb-4 text-sm">// {t.currentStatus}</p>
                                    <h3 className="text-3xl font-bold text-white mb-6">
                                        {t.statusText}
                                    </h3>
                                    <div className="space-y-4 font-mono text-sm text-gray-400">
                                        <p>{t.freelance}</p>
                                        <p>{t.location}</p>
                                        <p>{t.version}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                       {/* FOOTER CLOCK */}
                       <div className="w-full flex justify-center py-4 border-t border-white/10">
                            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/50">
                                <Clock size={12} className="text-cyan-400" />
                                <span>SYSTEM TIME: {time}</span>
                            </div>
                        </div>
           
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global CSS for the text-stroke effect */}
            <style jsx global>{`
                .text-stroke-white {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.5);
                    color: transparent;
                }
                .text-stroke-white:hover {
                    -webkit-text-stroke: 0px;
                    color: #fff;
                }
                .rtl { direction: rtl; }
                .ltr { direction: ltr; }
            `}</style>
        </div>
    );
}