import React from 'react';
import prisma from '@/lib/prisma';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  let projectCount = 0;
  let serviceCount = 0;
  let testimonialCount = 0;
  let dbUnavailable = false;

  try {
    [projectCount, serviceCount, testimonialCount] = await Promise.all([
      prisma.project.count(),
      prisma.service.count(),
      prisma.testimonial.count(),
    ]);
  } catch (error) {
    dbUnavailable = true;
    console.error('Admin dashboard could not query database:', error);
  }

  return (
    <div className="text-white">
      {dbUnavailable && (
        <div className="mb-6 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">
          Database connection is currently unavailable. Showing safe fallback values.
        </div>
      )}
      <h1 className="text-4xl font-headline italic mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface-container liquid-glass p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
            <span className="text-accent-terracotta text-sm uppercase tracking-widest font-label mb-2">Total Projects</span>
            <span className="text-5xl font-headline text-white">{projectCount}</span>
            <Link href="/admin/projects" className="mt-4 text-xs text-white/50 hover:text-white uppercase tracking-wider underline">Manage Projects</Link>
        </div>
        <div className="bg-surface-container liquid-glass p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
            <span className="text-accent-gold text-sm uppercase tracking-widest font-label mb-2">Total Services</span>
            <span className="text-5xl font-headline text-white">{serviceCount}</span>
            <Link href="/admin/services" className="mt-4 text-xs text-white/50 hover:text-white uppercase tracking-wider underline">Manage Services</Link>
        </div>
        <div className="bg-surface-container liquid-glass p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
            <span className="text-white/60 text-sm uppercase tracking-widest font-label mb-2">Total Testimonials</span>
            <span className="text-5xl font-headline text-white">{testimonialCount}</span>
            <Link href="/admin/testimonials" className="mt-4 text-xs text-white/50 hover:text-white uppercase tracking-wider underline">Manage Testimonials</Link>
        </div>
      </div>

      <div className="bg-surface-container-high rounded-2xl p-8 border border-white/5">
        <h2 className="text-xl font-headline mb-4">Recent Activity</h2>
        <p className="text-white/50 text-sm">System functioning normally. Database connected to Neon PostgreSQL.</p>
        {/* We can add a list of latest projects or updates here later */}
      </div>
    </div>
  );
}
