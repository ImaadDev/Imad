'use client';

import { motion } from 'framer-motion';
import {
    Cpu, Server, Database, Container, LayoutGrid,
    Lock, Cloud, Aperture, Smartphone, IterationCcw,
    Layers, Code, Shield, Globe, Terminal, Zap
} from 'lucide-react';
import { usePathname } from 'next/navigation';

// Split skills into two logical rows for visual balance
const ROW_1 = [
    { name: "NEXT.JS", category: "FRAMEWORK", Icon: Cpu, color: "text-white" },
    { name: "REACT.JS", category: "LIBRARY", Icon: Code, color: "text-cyan-400" },
    { name: "TAILWIND", category: "STYLING", Icon: LayoutGrid, color: "text-teal-400" },
    { name: "TYPESCRIPT", category: "LANGUAGE", Icon: Terminal, color: "text-blue-400" },
    { name: "REACT NATIVE", category: "MOBILE", Icon: Smartphone, color: "text-purple-400" },
    { name: "FRAMER", category: "ANIMATION", Icon: Zap, color: "text-yellow-400" },
];

const ROW_2 = [
    { name: "NODE.JS", category: "RUNTIME", Icon: Server, color: "text-green-500" },
    { name: "MONGODB", category: "DATABASE", Icon: Database, color: "text-green-400" },
    { name: "DOCKER", category: "DEVOPS", Icon: Container, color: "text-blue-500" },
    { name: "AWS", category: "CLOUD", Icon: Cloud, color: "text-orange-400" },
    { name: "SECURITY", category: "AUTH", Icon: Lock, color: "text-red-400" },
    { name: "CI/CD", category: "PIPELINE", Icon: IterationCcw, color: "text-indigo-400" },
];

const SkillCard = ({ skill }) => (
    <div className="group relative mx-4">
        
        {/* Card Content: Smoother hover background, sharp corners, simplified transition */}
        <div className="relative flex items-center gap-6 px-8 py-6 bg-white/5 border border-white/10 group-hover:bg-cyan-900/10 group-hover:border-cyan-400/50 transition duration-200 min-w-[280px]">

            {/* Icon Container: Subtle scale effect for less lag */}
            <div className={`p-3 bg-white/5 border border-white/10 group-hover:scale-[1.05] transition-transform duration-200 ${skill.color}`}>
                <skill.Icon size={40} strokeWidth={1.5} />
            </div>

            {/* Text Info */}
            <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {skill.name}
                </span>
                <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                    {skill.category}
                </span>
            </div>

            {/* Decorative Corner: Subtle point, no heavy shadow */}
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-cyan-400" />
            </div>
        </div>
    </div>
);

const MarqueeRow = ({ items, direction = "left", speed = 50 }) => {
    return (
        <div className="flex overflow-hidden whitespace-nowrap py-4 mask-linear-fade" style={{ direction: 'ltr' }}>
            <motion.div
                className="flex"
                animate={{
                    // Framer Motion handles translation using performant CSS properties (translate3d)
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {/* Two repetitions ensure a seamless loop */}
                {[...items, ...items].map((skill, idx) => (
                    <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
};

export default function Skills() {
    const pathname = usePathname();
    const isArabic = pathname?.startsWith("/ar");

    return (
        <section className="min-h-[60vh] bg-[#050505] py-24 relative overflow-hidden flex flex-col justify-center">

            {/* Background Elements: Reduced light for performance */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.01),transparent_70%)]" />

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 w-full mb-16 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-[1px] w-12 bg-cyan-400" />
                    <span className="font-mono text-cyan-400 text-sm tracking-widest">
                        {isArabic ? "الترسانة التقنية" : "TECHNICAL_ARSENAL"}
                    </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
                    {isArabic ? "قدرات" : "Full Stack"} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                        {isArabic ? "التطوير المتكامل" : "Capabilities"}
                    </span>
                </h2>
            </div>

            {/* Marquee Rows */}
            <div className="relative z-10 space-y-8">
                <MarqueeRow items={ROW_1} direction="left" speed={40} />
                <MarqueeRow items={ROW_2} direction="right" speed={45} />
            </div>

            {/* Gradient Overlay for Smooth Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        </section>
    );
}