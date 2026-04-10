import React from 'react';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import { Trash2, Edit } from 'lucide-react';

async function deleteService(formData: FormData) {
    'use server'
    const id = formData.get('id') as string;
    await prisma.service.delete({ where: { id } });
    revalidatePath('/admin/services');
}

export default async function AdminServices() {
    let services: Awaited<ReturnType<typeof prisma.service.findMany>> = [];
    let dbUnavailable = false;

    try {
        services = await prisma.service.findMany({
            orderBy: { priority: 'asc' }
        });
    } catch (error) {
        dbUnavailable = true;
        console.error('Services page could not query database:', error);
    }

  return (
    <div className="text-white">
            {dbUnavailable && (
                <div className="mb-6 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
                    Database connection is currently unavailable. Service list could not be loaded.
                </div>
            )}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-headline italic">Services</h1>
        <Link href="/admin/services/new" className="bg-accent-gold text-background px-6 py-2 rounded-full font-label text-xs uppercase tracking-widest font-bold hover:bg-accent-terracotta transition-colors">
            + New Service
        </Link>
      </div>

      <div className="bg-surface-container rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-white/10 text-white/50 text-xs font-label uppercase tracking-widest">
                    <th className="p-4 font-normal">Image/Icon</th>
                    <th className="p-4 font-normal">Title</th>
                    <th className="p-4 font-normal">Priority</th>
                    <th className="p-4 font-normal text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {services.length === 0 && (
                    <tr><td colSpan={4} className="p-8 text-center text-white/50 italic">No services found. Create one.</td></tr>
                )}
                {services.map(service => (
                    <tr key={service.id} className="border-b border-white/5 hover:bg-white/5 group">
                        <td className="p-4">
                            <div className="w-16 h-10 bg-white/10 rounded overflow-hidden relative flex items-center justify-center text-xs">
                                {service.image ? <img src={service.image} className="w-full h-full object-cover" alt="img" /> : service.icon}
                            </div>
                        </td>
                        <td className="p-4 font-headline text-lg">{service.title}</td>
                        <td className="p-4 text-white/60 text-sm">{service.priority}</td>
                        <td className="p-4 text-right flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <form action={deleteService}>
                                <input type="hidden" name="id" value={service.id} />
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
