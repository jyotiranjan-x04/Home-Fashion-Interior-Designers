import React from 'react';
import Link from 'next/link';
import { LogOut } from 'lucide-react';
import { signOut } from '@/auth';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row">
      <details className="md:hidden bg-background border-b border-white/10 px-4 py-3">
        <summary className="cursor-pointer list-none flex items-center justify-between text-white uppercase tracking-widest text-sm">
          <span>Admin Menu</span>
          <span className="text-white/60">Toggle</span>
        </summary>
        <div className="pt-4">
          <nav className="flex flex-col gap-2">
            <Link href="/admin" className="text-white/70 hover:text-white hover:bg-white/5 py-2 px-3 rounded transition-colors text-sm font-label uppercase tracking-wider">Dashboard</Link>
            <Link href="/admin/projects" className="text-white/70 hover:text-white hover:bg-white/5 py-2 px-3 rounded transition-colors text-sm font-label uppercase tracking-wider">Projects</Link>
            <Link href="/admin/services" className="text-white/70 hover:text-white hover:bg-white/5 py-2 px-3 rounded transition-colors text-sm font-label uppercase tracking-wider">Services</Link>
            <Link href="/admin/testimonials" className="text-white/70 hover:text-white hover:bg-white/5 py-2 px-3 rounded transition-colors text-sm font-label uppercase tracking-wider">Testimonials</Link>
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/" className="text-accent-terracotta hover:text-white text-xs uppercase tracking-widest flex items-center gap-2 border-t border-white/10 pt-4">
              &larr; View Live Site
            </Link>
            <form action={async () => {
              'use server';
              await signOut();
            }}>
              <button type="submit" className="text-white/50 hover:text-white text-xs uppercase tracking-widest flex items-center justify-between w-full p-2 bg-white/5 hover:bg-red-500/20 rounded transition-colors group">
                <span className="group-hover:text-red-400">Sign Out</span>
                <LogOut className="w-4 h-4 group-hover:text-red-400" />
              </button>
            </form>
          </div>
        </div>
      </details>

      <aside className="hidden md:flex w-64 bg-background border-r border-white/10 p-6 flex-col gap-6 sticky top-0 h-screen">
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

            <form action={async () => {
              'use server';
              await signOut();
            }}>
                <button type="submit" className="text-white/50 hover:text-white text-xs uppercase tracking-widest flex items-center justify-between w-full p-2 bg-white/5 hover:bg-red-500/20 rounded transition-colors group">
                    <span className="group-hover:text-red-400">Sign Out</span>
                    <LogOut className="w-4 h-4 group-hover:text-red-400" />
                </button>
            </form>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
          <div className="max-w-5xl mx-auto">
             {children}
          </div>
      </main>
    </div>
  );
}
