import prisma from '@/lib/prisma';
import type { Project, Service, Testimonial } from '@prisma/client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let projects: Project[] = [];
  let services: Service[] = [];
  let testimonials: Testimonial[] = [];

  try {
    [projects, services, testimonials] = await Promise.all([
      prisma.project.findMany({ take: 6, orderBy: { createdAt: 'desc' } }),
      prisma.service.findMany({ orderBy: { priority: 'asc' } }),
      prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } }),
    ]);
  } catch (error) {
    console.error('Failed to load homepage data from database:', error);
  }

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <About />
        <Portfolio projects={projects} />
        <Services services={services} />
        <Testimonials testimonials={testimonials} />
        <Footer />
      </div>
    </div>
  );
}
