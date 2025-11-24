'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientProvider from './ClientProvider';

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');

  return (
    <>
      <Navbar />
      <ClientProvider>{children}</ClientProvider>
      <Footer />
    </>
  );
}