import Image from 'next/image';
import Footer from '@/components/Footer';

export default function StudioPage() {
  return (
    <div className="pt-28">
      <section className="px-6 md:px-12 lg:px-16 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <h1 className="font-headline italic text-6xl md:text-8xl leading-[0.92] tracking-tight mb-8">Inside The Studio</h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl">
              Our studio practice blends architecture, interior detailing, and storytelling to create complete,
              experiential homes.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="relative h-[460px] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/assets/about_hero_1775656725926.png" alt="Studio" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-white/10 bg-surface-container p-8">
            <h2 className="font-headline italic text-4xl mb-4">How We Work</h2>
            <p className="text-white/65 leading-relaxed">
              We begin with deep listening, translate intent into spatial systems, and execute with uncompromising
              attention to proportion, texture, and light.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-surface-container p-8">
            <h2 className="font-headline italic text-4xl mb-4">Where We Build</h2>
            <p className="text-white/65 leading-relaxed">
              Based in Berhampur, we collaborate with homeowners, developers, and hospitality brands across Odisha
              and beyond.
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-16 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10">
            <Image src="/assets/about_timeline_2008_1775656746721.png" alt="Studio origin" fill className="object-cover" />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10">
            <Image src="/assets/about_timeline_2015_1775656768685.png" alt="Studio growth" fill className="object-cover" />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10">
            <Image src="/assets/about_timeline_2024_1775656785576.png" alt="Studio present" fill className="object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
