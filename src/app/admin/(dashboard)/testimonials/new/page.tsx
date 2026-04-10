import React from 'react';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function createTestimonial(formData: FormData) {
    'use server'
    const name = formData.get('name') as string;
    const role = formData.get('role') as string;
    const text = formData.get('text') as string;
    const image = formData.get('image') as string;

    await prisma.testimonial.create({
        data: {
            name,
            role,
            text,
            image: image || null,
        }
    });

    redirect('/admin/testimonials');
}

export default function NewTestimonial() {
  return (
    <div className="text-white max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/admin/testimonials" className="text-white/50 hover:text-white text-xs uppercase tracking-widest mb-4 inline-block">&larr; Back to Testimonials</Link>
        <h1 className="text-4xl font-headline italic">New Testimonial</h1>
      </div>

      <form action={createTestimonial} className="bg-surface-container rounded-2xl border border-white/5 p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-label uppercase tracking-widest text-white/50">Client Name</label>
              <input type="text" id="name" name="name" required className="bg-white/5 border border-white/10 rounded overflow-hidden p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>
          
          <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-xs font-label uppercase tracking-widest text-white/50">Client Role/Title</label>
              <input type="text" id="role" name="role" required className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
              <label htmlFor="text" className="text-xs font-label uppercase tracking-widest text-white/50">Testimonial Quote</label>
              <textarea id="text" name="text" rows={4} required className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors block w-full"></textarea>
          </div>

          <div className="flex flex-col gap-2">
              <label htmlFor="image" className="text-xs font-label uppercase tracking-widest text-white/50">Avatar Image URL (Optional)</label>
              <input type="text" id="image" name="image" placeholder="/assets/avatar.jpg" className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>

          <button type="submit" className="mt-8 bg-accent-gold text-background hover:bg-white transition-colors py-4 rounded font-label text-sm uppercase tracking-widest font-bold">
              Save Testimonial
          </button>
      </form>
    </div>
  );
}
