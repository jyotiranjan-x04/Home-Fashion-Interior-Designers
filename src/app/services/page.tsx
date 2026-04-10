import Image from 'next/image';
import Footer from '@/components/Footer';
import prisma from '@/lib/prisma';
import type { Service } from '@prisma/client';

export const dynamic = 'force-dynamic';

const fallbackServices = [
  {
    title: 'Full-Scale Residential',
    description: 'Complete architectural interiors from concept to final handover.',
    image: '/assets/home_bento_1_1775655137291.png',
  },
  {
    title: 'Modular Kitchen Systems',
    description: 'High-performance kitchen environments with bespoke detailing.',
    image: '/assets/home_bento_2_1775655158502.png',
  },
  {
    title: 'Technical 3D Visualization',
    description: 'Photoreal pre-visualization and walkthrough-ready interior previews.',
    image: '/assets/home_bento_3_1775655176163.png',
  },
  {
    title: 'Material Curations',
    description: 'Global sourcing and tactile composition for refined interiors.',
    image: '/assets/home_bento_4_1775655206343.png',
  },
];

export default async function ServicesPage() {
  let services: Service[] = [];

  try {
    services = await prisma.service.findMany({ orderBy: [{ priority: 'asc' }, { createdAt: 'desc' }] });
  } catch (error) {
    console.error('Failed to load services data:', error);
  }

  const items = services.length > 0 ? services : fallbackServices;

  return (
    <div className="pt-28">
      <section className="px-6 md:px-12 lg:px-16 mb-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-headline italic text-6xl md:text-8xl leading-[0.9] tracking-tight mb-6">
            Architectural Imminence
          </h1>
          <p className="max-w-3xl text-lg text-white/65 leading-relaxed">
            Built from the Stitch services direction, this page presents our capabilities as distinct design
            systems, from technical planning to tactile execution.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 mb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.slice(0, 4).map((service, idx) => (
            <article key={`service-${idx}`} className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-surface-container-low">
              <Image src={service.image} alt={service.title} fill className="object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <span className="text-xs uppercase tracking-[0.22em] text-accent-gold">0{idx + 1} / Service</span>
                <h2 className="font-headline italic text-4xl mt-3">{service.title}</h2>
                <p className="text-white/65 mt-4 max-w-lg">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-16 bg-surface-container-low">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-[0.4em] text-white/45 mb-12 text-center">The Process</h2>
          <div className="relative border-l border-white/15 ml-3 md:ml-0 md:left-1/2">
            {[
              ['01', 'Dialog & Resonance', 'A deep understanding of your vision, lifestyle, and spatial priorities.'],
              ['02', 'Blueprint Narrative', 'Spatial strategy, layouts, and technical framing for refined execution.'],
              ['03', 'Material Build', 'On-site execution with precise detailing, supervision, and quality control.'],
              ['04', 'Curation & Handoff', 'Final styling, lighting calibration, and complete project handover.'],
            ].map(([step, title, text], idx) => (
              <div key={step} className={`relative pl-10 mb-16 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:-translate-x-full md:pl-0' : 'md:pl-16'}`}>
                <div className={`absolute top-0 w-2.5 h-2.5 rounded-full bg-white ring-8 ring-surface ${idx % 2 === 0 ? 'left-[-5px] md:left-auto md:right-[-5px]' : 'left-[-5px]'}`} />
                <span className="font-headline italic text-5xl text-white/35 block mb-3">{step}.</span>
                <h3 className="font-headline italic text-2xl mb-2">{title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-16 text-center">
        <h3 className="font-headline italic text-4xl md:text-6xl mb-8">Start your architectural narrative.</h3>
        <a href="/contact" className="inline-block bg-white text-black px-10 py-4 rounded-xl text-sm uppercase tracking-[0.2em] font-medium hover:bg-accent-gold hover:text-white transition-colors">
          Schedule Consultation
        </a>
      </section>

      <Footer />
    </div>
  );
}
