"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function About() {
  const container = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallax-bg-about", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="about" className="relative mt-20 mb-32 mx-4 md:mx-12 overflow-hidden rounded-[2rem] bg-white">
      <div className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-white clip-path-about">
          <div className="absolute top-[-10vh] left-0 h-[120vh] w-full parallax-bg-about">
              <Image src="/assets/about_hero_1775656725926.png" alt="Showroom" fill className="h-full w-full object-cover" />
          </div>
          <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 md:p-20 text-white mix-blend-difference">
              <h2 className="text-3xl md:text-[5vw] uppercase font-headline italic tracking-tighter mix-blend-difference leading-none">
                  Immersive Experience
              </h2>
              <p className="w-full md:w-[50vw] self-end text-lg md:text-[2vw] uppercase mix-blend-difference font-semibold mt-auto text-right">
                  Beauty and quality need the right time to be conceived and realised. Crafting excellence in Berhampur.
              </p>
          </div>
      </div>
    </section>
  );
}
