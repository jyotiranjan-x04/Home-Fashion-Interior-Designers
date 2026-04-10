import React from 'react';
import prisma from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import { Trash2, Edit } from 'lucide-react';

async function deleteProject(formData: FormData) {
    'use server'
    const id = formData.get('id') as string;
    await prisma.project.delete({ where: { id } });
    revalidatePath('/admin/projects');
}

export default async function AdminProjects() {
    let projects: Awaited<ReturnType<typeof prisma.project.findMany>> = [];
    let dbUnavailable = false;

    try {
        projects = await prisma.project.findMany({
            orderBy: { createdAt: 'desc' }
        });
    } catch (error) {
        dbUnavailable = true;
        console.error('Projects page could not query database:', error);
    }

  return (
    <div className="text-white">
            {dbUnavailable && (
                <div className="mb-6 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
                    Database connection is currently unavailable. Project list could not be loaded.
                </div>
            )}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-headline italic">Projects</h1>
        <Link href="/admin/projects/new" className="bg-accent-gold text-background px-6 py-2 rounded-full font-label text-xs uppercase tracking-widest font-bold hover:bg-accent-terracotta transition-colors">
            + New Project
        </Link>
      </div>

      <div className="bg-surface-container rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-white/10 text-white/50 text-xs font-label uppercase tracking-widest">
                    <th className="p-4 font-normal">Cover</th>
                    <th className="p-4 font-normal">Title</th>
                    <th className="p-4 font-normal">Category</th>
                    <th className="p-4 font-normal">Featured</th>
                    <th className="p-4 font-normal text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {projects.length === 0 && (
                    <tr><td colSpan={5} className="p-8 text-center text-white/50 italic">No projects found. Create one.</td></tr>
                )}
                {projects.map(project => (
                    <tr key={project.id} className="border-b border-white/5 hover:bg-white/5 group">
                        <td className="p-4">
                            <div className="w-16 h-10 bg-white/10 rounded overflow-hidden relative">
                                {project.coverImage && <img src={project.coverImage} className="w-full h-full object-cover" alt="cover" />}
                            </div>
                        </td>
                        <td className="p-4 font-headline text-lg">{project.title}</td>
                        <td className="p-4 text-white/60 text-sm">{project.category}</td>
                        <td className="p-4">
                            {project.featured ? (
                                <span className="bg-accent-gold/20 text-accent-gold px-2 py-1 rounded text-xs">Featured</span>
                            ) : (
                                <span className="bg-white/10 text-white/50 px-2 py-1 rounded text-xs">Standard</span>
                            )}
                        </td>
                        <td className="p-4 text-right flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Link href={`/admin/projects/${project.id}/edit`} className="text-white/50 hover:text-white transition-colors">
                                <Edit size={16} />
                            </Link>
                            <form action={deleteProject}>
                                <input type="hidden" name="id" value={project.id} />
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
