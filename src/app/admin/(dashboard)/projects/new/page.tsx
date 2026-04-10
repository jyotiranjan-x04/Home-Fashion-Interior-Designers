import React from 'react';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function createProject(formData: FormData) {
    'use server'
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const description = formData.get('description') as string;
    const coverImage = formData.get('coverImage') as string;
    const featured = formData.get('featured') === 'on';

    await prisma.project.create({
        data: {
            title,
            category,
            description,
            coverImage,
            featured,
            images: [], // Can implement multiple images array later
        }
    });

    redirect('/admin/projects');
}

export default function NewProject() {
  return (
    <div className="text-white max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/admin/projects" className="text-white/50 hover:text-white text-xs uppercase tracking-widest mb-4 inline-block">&larr; Back to Projects</Link>
        <h1 className="text-4xl font-headline italic">New Project</h1>
      </div>

      <form action={createProject} className="bg-surface-container rounded-2xl border border-white/5 p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-xs font-label uppercase tracking-widest text-white/50">Project Title</label>
              <input type="text" id="title" name="title" required className="bg-white/5 border border-white/10 rounded overflow-hidden p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>
          
          <div className="flex flex-col gap-2">
              <label htmlFor="category" className="text-xs font-label uppercase tracking-widest text-white/50">Category</label>
              <input type="text" id="category" name="category" required className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-xs font-label uppercase tracking-widest text-white/50">Description</label>
              <textarea id="description" name="description" rows={4} required className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors block w-full"></textarea>
          </div>

          <div className="flex flex-col gap-2">
              <label htmlFor="coverImage" className="text-xs font-label uppercase tracking-widest text-white/50">Cover Image URL</label>
              <input type="text" id="coverImage" name="coverImage" required placeholder="/assets/image.jpg" className="bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-accent-gold transition-colors" />
          </div>

          <div className="flex items-center gap-3 mt-2">
              <input type="checkbox" id="featured" name="featured" className="w-5 h-5 rounded border-white/10 bg-white/5 accent-accent-gold" />
              <label htmlFor="featured" className="text-sm font-label uppercase tracking-widest text-white/70">Featured Project</label>
          </div>

          <button type="submit" className="mt-8 bg-accent-gold text-background hover:bg-white transition-colors py-4 rounded font-label text-sm uppercase tracking-widest font-bold">
              Save Project
          </button>
      </form>
    </div>
  );
}
