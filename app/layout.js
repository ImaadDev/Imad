'use client';

import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientProvider from "../components/ClientProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { usePathname } from "next/navigation";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  return (
    <html lang={isArabic ? 'ar' : 'en'} dir={isArabic ? 'rtl' : 'ltr'}>
       <GoogleAnalytics/>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
       
        <Navbar />
        <ClientProvider>{children}</ClientProvider>
        <Footer />
      </body>
    </html>
  );
}
