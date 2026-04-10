import React from 'react';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import { Trash2 } from 'lucide-react';

async function deleteTestimonial(formData: FormData) {
    'use server'
    const id = formData.get('id') as string;
    await prisma.testimonial.delete({ where: { id } });
    revalidatePath('/admin/testimonials');
}

type Testimonial = {
  id: string;
  name: string;
  role: string;
  text: string;
  // Add other fields as needed from your schema
};

export default async function AdminTestimonials() {
    let testimonials: Testimonial[] = [];
    let dbUnavailable = false;

    try {
        testimonials = await prisma.testimonial.findMany({
            orderBy: { createdAt: 'desc' }
        });
    } catch (error) {
        dbUnavailable = true;
        console.error('Testimonials page could not query database:', error);
    }

  return (
    <div className="text-white">
            {dbUnavailable && (
                <div className="mb-6 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
                    Database connection is currently unavailable. Testimonial list could not be loaded.
                </div>
            )}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-headline italic">Testimonials</h1>
        <Link href="/admin/testimonials/new" className="bg-accent-gold text-background px-6 py-2 rounded-full font-label text-xs uppercase tracking-widest font-bold hover:bg-accent-terracotta transition-colors">
            + New Testimonial
        </Link>
      </div>

      <div className="bg-surface-container rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-white/10 text-white/50 text-xs font-label uppercase tracking-widest">
                    <th className="p-4 font-normal">Author</th>
                    <th className="p-4 font-normal">Role</th>
                    <th className="p-4 font-normal">Quote</th>
                    <th className="p-4 font-normal text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {testimonials.length === 0 && (
                    <tr><td colSpan={4} className="p-8 text-center text-white/50 italic">No testimonials found. Create one.</td></tr>
                )}
                {testimonials.map((testimonial: Testimonial) => (
                    <tr key={testimonial.id} className="border-b border-white/5 hover:bg-white/5 group">
                        <td className="p-4 font-headline text-lg">{testimonial.name}</td>
                        <td className="p-4 text-white/60 text-sm">{testimonial.role}</td>
                        <td className="p-4 text-white/80 text-sm italic truncate max-w-xs block">"{testimonial.text}"</td>
                        <td className="p-4 text-right">
                            <form action={deleteTestimonial} className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                <input type="hidden" name="id" value={testimonial.id} />
                                <button type="submit" className="text-white/50 hover:text-red-500 transition-colors" title="Delete">
                                    <Trash2 size={16} />
                                </button>
                            </form>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}
