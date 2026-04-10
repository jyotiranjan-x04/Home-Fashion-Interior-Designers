"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { LogOut } from 'lucide-react';

type Props = {
  signOutAction?: (formData?: any) => Promise<void>;
};

export default function AdminSidebarClient({ signOutAction }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile: Button to open sidebar */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-background border border-white/10 px-3 py-2 rounded text-white uppercase text-xs font-bold shadow-lg"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open admin sidebar"
      >
        ☰ Menu
      </button>

      {/* Sidebar (mobile: overlay, desktop: sticky) */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:static md:opacity-100 md:pointer-events-auto md:w-64 md:bg-background md:border-r md:border-white/10 md:p-6 md:flex md:flex-col md:gap-6 md:sticky md:top-0 md:h-screen`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      >
        <div className="w-64 bg-background border-r border-white/10 p-6 flex flex-col gap-6 h-full" onClick={e => e.stopPropagation()}>
          <div className="font-headline text-xl text-white tracking-widest mb-8">ATELIER <span className="text-accent-gold italic block text-sm">ADMIN</span></div>
          <nav className="flex flex-col gap-4">
            <Link href="/admin" className="text-white/70 hover:text-white hover:bg-white/5 py-2 px-3 rounded transition-colors text-sm font-label uppercase tracking-wider">Dashboard</Link>
            <Link href="/admin/projects" className="text-white/70 hover:text-white hover:bg-white/5 py-2 px-3 rounded transition-colors text-sm font-label uppercase tracking-wider">Projects</Link>
            <Link href="/admin/services" className="text-white/70 hover:text-white hover:bg-white/5 py-2 px-3 rounded transition-colors text-sm font-label uppercase tracking-wider">Services</Link>
            <Link href="/admin/testimonials" className="text-white/70 hover:text-white hover:bg-white/5 py-2 px-3 rounded transition-colors text-sm font-label uppercase tracking-wider">Testimonials</Link>
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <Link href="/" className="text-accent-terracotta hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 border-t border-white/10 pt-4">
              &larr; View Live Site
            </Link>

            <form action={signOutAction}>
              <button type="submit" className="text-white/50 hover:text-white text-xs uppercase tracking-widest flex items-center justify-between w-full p-2 bg-white/5 hover:bg-red-500/20 rounded transition-colors group">
                <span className="group-hover:text-red-400">Sign Out</span>
                <LogOut className="w-4 h-4 group-hover:text-red-400" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
