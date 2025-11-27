'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

// --- CONTENT DATA (Bilingual) ---
const content = {
    en: {
        title: "PRIVACY POLICY",
        lastUpdated: "LAST UPDATED",
        intro: "Welcome to Imad Khan Portfolio (https://www.imadkhan.online). Your privacy is extremely important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.",
        sections: [
            {
                title: "Information We Collect",
                id: "info-collect",
                content: [
                    "**a. Personal Information:** Name, Email address, and message content (only if submitted via contact forms).",
                    "**b. Automatically Collected:** IP address, Device type, Browser type, Pages visited, Time spent, and Referring URLs.",
                    "**Collection Methods:** Cookies, Google Analytics, Advertising cookies."
                ]
            },
            {
                title: "How We Use Data",
                id: "use-data",
                content: [
                    "Improving website performance and user experience.",
                    "Understanding user behavior analytics.",
                    "Responding to contact form inquiries.",
                    "Showing personalized ads (via Google AdSense)."
                ]
            },
            {
                title: "Cookies & Tracking",
                id: "cookies",
                content: [
                    "We use cookies to analyze traffic and display personalized ads.",
                    "**Google AdSense Cookies:** Google uses the DoubleClick cookie to show ads based on your visit history.",
                    "Users can opt out of personalized advertising through Google Ads settings."
                ]
            },
            {
                title: "Google AdSense",
                id: "adsense",
                content: [
                    "We use Google AdSense to serve advertisements.",
                    "Google may use Cookies, Web beacons, and third-party scripts.",
                    "These technologies allow Google and partners to serve ads based on your visits to this and other sites."
                ]
            },
            {
                title: "Third-Party Links",
                id: "links",
                content: [
                    "Our website may contain external links (blogs, tutorials, social media).",
                    "We are not responsible for the content or privacy practices of these external sites."
                ]
            },
            {
                title: "Data Security",
                id: "security",
                content: [
                    "We use secure technologies to protect your information.",
                    "However, no method of transmission over the Internet is 100% secure."
                ]
            },
            {
                title: "Your Rights",
                id: "rights",
                content: [
                    "Access your data.",
                    "Request deletion of your data.",
                    "Opt out of cookies and personalized ads."
                ]
            },
            {
                title: "Children's Privacy",
                id: "children",
                content: [
                    "This website is not intended for children under 13.",
                    "We do not knowingly collect personal information from children."
                ]
            },
            {
                title: "Changes to Policy",
                id: "changes",
                content: [
                    "We may update this policy anytime.",
                    "The latest version will always be posted on this page."
                ]
            }
        ],
        contact: {
            title: "Contact Us",
            text: "If you have any questions about this Privacy Policy:",
            emailLabel: "Email",
            webLabel: "Website"
        }
    },
    ar: {
        title: "سياسة الخصوصية",
        lastUpdated: "آخر تحديث",
        intro: "مرحباً بكم في محفظة عماد خان (https://www.imadkhan.online). خصوصيتكم مهمة جداً بالنسبة لنا. تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتكم عند زيارة موقعنا.",
        sections: [
            {
                title: "المعلومات التي نجمعها",
                id: "info-collect",
                content: [
                    "**أ. معلومات شخصية:** الاسم، البريد الإلكتروني، ومحتوى الرسالة (فقط في حال الإرسال عبر نماذج الاتصال).",
                    "**ب. معلومات تلقائية:** عنوان IP، نوع الجهاز، المتصفح، الصفحات التي تمت زيارتها، ووقت الزيارة.",
                    "**طرق الجمع:** ملفات تعريف الارتباط (Cookies)، تحليلات Google، وملفات تعريف الارتباط الإعلانية."
                ]
            },
            {
                title: "كيف نستخدم المعلومات",
                id: "use-data",
                content: [
                    "تحسين أداء الموقع وتجربة المستخدم.",
                    "فهم وتحليل سلوك المستخدم.",
                    "الرد على رسائل نماذج الاتصال.",
                    "عرض إعلانات مخصصة (عبر Google AdSense)."
                ]
            },
            {
                title: "ملفات تعريف الارتباط",
                id: "cookies",
                content: [
                    "نستخدم ملفات تعريف الارتباط لتحليل حركة المرور وعرض الإعلانات.",
                    "**ملفات تعريف ارتباط Google AdSense:** تستخدم Google ملف تعريف ارتباط DoubleClick لعرض الإعلانات بناءً على سجل زيارتك.",
                    "يمكن للمستخدمين إلغاء الاشتراك في الإعلانات المخصصة من خلال إعدادات إعلانات Google."
                ]
            },
            {
                title: "Google AdSense",
                id: "adsense",
                content: [
                    "نستخدم Google AdSense لعرض الإعلانات على موقعنا.",
                    "قد تستخدم Google ملفات تعريف الارتباط وإشارات الويب والبرامج النصية لأطراف ثالثة.",
                    "تسمح هذه التقنيات لشركة Google وشركائها بعرض الإعلانات بناءً على زياراتك."
                ]
            },
            {
                title: "روابط خارجية",
                id: "links",
                content: [
                    "قد يحتوي موقعنا على روابط خارجية (مدونات، وسائل تواصل اجتماعي).",
                    "نحن لسنا مسؤولين عن المحتوى أو ممارسات الخصوصية لهذه المواقع الخارجية."
                ]
            },
            {
                title: "أمن البيانات",
                id: "security",
                content: [
                    "نستخدم تقنيات آمنة لحماية معلوماتك.",
                    "ومع ذلك، لا توجد وسيلة نقل عبر الإنترنت آمنة بنسبة 100%."
                ]
            },
            {
                title: "حقوقك",
                id: "rights",
                content: [
                    "الوصول إلى بياناتك.",
                    "طلب حذف بياناتك.",
                    "إلغاء الاشتراك في ملفات تعريف الارتباط والإعلانات المخصصة."
                ]
            },
            {
                title: "خصوصية الأطفال",
                id: "children",
                content: [
                    "هذا الموقع غير مخصص للأطفال دون سن 13 عاماً.",
                    "نحن لا نجمع أي معلومات شخصية من الأطفال عن عمد."
                ]
            },
            {
                title: "تغييرات السياسة",
                id: "changes",
                content: [
                    "قد نقوم بتحديث هذه السياسة في أي وقت.",
                    "سيتم نشر أحدث إصدار دائماً على هذه الصفحة."
                ]
            }
        ],
        contact: {
            title: "اتصل بنا",
            text: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه:",
            emailLabel: "البريد الإلكتروني",
            webLabel: "الموقع الإلكتروني"
        }
    }
};

