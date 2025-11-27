'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook, Share2, X } from 'lucide-react';
import {FaWhatsapp} from 'react-icons/fa'

// --- GTM Tracking Function ---
const trackSocialClick = (socialName) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'social_click',
      social_name: socialName,
      event_category: 'engagement',
      event_label: socialName,
    });
    console.log(`GTM Event pushed: social_click - ${socialName}`);
  } else {
    console.log(`GTM not available. Social click: ${socialName}`);
  }
};

// --- Configuration ---
const SOCIAL_LINKS = [
  { icon: Github, nameEn: 'GITHUB', nameAr: 'جيت هاب', url: 'https://github.com/ImaadDev' },
  { icon: Linkedin, nameEn: 'LINKEDIN', nameAr: 'لينكد إن', url: 'https://www.linkedin.com/in/imad-hussain-khan-76388b305' },
  { icon: Instagram, nameEn: 'INSTAGRAM', nameAr: 'انستغرام', url: 'https://www.instagram.com/imaddeveloper?igsh=bXJ4MXB4bmo2djAy' },
  { icon: Facebook, nameEn: 'FACEBOOK', nameAr: 'فيسبوك', url: 'https://www.facebook.com/imad.hussain.khan.2025' },
  // Using MessageSquare from lucide-react as a replacement for FaWhatsapp to resolve build error
  { icon: FaWhatsapp, nameEn: 'WHATSAPP', nameAr: 'واتساب', url: 'https://wa.me/966573672733' },
];

export default function FixedSocialPanel({ isArabic = false }) {

  // State for mobile visibility (hash/x icon)
  // State for large screen visibility (Share2 icon)
  const [isLgOpen, setIsLgOpen] = useState(false);




  // --- LARGE SCREEN DESIGN (Single Toggle with All Links) ---
  const LargeScreenPanel = (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="fixed bottom-0 right-0 z-30 block"
    >
      <div className="flex flex-col border-t border-l border-white/20 bg-[#0a0a0a] backdrop-blur-sm">
        {/* Single Toggle Button */}
        <button
          onClick={() => setIsLgOpen(!isLgOpen)}
          className="flex items-center justify-center h-16 w-16 text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-300 border-b border-white/10"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isLgOpen ? (
              <motion.div key="close" initial={{ rotate: 0 }} animate={{ rotate: 180 }} exit={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="open" initial={{ rotate: 0 }} animate={{ rotate: 0 }} exit={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                <Share2 size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* All Social Links - Always Visible When Open */}
        <AnimatePresence>
          {isLgOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={link.nameEn}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center h-16 w-16 text-white transition-all duration-300 hover:bg-cyan-500/10 border-b border-white/10 last:border-b-0"
                  onClick={() => trackSocialClick(link.nameEn)}
                >
                  <link.icon
                    size={20}
                    className="text-white opacity-80 transition-all duration-300 group-hover:text-cyan-400 group-hover:opacity-100"
                  />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );



  return (
    <>
      {LargeScreenPanel}
    </>
  );
}