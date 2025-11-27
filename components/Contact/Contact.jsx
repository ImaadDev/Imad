'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, MapPin, Mail, Smartphone, Github, Linkedin, ArrowRight } from 'lucide-react';

// --- CONFIGURATION ---
const config = {
    email: "kimad1728@gmail.com", // [cite: 3]
    phone: "+966-573672733", // [cite: 3]
    location: "Riyadh, Saudi Arabia", // [cite: 3]
    socials: [
    { name: "GitHub", url: "https://github.com/ImaadDev" }, // [cite: 6]
    { name: "LinkedIn", url: "https://www.linkedin.com/in/imad-hussain-khan-76388b305" } // [cite: 4]
    ]
};

const content = {
    en: {
        title: "INITIATE UPLINK",
        subtitle: "TRANSMISSION TERMINAL // V.1.0",
        form: {
            name: "IDENTIFIER / NAME",
            email: "RETURN ADDRESS / EMAIL",
            subject: "SUBJECT LINE",
            message: "DATA PACKET / MESSAGE",
            btn: "TRANSMIT DATA",
            sending: "TRANSMITTING...",
            sent: "TRANSMISSION SUCCESSFUL"
        },
        info: {
            emailLabel: "DIRECT FREQUENCY",
            locLabel: "COORDINATES",
            status: "OPERATIONAL",
            copy: "CLICK TO COPY",
            copied: "COPIED TO CLIPBOARD"
        }
    },
    ar: {
        title: "بدء الاتصال",
        subtitle: "محطة الإرسال // الإصدار 1.0",
        form: {
            name: "المعرف / الاسم",
            email: "عنوان الرد / البريد",
            subject: "الموضوع",
            message: "حزمة البيانات / الرسالة",
            btn: "إرسال البيانات",
            sending: "جاري الإرسال...",
            sent: "تم الإرسال بنجاح"
        },
        info: {
            emailLabel: "التردد المباشر",
            locLabel: "الإحداثيات",
            status: "نشط",
            copy: "اضغط للنسخ",
            copied: "تم النسخ للحافظة"
        }
    }
};

const usePathnameSimulation = () => {
    const [pathname, setPathname] = useState('/');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setPathname(window.location.pathname || '/');
        }
    }, []);
    return pathname;
};

