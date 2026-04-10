import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="px-6 md:px-12 lg:px-16 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h1 className="font-headline italic text-6xl md:text-7xl leading-[0.95] tracking-tight mb-6">Start a Project</h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Share your vision and timelines. We will schedule a consultation and shape an interior direction
              tailored to your space.
            </p>
            <div className="space-y-4 text-white/75">
              <p><span className="text-white">Studio:</span> Ambapua Rd, Berhampur, Odisha</p>
              <p><span className="text-white">Phone:</span> +91 96924 77320</p>
              <p><span className="text-white">Email:</span> contact@atelier.com</p>
            </div>
          </div>

          <div className="md:col-span-7 rounded-2xl border border-white/10 bg-surface-container p-8 md:p-10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">Name</label>
                <input className="w-full rounded-xl bg-black/25 border border-white/10 px-4 py-3 outline-none focus:border-accent-gold" type="text" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">Email</label>
                <input className="w-full rounded-xl bg-black/25 border border-white/10 px-4 py-3 outline-none focus:border-accent-gold" type="email" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">Project Type</label>
                <input className="w-full rounded-xl bg-black/25 border border-white/10 px-4 py-3 outline-none focus:border-accent-gold" type="text" placeholder="Residential, Hospitality, Office..." />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-2">Message</label>
                <textarea className="w-full rounded-xl bg-black/25 border border-white/10 px-4 py-3 min-h-[150px] outline-none focus:border-accent-gold" placeholder="Tell us about your project..." />
              </div>
              <div className="md:col-span-2">
                <button type="button" className="bg-white text-black px-8 py-3 rounded-xl uppercase tracking-[0.18em] text-xs font-semibold hover:bg-accent-gold hover:text-white transition-colors">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
