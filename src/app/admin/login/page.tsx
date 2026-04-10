'use client';
import React, { useActionState } from 'react';
import { authenticate } from '@/lib/actions/auth';
import { Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center px-6 relative overflow-hidden">
        
       {/* Background Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-accent-gold/5 blur-[120px] pointer-events-none rounded-full"></div>

       <div className="w-full max-w-md z-10">
           <div className="text-center mb-12">
               <h1 className="font-headline text-5xl text-white italic mb-4">Atelier</h1>
               <span className="text-accent-gold font-label text-xs uppercase tracking-[0.3em] font-bold">Admin Portal</span>
           </div>

           <form action={formAction} className="bg-surface liquid-glass p-10 rounded-3xl border border-white/5 shadow-2xl flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white/50 text-xs uppercase tracking-widest font-label">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-gold transition-colors"
                        placeholder="admin@atelier.com"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-white/50 text-xs uppercase tracking-widest font-label">Password</label>
                    <div className="relative">
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            className="bg-background/50 w-full border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-gold transition-colors"
                            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                        />
                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
                    </div>
                </div>

                {errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg text-center mt-2">
                        {errorMessage}
                    </div>
                )}

                <button 
                    type="submit" 
                    disabled={isPending}
                    className="mt-6 bg-white text-background hover:bg-accent-gold hover:text-white transition-all duration-300 py-4 rounded-xl font-label text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    {isPending ? 'Authenticating...' : 'Sign In'}
                    {!isPending && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> }
                </button>
           </form>

           <div className="text-center mt-12 text-white/30 text-xs uppercase tracking-widest">
               &copy; {new Date().getFullYear()} Architectural Noir
           </div>
       </div>
    </div>
  );
}