export default function ContactTerminal() {
    const pathname = usePathnameSimulation();
    const isArabic = pathname.startsWith("/ar");
    const t = isArabic ? content.ar : content.en;
    const isRTL = isArabic;

    const [copied, setCopied] = useState(false);
    const [formStatus, setFormStatus] = useState('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Handle Copy to Clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(config.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: `${formData.subject}\n\n${formData.message}`
                }),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setFormStatus('idle'); // Reset to allow retry
        }
    };

    return (
        <div className={`min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-cyan-500 selection:text-black overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            
            {/* --- STATIC NOISE OVERLAY --- */}
            <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <main className="relative z-10 pt-24 md:pt-32 pb-12 px-4 md:px-8 max-w-[1800px] mx-auto min-h-screen flex flex-col">
                
                {/* --- HEADER --- */}
                <motion.header 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 border-b border-white/10 pb-6 flex justify-between items-end"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                             <div className="w-2 h-2 bg-cyan-500 animate-pulse"></div>
                             <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase">{t.subtitle}</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            {t.title}
                        </h1>
                    </div>
                </motion.header>

                <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-white/10">
                    
                    {/* --- LEFT: INFO TERMINAL --- */}
                    <div className={`border-b lg:border-b-0 border-white/10 py-12 ${isRTL ? 'lg:border-l pl-0 lg:pl-12' : 'lg:border-r pr-0 lg:pr-12'}`}>
                        
                        {/* 1. MASSIVE EMAIL INTERACTION */}
                        <div className="mb-16 group cursor-pointer" onClick={handleCopy}>
                            <label className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 block group-hover:text-cyan-400 transition-colors">
                                {t.info.emailLabel}
                            </label>
                            <div className="relative overflow-hidden">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase break-all leading-[0.9] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-300">
                                    {config.email}
                                </h2>
                                {/* Copy Feedback Overlay */}
                                <AnimatePresence>
                                    {copied && (
                                        <motion.div 
                                            initial={{ y: "100%" }}
                                            animate={{ y: "0%" }}
                                            exit={{ y: "-100%" }}
                                            className="absolute inset-0 bg-cyan-500 flex items-center justify-center"
                                        >
                                            <span className="text-black font-bold text-xl md:text-3xl tracking-tighter uppercase flex items-center gap-2">
                                                <Check size={24} strokeWidth={4} /> {t.info.copied}
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-gray-600 font-mono text-xs group-hover:text-white transition-colors">
                                <Copy size={12} />
                                <span>{t.info.copy}</span>
                            </div>
                        </div>

                        {/* 2. SECONDARY INFO GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Location */}
                            <div>
                                <label className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 block flex items-center gap-2">
                                    <MapPin size={12} /> {t.info.locLabel}
                                </label>
                                <p className="text-2xl font-bold uppercase border-l-2 border-white/20 pl-4">
                                    {config.location}
                                </p>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4 block flex items-center gap-2">
                                    <Smartphone size={12} /> PHONE
                                </label>
                                <p className="text-2xl font-bold uppercase border-l-2 border-white/20 pl-4 font-mono">
                                    {config.phone}
                                </p>
                            </div>
                        </div>

                        {/* 3. SOCIAL LINKS (Big Block Buttons) */}
                        <div className="mt-16 grid grid-cols-2 gap-1">
                            {config.socials.map((social, idx) => (
                                <a 
                                    key={idx} 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="h-24 border border-white/10 flex flex-col justify-between p-4 hover:bg-white hover:text-black transition-colors duration-300 group"
                                >
                                    <ArrowRight size={20} className={`self-end opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'rotate-180' : ''}`} />
                                    <span className="font-black text-xl uppercase tracking-tighter">{social.name}</span>
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* --- RIGHT: FORM TRANSMISSION --- */}
                    <div className={`py-12 ${isRTL ? 'lg:pr-12' : 'lg:pl-12'}`}>
                        <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-12">
                            
                            {/* Inputs */}
                            <div className="space-y-12">
                                {[
                                    { label: t.form.name, type: "text", name: "name" },
                                    { label: t.form.email, type: "email", name: "email" },
                                    { label: t.form.subject, type: "text", name: "subject" }
                                ].map((field, i) => (
                                    <div key={i} className="group relative">
                                        <label className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-cyan-400 transition-colors">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-bold text-white outline-none focus:border-cyan-500 transition-colors rounded-none placeholder-transparent"
                                        />
                                    </div>
                                ))}

                                <div className="group relative">
                                    <label className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-cyan-400 transition-colors">
                                        {t.form.message}
                                    </label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl font-bold text-white outline-none focus:border-cyan-500 transition-colors rounded-none resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={formStatus !== 'idle'}
                                className="w-full py-8 bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300 group relative overflow-hidden"
                            >
                                <span className="relative z-10 font-black text-xl tracking-[0.2em] flex items-center justify-center gap-4">
                                    {formStatus === 'idle' && (
                                        <>
                                            {t.form.btn} <Send size={20} className={isRTL ? 'rotate-180' : ''} />
                                        </>
                                    )}
                                    {formStatus === 'sending' && t.form.sending}
                                    {formStatus === 'success' && t.form.sent}
                                </span>
                            </button>
                        </form>
                    </div>

                </div>

            </main>

            <style jsx global>{`
                .rtl { direction: rtl; }
                .ltr { direction: ltr; }
                input:-webkit-autofill,
                input:-webkit-autofill:hover, 
                input:-webkit-autofill:focus, 
                textarea:-webkit-autofill,
                textarea:-webkit-autofill:hover,
                textarea:-webkit-autofill:focus {
                    -webkit-text-fill-color: white;
                    -webkit-box-shadow: 0 0 0px 1000px #050505 inset;
                    transition: background-color 5000s ease-in-out 0s;
                }
            `}</style>
        </div>
    );
}