export default function PrivacyPolicy() {
    const pathname = usePathname();
    const isArabic = pathname?.startsWith("/ar");
    const t = isArabic ? content.ar : content.en;
    const direction = isArabic ? 'rtl' : 'ltr';
    const today = new Date().toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Variants for stagger animation
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section className="bg-[#050505] text-white min-h-screen selection:bg-cyan-400 selection:text-black overflow-hidden" dir={direction}>
            
            {/* 1. HEADER GRID */}
            <div className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-8 border-b border-zinc-800">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Meta Info Row */}
                        <div className={`flex ${isArabic ? 'flex-row-reverse' : 'flex-row'} justify-between items-center mb-6 font-mono text-xs text-cyan-400 uppercase tracking-widest`}>
                            <span>// LEGAL</span>
                            <span>{t.lastUpdated}: {today}</span>
                        </div>

                        {/* Huge Title */}
                        <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase mb-8">
                            {t.title}
                        </h1>

                        {/* Intro Text */}
                        <p className={`text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed ${isArabic ? 'text-right ml-auto' : 'text-left'}`}>
                            {t.intro}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 2. POLICY CONTENT GRID */}
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    variants={containerVars}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1"
                >
                    {t.sections.map((section, index) => (
                        <motion.div 
                            variants={itemVars}
                            key={index} 
                            className="group grid grid-cols-1 md:grid-cols-12 border-b border-zinc-800 hover:bg-zinc-900 transition-colors duration-300"
                        >
                            {/* Col 1: Index Number */}
                            <div className={`md:col-span-2 p-6 md:p-8 flex items-start ${isArabic ? 'border-l' : 'border-r'} border-zinc-800`}>
                                <span className="font-mono text-xl md:text-2xl text-zinc-600 font-bold group-hover:text-cyan-400 transition-colors">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                            </div>

                            {/* Col 2: Section Title */}
                            <div className={`md:col-span-4 p-6 md:p-8 flex items-start ${isArabic ? 'border-l' : 'border-r'} border-zinc-800`}>
                                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                                    {section.title}
                                </h2>
                            </div>

                            {/* Col 3: Details */}
                            <div className="md:col-span-6 p-6 md:p-8">
                                <ul className="space-y-4">
                                    {section.content.map((line, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            {/* Custom Square Bullet */}
                                            <span className="mt-2 w-1.5 h-1.5 bg-cyan-400 flex-shrink-0"></span>
                                            <span 
                                                className={`text-sm md:text-base text-zinc-400 leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}
                                                // Using simple regex to bold text between ** **
                                                dangerouslySetInnerHTML={{ 
                                                    __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold uppercase">$1</strong>') 
                                                }} 
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* 3. CONTACT FOOTER FOR POLICY */}
            <div className="border-b border-zinc-800 bg-zinc-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
                    
                    {/* Header */}
                    <div className="p-6 md:p-8">
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">
                            {t.contact.title}
                        </h3>
                        <p className="text-zinc-500 font-mono text-xs md:text-sm uppercase">
                            {t.contact.text}
                        </p>
                    </div>

                    {/* Details */}
                    <div className="p-6 md:p-8 flex flex-col justify-center space-y-4">
                        <div className="flex items-center justify-between group cursor-pointer">
                            <span className="font-mono text-xs text-zinc-500 uppercase">{t.contact.emailLabel}</span>
                            {/* Email from CV  */}
                            <a href="mailto:kimad1728@gmail.com" className="text-sm md:text-lg font-bold hover:text-cyan-400 transition-colors">
                                kimad1728@gmail.com
                            </a>
                        </div>
                        <div className="w-full h-[1px] bg-zinc-800"></div>
                        <div className="flex items-center justify-between group cursor-pointer">
                            <span className="font-mono text-xs text-zinc-500 uppercase">{t.contact.webLabel}</span>
                            <a href="https://imadkhan.online" target="_blank" className="text-sm md:text-lg font-bold hover:text-cyan-400 transition-colors">
                                imadkhan.online
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}