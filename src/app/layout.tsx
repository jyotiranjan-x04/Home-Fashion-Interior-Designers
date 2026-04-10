import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import SmoothScrolling from '@/components/SmoothScrolling';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const newsreader = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-newsreader' });

export const metadata: Metadata = {
  title: 'Home Fashion Interior | Premium Interior Design in Berhampur',
  description: "Crafting spaces where life happens. Odisha's premier interior design studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Only show Navbar if not in /admin route
  const isAdmin = typeof window !== 'undefined' ? window.location.pathname.startsWith('/admin') : false;
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable} dark`}>
      <body className="bg-surface text-white antialiased overflow-x-hidden">
        <SmoothScrolling>
          {!isAdmin && <Navbar />}
          <main>{children}</main>
        </SmoothScrolling>
      </body>
    </html>
  );
}
