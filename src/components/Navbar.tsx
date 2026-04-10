"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 50) {
          if (window.scrollY > lastScrollY) {
            setShow(false);
          } else {
            setShow(true);
          }
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-white/5 transition-transform duration-500 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1920px] mx-auto flex justify-between items-center px-6 md:px-12 py-5">
        <Link href="/" className="font-headline italic text-2xl tracking-tighter text-white">
          Home Fashion <span className="text-accent-gold">Interior</span>
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          <Link className="text-sm tracking-wide text-white/70 hover:text-white transition-colors" href="/">Home</Link>
          <Link className="text-sm tracking-wide text-white/70 hover:text-white transition-colors" href="/portfolio">Portfolio</Link>
          <Link className="text-sm tracking-wide text-white/70 hover:text-white transition-colors" href="/services">Services</Link>
          <Link className="text-sm tracking-wide text-white/70 hover:text-white transition-colors" href="/philosophy">Philosophy</Link>
          <Link className="text-sm tracking-wide text-white/70 hover:text-white transition-colors" href="/studio">Studio</Link>
        </div>
        <Link href="/contact" className="hidden lg:block bg-white text-surface px-8 py-2.5 rounded-full font-medium hover:bg-accent-gold hover:text-white transition-all duration-500 text-sm">
          Start a Project
        </Link>
        <button
          className="lg:hidden text-white hover:text-accent-gold transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <Menu size={32} />
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-surface/95 px-6 py-4">
          <div className="flex flex-col gap-4">
            <Link className="text-white/80 hover:text-white transition-colors" href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link className="text-white/80 hover:text-white transition-colors" href="/portfolio" onClick={() => setMobileOpen(false)}>Portfolio</Link>
            <Link className="text-white/80 hover:text-white transition-colors" href="/services" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link className="text-white/80 hover:text-white transition-colors" href="/philosophy" onClick={() => setMobileOpen(false)}>Philosophy</Link>
            <Link className="text-white/80 hover:text-white transition-colors" href="/studio" onClick={() => setMobileOpen(false)}>Studio</Link>
            <Link className="text-white/80 hover:text-white transition-colors" href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
