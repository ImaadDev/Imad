import { NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

export function middleware(request) {
    console.log("Middleware running for:", request.nextUrl.pathname);
    const { pathname } = request.nextUrl;

    // Check if the pathname is missing a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next|favicon.ico|api|.*\\..*).*)",
    ],
};
