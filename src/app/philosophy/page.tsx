import Image from 'next/image';
import Footer from '@/components/Footer';

export default function PhilosophyPage() {
  return (
    <div className="pt-28">
      <section className="px-6 md:px-12 lg:px-16 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <h1 className="font-headline italic text-6xl md:text-8xl leading-[0.9] tracking-tight mb-8">
              A Silent Conversation with Space
            </h1>
            <p className="text-lg text-white/65 max-w-2xl leading-relaxed">
              Inspired by the Stitch philosophy page, our point of view is built on disciplined geometry,
              emotional atmosphere, and material honesty.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative h-[520px] rounded-2xl overflow-hidden border border-white/10">
              <Image src="/assets/about_hero_1775656725926.png" alt="Philosophy visual" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-16 bg-surface-container-low text-center">
        <blockquote className="font-headline italic text-4xl md:text-6xl leading-tight max-w-5xl mx-auto">
          "Design is not the act of filling a room; it is the discipline of choreographing the void between objects."
        </blockquote>
        <p className="mt-8 text-xs tracking-[0.35em] uppercase text-white/45">The Manifesto</p>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline italic text-5xl mb-12">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['Structural Imminence', 'We prioritize architectural permanence over decorative noise.'],
              ['Temporal Luminosity', 'Light is treated as a primary design material, not an afterthought.'],
              ['Tactile Sincerity', 'Raw stone, warm timber, and crafted textures ground every interior.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-surface-container-high p-8">
                <h3 className="font-headline italic text-3xl mb-4">{title}</h3>
                <p className="text-white/65 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="group">
            <div className="relative h-[460px] rounded-2xl overflow-hidden border border-white/10 mb-6">
              <Image src="/assets/about_founder_1775656814835.png" alt="Julian Vane" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <h4 className="font-headline italic text-3xl">Julian Vane</h4>
            <p className="text-white/55 uppercase tracking-[0.2em] text-xs mt-2">Founder & Creative Director</p>
          </article>
          <article className="group md:pt-12">
            <div className="relative h-[460px] rounded-2xl overflow-hidden border border-white/10 mb-6">
              <Image src="/assets/about_team_1_1775656832070.png" alt="Elena Rossi" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <h4 className="font-headline italic text-3xl">Elena Rossi</h4>
            <p className="text-white/55 uppercase tracking-[0.2em] text-xs mt-2">Lead Interior Architect</p>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
