"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.fromTo("#hero-img", {scale: 1.2}, {scale: 1, duration: 3, ease: "power2.out"});

      tl.to("#hero-subtitle", {y: 0, opacity: 1, duration: 1}, 0.5)
        .to("#hero-title-1", {y: "0%", opacity: 1, duration: 1.2}, 0.7)
        .to("#hero-title-2", {y: "0%", opacity: 1, duration: 1.2}, 0.9)
        .to("#hero-desc", {y: 0, opacity: 1, duration: 1}, 1.3)
        .to("#hero-btns", {y: 0, opacity: 1, duration: 1}, 1.5)
        .to("#hero-scroll", {opacity: 1, duration: 1}, 2);

      gsap.to("#hero-img", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
              trigger: "#hero",
              start: "top top",
              end: "bottom top",
              scrub: true
          } 
      });
    }, container);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="hero" className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden" id="hero-bg-wrapper">
        <Image 
          src="/assets/home_hero_1775655037318.png" 
          alt="Luxury Interior" 
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" 
          id="hero-img" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/40 to-surface/90"></div>
      </div>

      <div className="relative z-10 max-w-5xl mt-20">
        <span id="hero-subtitle" className="text-accent-gold font-label text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6 block lg:mb-8 opacity-0 translate-y-4">
          Odisha's Premier Interior Design Studio
        </span>

        <h1 className="font-headline italic text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-white">
          <span className="overflow-hidden block"><span className="block translate-y-[100%] opacity-0" id="hero-title-1">Crafting Spaces</span></span>
          <span className="overflow-hidden block"><span className="block translate-y-[100%] opacity-0" id="hero-title-2">Where <span className="text-accent-gold">Life</span> Happens.</span></span>
        </h1>

        <p id="hero-desc" className="mt-8 md:mt-12 text-lg md:text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-2xl opacity-0 translate-y-4">
          Home Fashion Interior Berhampur. We back visionaries and craft interiors that define what comes next.
        </p>

        <div id="hero-btns" className="mt-12 lg:mt-16 flex flex-wrap gap-4 opacity-0 translate-y-4">
          <Link href="/contact" className="btn-magnetic bg-white text-surface px-10 py-4 lg:px-12 lg:py-5 rounded-xl font-medium hover:bg-accent-gold hover:text-white transition-all duration-700 ease-out flex items-center gap-3">
              <span className="btn-magnetic-text">Start a Project</span>
          </Link>
          <Link href="/portfolio" className="liquid-glass btn-magnetic text-white px-10 py-4 lg:px-12 lg:py-5 rounded-xl font-medium transition-transform duration-700 ease-out border border-white/10 flex items-center gap-3">
              <span className="btn-magnetic-text">Explore Portfolio</span>
              <ArrowDown className="text-accent-gold w-5 h-5"/>
          </Link>
        </div>
      </div>

      <div id="hero-scroll" className="absolute bottom-10 left-6 md:left-12 lg:left-24 z-10 flex items-center gap-4 opacity-0">
          <span className="text-white/40 text-xs tracking-widest uppercase rotate-180" style={{ writingMode: "vertical-rl" }}>Scroll</span>
          <div className="h-16 w-[1px] bg-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold scroll-line-anim"></div>
          </div>
      </div>
    </section>
  );
}
