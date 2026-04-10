"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { Service } from '@/types/db';

export default function Services({ services }: { services: Service[] }) {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gs-reveal-up').forEach((elem: any) => {
        gsap.to(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const [service1, service2, service3, service4] = services;

  // Fallbacks if data isn't seeded
  const bento1Title = service1?.title || "Residential Interiors";
  const bento1Desc = service1?.description || "From concept to execution, we create sanctuaries that reflect your personality and elevate your daily living experience.";
  const bento1Image = service1?.image || "/assets/home_bento_1_1775655137291.png";

  const bento2Title = service2?.title || "Modular Kitchens";
  const bento2Desc = service2?.description || "Precision engineering meets culinary elegance. Designed for high performance and timeless aesthetics.";
  const bento2Image = service2?.image || "/assets/home_bento_2_1775655158502.png";

  const getIcon = (iconName?: string) => {
      if (!iconName) return null;
      // @ts-ignore
      const LucideIcon = Icons[iconName] as React.ElementType;
      return LucideIcon ? <LucideIcon className="w-12 h-12 text-white/20 group-hover:text-accent-gold transition-all duration-500 group-hover:scale-110" /> : null;
  }

  return (
    <section ref={container} id="services" className="bg-surface py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gs-reveal-up opacity-0 translate-y-8">
                <div>
                    <span className="text-accent-gold font-label text-xs uppercase tracking-[0.2em] mb-3 block font-semibold">Expertise</span>
                    <h2 className="font-headline text-5xl md:text-6xl text-white">Curated <span className="italic text-accent-terracotta">Services</span></h2>
                </div>
                <Link href="/services" className="mt-6 md:mt-0 text-white/60 hover:text-accent-gold transition-colors border-b border-white/20 hover:border-accent-gold pb-1 text-sm uppercase tracking-widest flex items-center gap-2 group">
                    View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
                <div className="md:col-span-2 md:row-span-2 service-card liquid-glass rounded-3xl p-8 md:p-10 flex flex-col justify-between group overflow-hidden border border-white/5 gs-reveal-up opacity-0 translate-y-8">
                    <div className="relative z-10">
                        <span className="text-accent-gold font-label text-xs uppercase tracking-widest font-bold">Service 01</span>
                        <h3 className="text-3xl md:text-4xl text-white font-headline italic mt-4 group-hover:text-accent-gold transition-colors">{bento1Title}</h3>
                        <p className="text-white/60 mt-4 max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">{bento1Desc}</p>
                    </div>
                    <div className="relative mt-8 h-64 md:h-full min-h-[300px] overflow-hidden rounded-xl">
                        <Image src={bento1Image} alt={bento1Title} fill className="object-cover group-hover:scale-105 transition-transform duration-[2s] grayscale-[30%] group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-accent-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>

                <div className="md:col-span-2 service-card bg-surface-container-high rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 group border border-white/5 gs-reveal-up opacity-0 translate-y-8 lg:delay-100">
                    <div className="w-full md:w-1/2 aspect-square rounded-xl overflow-hidden relative">
                        <Image src={bento2Image} alt={bento2Title} fill className="object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-accent-terracotta font-label text-xs uppercase tracking-widest font-bold">Service 02</span>
                        <h3 className="text-2xl md:text-3xl text-white font-headline italic mt-2 group-hover:text-accent-terracotta transition-colors">{bento2Title}</h3>
                        <p className="text-white/50 mt-4 text-sm leading-relaxed">{bento2Desc}</p>
                    </div>
                </div>

                <div className="service-card bg-surface-container rounded-3xl p-8 flex flex-col justify-center items-center text-center group border border-white/5 gs-reveal-up opacity-0 translate-y-8 lg:delay-200">
                    <div className="mb-6 relative h-16 flex items-center justify-center">
                        {service3 ? getIcon(service3.icon) : <Icons.Compass className="w-12 h-12 text-white/20 group-hover:text-accent-gold transition-all duration-500 group-hover:scale-110" />}
                    </div>
                    <h3 className="text-xl text-white font-headline group-hover:text-accent-gold transition-colors">{service3?.title || "3D Visualization"}</h3>
                    <p className="text-white/40 text-xs mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">{service3?.description || "Hyper-realistic renderings to preview your space."}</p>
                </div>

                <div className="service-card bg-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-center items-center text-center group border border-white/5 gs-reveal-up opacity-0 translate-y-8 lg:delay-300">
                    <div className="mb-6 relative h-16 flex items-center justify-center">
                        {service4 ? getIcon(service4.icon) : <Icons.Box className="w-12 h-12 text-white/20 group-hover:text-accent-terracotta transition-all duration-500 group-hover:scale-110" />}
                    </div>
                    <h3 className="text-xl text-white font-headline group-hover:text-accent-terracotta transition-colors">{service4?.title || "Material Curation"}</h3>
                    <p className="text-white/40 text-xs mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">{service4?.description || "Sourcing unique finishes from around the globe."}</p>
                </div>
            </div>
        </div>
    </section>
  );
}
