"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Testimonial } from "@prisma/client";

const DEFAULT_TESTIMONIAL_IMAGE = "/assets/home_testimonial_1775655223364.png";

const hardcodedTestimonials = [
  {
    name: "Eleanor Vance",
    role: "Homeowner",
    text: "They completely transformed our penthouse. The attention to detail and material selection was beyond anything we expected. A true luxury experience.",
    image: DEFAULT_TESTIMONIAL_IMAGE
  },
  {
    name: "James & Sarah Sterling",
    role: "Private Clients",
    text: "From the initial concept 3Ds to the final reveal, the process was seamless. They understood our vision for a minimalist yet warm sanctuary.",
    image: DEFAULT_TESTIMONIAL_IMAGE
  },
  {
    name: "David Chen",
    role: "Property Developer",
    text: "Their modular kitchen designs elevated our entire development project. The balance of aesthetics and high-performance functionality is unmatched.",
    image: DEFAULT_TESTIMONIAL_IMAGE
  },
  {
    name: "Victoria Roth",
    role: "Boutique Owner",
    text: "The curation of bespoke furniture and lighting fixtures gave my space a unique architectural noir feel that my clients constantly praise.",
    image: DEFAULT_TESTIMONIAL_IMAGE
  },
];

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const container = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Section Reveal
        gsap.from('.testimonial-header', {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Infinite Marquee Animation
        if (marqueeRef.current) {
            const content = marqueeRef.current.firstElementChild as HTMLElement;
            if (content) {
                 const totalWidth = content.offsetWidth;
                 gsap.to(marqueeRef.current, {
                    x: -totalWidth,
                    duration: 30,
                    ease: "none",
                    repeat: -1,
                 });
            }
        }
    }, container);

    return () => ctx.revert();
  }, [testimonials]);

  const activeTestimonials = testimonials.length > 0 ? testimonials : hardcodedTestimonials;

  return (
    <section ref={container} id="testimonials" className="bg-background py-32 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 testimonial-header">
            <span className="text-accent-terracotta font-label text-xs uppercase tracking-[0.2em] mb-3 block font-semibold">Client Stories</span>
            <h2 className="font-headline text-4xl md:text-5xl text-white">Words of <span className="italic text-accent-gold">Appreciation</span></h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full flex py-8">
            {/* Top/Bottom Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            <div ref={marqueeRef} className="flex whitespace-nowrap gap-6 px-6">
                {/* First Set */}
                <div className="flex gap-6 items-stretch">
                   {activeTestimonials.map((test, i) => (
                    <div key={`test-1-${i}`} className="w-[350px] md:w-[450px] bg-surface liquid-glass rounded-2xl p-8 border border-white/5 shrink-0 flex flex-col justify-between whitespace-normal">
                             <p className="text-white/70 italic text-lg leading-relaxed mb-8">"{test.text}"</p>
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full overflow-hidden relative bg-white/10 shrink-0">
                           <img src={test.image || DEFAULT_TESTIMONIAL_IMAGE} alt={test.name} className="w-full h-full object-cover" />
                                 </div>
                                 <div>
                                     <h4 className="text-white font-headline text-lg">{test.name}</h4>
                                     <span className="text-accent-gold font-label text-xs uppercase tracking-wider">{test.role}</span>
                                 </div>
                             </div>
                        </div>
                    ))}
                </div>
                {/* Second Set (Clone for infinite loop) */}
                <div className="flex gap-6 items-stretch">
                   {activeTestimonials.map((test, i) => (
                     <div key={`test-2-${i}`} className="w-[350px] md:w-[450px] bg-surface liquid-glass rounded-2xl p-8 border border-white/5 shrink-0 flex flex-col justify-between whitespace-normal">
                             <p className="text-white/70 italic text-lg leading-relaxed mb-8">"{test.text}"</p>
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full overflow-hidden relative bg-white/10 shrink-0">
                          <img src={test.image || DEFAULT_TESTIMONIAL_IMAGE} alt={test.name} className="w-full h-full object-cover" />
                                 </div>
                                 <div>
                                     <h4 className="text-white font-headline text-lg">{test.name}</h4>
                                     <span className="text-accent-gold font-label text-xs uppercase tracking-wider">{test.role}</span>
                                 </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
