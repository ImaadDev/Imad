"use client";

import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

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

export default function LanguageSwitcher() {
    const pathname = usePathnameSimulation();

    // Determine current locale based on path
    const currentLocale = pathname.startsWith("/ar") ? "ar" : "en";

    const getPath = (locale) => {
        if (!pathname || pathname === "/") return `/${locale}`;

        const hasLocalePrefix = /^\/(en|ar)/.test(pathname);
        if (hasLocalePrefix) {
            return pathname.replace(/^\/(en|ar)/, `/${locale}`);
        } else {
            return `/${locale}${pathname}`;
        }
    };

    return (
        <div className="flex items-center gap-0 bg-white border-2 border-red-700 font-sans">
            {/* English Link */}
            <a
                href={getPath("en")}
                className={`
                    px-4 py-2 text-base font-extrabold transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500
                    ${currentLocale === "en"
                        ? "bg-red-700 text-white"
                        : "text-red-700 hover:bg-red-50"
                    }
                `}
            >
                English
            </a>

            {/* Arabic Link */}
            <a
                href={getPath("ar")}
                className={`
                    group flex items-center gap-2 px-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300
                    ${currentLocale === "ar"
                        ? "bg-red-700 text-white"
                        : "text-red-700 hover:bg-red-50"
                    }
                `}
                lang="ar"
                dir="rtl"
            >
                <Globe size={14} className="text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
                العربية
            </a>
            
        </div>
    );
}
