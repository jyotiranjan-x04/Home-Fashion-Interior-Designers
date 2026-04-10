import Image from 'next/image';
import Footer from '@/components/Footer';
import prisma from '@/lib/prisma';
import type { Project } from '@/types/db';

export const dynamic = 'force-dynamic';

const fallbackProjects = [
  {
    title: 'Lumiere Penthouse',
    category: 'Private Residence',
    description: 'A monolithic penthouse composition balancing warm timber and sculpted concrete.',
    coverImage: '/assets/portfolio-lumiere-penthouse.png',
  },
  {
    title: 'Gilded Lounge',
    category: 'Hospitality',
    description: 'A rich hospitality interior with nuanced textures and low-lit cinematic rhythm.',
    coverImage: '/assets/portfolio-gilded-lounge.png',
  },
  {
    title: 'Obsidian House',
    category: 'Residential',
    description: 'A dark architectural home centered around void, shadow, and light.',
    coverImage: '/assets/portfolio-obsidian-house.png',
  },
  {
    title: 'Lumina Kitchen',
    category: 'Kitchen',
    description: 'High-function custom kitchen with premium detailing and sleek lines.',
    coverImage: '/assets/portfolio-lumina-kitchen.png',
  },
  {
    title: 'Lumina Living',
    category: 'Living',
    description: 'A calm, editorial living space crafted with restrained luxury.',
    coverImage: '/assets/portfolio-lumina-living.png',
  },
  {
    title: 'Lumina Bathroom',
    category: 'Bathroom',
    description: 'A spa-like retreat with sculpted stone and seamless forms.',
    coverImage: '/assets/portfolio-lumina-bathroom.png',
  },
];

export default async function PortfolioPage() {
  let projects: Project[] = [];

  try {
    projects = await prisma.project.findMany({ take: 12, orderBy: { createdAt: 'desc' } });
  } catch (error) {
    console.error('Failed to load portfolio data:', error);
  }

  const cards = projects.length > 0 ? projects : fallbackProjects;

  return (
    <div className="pt-28">
      <section className="px-6 md:px-12 lg:px-16 mb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-headline italic text-6xl md:text-8xl leading-[0.9] tracking-tight mb-6">
            Selected Narratives
          </h1>
          <p className="max-w-2xl text-white/65 text-lg">
            Inspired by the Stitch portfolio editorial direction, this page highlights our curated projects as
            distinct architectural monographs.
          </p>
        </div>
      </section>

      <section className="mb-20">
        <div className="px-6 md:px-12 lg:px-16 mb-6 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.25em] text-white/40">Featured Monographs</span>
        </div>
        <div className="flex gap-6 overflow-x-auto px-6 md:px-12 lg:px-16 pb-4">
          {cards.slice(0, 4).map((project, idx) => (
            <article key={`featured-${idx}`} className="shrink-0 w-[78vw] md:w-[45vw] lg:w-[38vw] rounded-2xl overflow-hidden relative group border border-white/10">
              <div className="relative h-[380px]">
                <Image src={project.coverImage} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-gold mb-2">{project.category}</p>
                  <h2 className="font-headline italic text-4xl leading-tight">{project.title}</h2>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[260px]">
          {cards.slice(0, 6).map((project, idx) => {
            const spanClass = idx === 0 ? 'md:col-span-7 md:row-span-2' : idx === 1 ? 'md:col-span-5 md:row-span-2' : 'md:col-span-6';
            return (
              <article key={`grid-${idx}`} className={`relative overflow-hidden rounded-2xl border border-white/10 group ${spanClass}`}>
                <Image src={project.coverImage} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="font-headline italic text-3xl">{project.title}</h3>
                  <p className="text-sm text-white/60 mt-2 max-w-lg">{project.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-16 text-center bg-surface-container-low">
        <blockquote className="font-headline italic text-4xl md:text-6xl leading-tight max-w-5xl mx-auto">
          "Interior architecture is the silent language of a building, spoken through shadow, materiality, and void."
        </blockquote>
      </section>

      <Footer />
    </div>
  );
}
