'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Ensure Image is imported
import { Clock } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isArabic = pathname?.startsWith("/ar");

  const navLinks = [
    { name: isArabic ? 'عني' : 'ABOUT', href: '#about' },
    { name: isArabic ? 'المشاريع' : 'PROJECTS', href: '#projects' },
    { name: isArabic ? 'الخبرات' : 'EXPERIENCE', href: '#experience' },
    { name: isArabic ? 'تواصل' : 'CONTACT', href: '#contact' },
    { name: isArabic ? 'مقالات' : 'BLOGS', href: isArabic ? '/ar/blogs' : '/en/blogs' }
  ];

  // System Time & Scroll Logic
  const updateTime = useCallback(() => {
    const now = new Date();
    // Use 'sv' locale for standardized time format (HH:MM)
    setTime(now.toLocaleTimeString('sv', { hour12: false, hour: '2-digit', minute: '2-digit' }));
  }, []);

  useEffect(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [updateTime]);

  const toggleLanguage = () => {
    const newLocale = isArabic ? 'en' : 'ar';
    const newPath = pathname.replace(/^\/(en|ar)/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <>
      {/* 1. FIXED NAVBAR HEADER (THE HUD) */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between relative">
          
          {/* LEFT: Logo Image (Updated) */}
          <Link 
            href={isArabic ? '/ar' : '/en'} 
            className="relative z-50 group flex items-center"
          >
            <Image
              src="/Imaadlogo.png"
              alt="IMAD.KHAN Developer Logo"
              width={120} 
              height={32}
              className="hidden md:block transition-opacity opacity-80 group-hover:opacity-100" 
              priority 
            />
          </Link>


          
          {/* RIGHT: Language Toggle + Menu Trigger */}
          <div className="flex items-center gap-6 relative z-50">
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="font-mono text-[10px] sm:text-xs font-bold text-white border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors"
            >
              {isArabic ? 'ENGLISH' : 'العربية'}
            </button>

            {/* UNIFIED MENU TRIGGER (CONTROLS THE OVERLAY) */}
            <button
              className="flex items-end gap-3 group pl-4 border-l border-white/0 md:border-white/20"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-mono text-xs font-bold text-white hidden md:block group-hover:text-cyan-400 transition-colors">
                {isOpen ? (isArabic ? 'إغلاق' : 'CLOSE') : (isArabic ? 'القائمة' : 'MENU')}
              </span>
              <div className="flex flex-col gap-1.5 w-8">
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
            initial={{ y: isArabic ? "100%" : "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: isArabic ? "100%" : "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Menu Content (Links, Manifesto, Footer) */}
            <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 h-full lg:h-auto items-center">

                {/* LEFT: The Navigation Links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, [isArabic ? 'x' : 'x']: isArabic ? 50 : -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, [isArabic ? 'x' : 'x']: isArabic ? 50 : -50 }}
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

                {/* RIGHT: Info / Manifesto */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`hidden lg:flex flex-col justify-center border-l lg:border-r-0 border-white/10 ${isArabic ? 'lg:border-r pr-12 text-right' : 'pl-12 text-left'} h-1/2`}
                >
                  <p className="font-mono text-cyan-400 mb-4 text-sm">// {isArabic ? 'الحالة الحالية' : 'CURRENT_STATUS'}</p>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {isArabic
                      ? 'بناء تجارب رقمية تجمع بين الوظيفة والجماليات.'
                      : 'Building digital experiences that bridge function and aesthetics.'}
                  </h3>
                  <div className="space-y-4 font-mono text-sm text-gray-400">
                    <p>{isArabic ? 'متاح للعمل الحر' : 'AVAILABLE FOR FREELANCE'}</p>
                    <p>{isArabic ? 'مقرها في جميع أنحاء العالم' : 'BASED IN WORLDWIDE'}</p>
                    <p>{isArabic ? 'إصدار النظام 2.5' : 'SYSTEM VER. 2.5'}</p>
                  </div>
                </motion.div>
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
      `}</style>
    </>
  );
}