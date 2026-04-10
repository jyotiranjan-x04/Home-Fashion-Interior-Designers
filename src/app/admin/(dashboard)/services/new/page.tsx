import React from 'react';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function createService(formData: FormData) {
    'use server'
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const image = formData.get('image') as string;
    const icon = formData.get('icon') as string;
    const priority = parseInt(formData.get('priority') as string) || 0;

    await prisma.service.create({
        data: {
            title,
            description,
            image,
            icon,
            priority,
        }
    });

    redirect('/admin/services');
}

export default function NewService() {
  return (
    <div className="text-white max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/admin/services" className="text-white/50 hover:text-white text-xs uppercase tracking-widest mb-4 inline-block">&larr; Back to Services</Link>
        <h1 className="text-4xl font-headline italic">New Service</h1>
      </div>

      <form action={createService} className="bg-surface-container rounded-2xl border border-white/5 p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-xs font-label uppercase tracking-widest text-white/50">Service Title</label>
              <input type="text" id="title" name="title" required className="bg-white/5 border border-white/10 rounded overflow-hidden p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>
          
          <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-xs font-label uppercase tracking-widest text-white/50">Description</label>
              <textarea id="description" name="description" rows={3} required className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors w-full"></textarea>
          </div>

          <div className="flex flex-col gap-2">
              <label htmlFor="image" className="text-xs font-label uppercase tracking-widest text-white/50">Image URL (Optional)</label>
              <input type="text" id="image" name="image" placeholder="/assets/image.png" className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
              <label htmlFor="icon" className="text-xs font-label uppercase tracking-widest text-white/50">Icon Name (Lucide string)</label>
              <input type="text" id="icon" name="icon" placeholder="Compass" className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
              <label htmlFor="priority" className="text-xs font-label uppercase tracking-widest text-white/50">Priority (Sort Order)</label>
              <input type="number" id="priority" name="priority" defaultValue="0" className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>

          <button type="submit" className="mt-8 bg-accent-gold text-background hover:bg-white transition-colors py-4 rounded font-label text-sm uppercase tracking-widest font-bold">
              Save Service
          </button>
      </form>
    </div>
  );
}
