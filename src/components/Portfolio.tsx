"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Project } from "@prisma/client";

export default function Portfolio({ projects }: { projects: Project[] }) {
  const container = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const zoomImgs = gsap.utils.toArray('.zoom-img') as HTMLElement[];
      const zoomTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#portfolio",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
      });

      zoomImgs.forEach((img) => {
          const scaleVal = parseFloat(img.getAttribute('data-scale') || "1");
          zoomTimeline.to(img, {
              scale: scaleVal,
              ease: "none"
          }, 0);
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const fallbackImages = [
    "/assets/portfolio-lumiere-penthouse.png",
    "/assets/portfolio-gilded-lounge.png",
    "/assets/portfolio-obsidian-house.png",
    "/assets/home_portfolio_1_1775655072478.png",
    "/assets/home_portfolio_2_1775655091301.png",
    "/assets/home_portfolio_3_1775655120117.png"
  ];

  return (
    <section ref={container} id="portfolio" className="relative h-[300vh] bg-surface border-t border-white/5">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center zoom-parallax-container">
        
        <div className="absolute top-0 flex h-full w-full items-center justify-center zoom-img z-[1]" data-scale="4">
            <div className="relative h-[25vh] w-[25vw] min-w-[200px]">
                <Image src={projects[0]?.coverImage || fallbackImages[0]} alt="Portfolio 1" fill className="object-cover rounded-xl shadow-2xl" />
            </div>
        </div>

        <div className="absolute top-0 flex h-full w-full items-center justify-center zoom-img z-[2]" data-scale="5">
            <div className="relative -top-[30vh] left-[5vw] h-[30vh] w-[35vw] min-w-[250px]">
                <Image src={projects[1]?.coverImage || fallbackImages[1]} alt="Portfolio 2" fill className="object-cover rounded-xl shadow-2xl" />
            </div>
        </div>

        <div className="absolute top-0 flex h-full w-full items-center justify-center zoom-img z-[3]" data-scale="6">
            <div className="relative -top-[10vh] -left-[25vw] h-[45vh] w-[20vw] min-w-[200px]">
                <Image src={projects[2]?.coverImage || fallbackImages[2]} alt="Portfolio 3" fill className="object-cover rounded-xl shadow-2xl" />
            </div>
        </div>

        <div className="absolute top-0 flex h-full w-full items-center justify-center zoom-img z-[4]" data-scale="5">
            <div className="relative left-[27.5vw] h-[25vh] w-[25vw] min-w-[250px]">
                <Image src={projects[3]?.coverImage || fallbackImages[3]} alt="Portfolio 4" fill className="object-cover rounded-xl shadow-2xl" />
            </div>
        </div>

        <div className="absolute top-0 flex h-full w-full items-center justify-center zoom-img z-[5]" data-scale="6">
            <div className="relative top-[27.5vh] left-[5vw] h-[25vh] w-[20vw] min-w-[200px]">
                <Image src={projects[4]?.coverImage || fallbackImages[4]} alt="Portfolio 5" fill className="object-cover rounded-xl shadow-2xl" />
            </div>
        </div>

        <div className="absolute top-0 flex h-full w-full items-center justify-center zoom-img z-[6]" data-scale="8">
            <div className="relative top-[27.5vh] -left-[22.5vw] h-[25vh] w-[30vw] min-w-[280px]">
                <Image src={projects[5]?.coverImage || fallbackImages[5]} alt="Portfolio 6" fill className="object-cover rounded-xl shadow-2xl" />
            </div>
        </div>

      </div>
    </section>
  );
}
