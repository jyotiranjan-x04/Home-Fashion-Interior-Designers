"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-surface">
      <div className="min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12">
            
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                <div className="md:col-span-5">
                    <h2 className="font-headline text-5xl md:text-7xl text-white mb-6">Let's <span className="italic text-accent-gold">Create</span></h2>
                    <p className="text-white/60 max-w-sm mb-12">Ready to transform your space? Get in touch to schedule a consultation with our design team.</p>
                    <Link href="/contact" className="inline-block bg-white text-surface px-8 py-4 rounded-full font-label text-sm uppercase tracking-widest font-bold hover:bg-accent-gold transition-colors duration-300">Start a Project</Link>
                </div>

                <div className="md:col-span-2 md:col-start-8">
                    <span className="text-white font-label text-xs uppercase tracking-widest block mb-6">Navigation</span>
                    <ul className="space-y-4">
                        <li><Link href="/portfolio" className="text-white/60 hover:text-accent-gold transition-colors text-sm">Portfolio</Link></li>
                        <li><Link href="/services" className="text-white/60 hover:text-accent-gold transition-colors text-sm">Services</Link></li>
                        <li><Link href="/philosophy" className="text-white/60 hover:text-accent-gold transition-colors text-sm">Philosophy</Link></li>
                        <li><Link href="/studio" className="text-white/60 hover:text-accent-gold transition-colors text-sm">Studio</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <span className="text-white font-label text-xs uppercase tracking-widest block mb-6">Socials</span>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-white/60 hover:text-accent-terracotta transition-colors text-sm">Instagram</a></li>
                        <li><a href="#" className="text-white/60 hover:text-accent-terracotta transition-colors text-sm">Pinterest</a></li>
                        <li><a href="#" className="text-white/60 hover:text-accent-terracotta transition-colors text-sm">LinkedIn</a></li>
                        <li><a href="#" className="text-white/60 hover:text-accent-terracotta transition-colors text-sm">Behance</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="font-headline text-2xl text-white tracking-widest">ATELIER</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">&copy; {new Date().getFullYear()} Architectural Noir. All rights reserved.</div>
            </div>
        </div>
    </footer>
  );
}
