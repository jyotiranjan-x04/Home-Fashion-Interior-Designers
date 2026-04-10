import AdminSidebarClient from '@/components/admin/AdminSidebarClient';
import { signOutAction } from '@/actions/signOutAction';
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row">
      {/* Sidebar is a client component */}
      <AdminSidebarClient />

      {/* Main content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
