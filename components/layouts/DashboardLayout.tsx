import Link from 'next/link';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-cyan-50 to-teal-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 backdrop-blur-sm shadow-lg p-6 space-y-6">
        <div className="text-2xl font-bold text-teal-600">MoveFit</div>
        
        <nav className="space-y-2">
          <Link href="/" className="flex items-center p-3 rounded-lg text-teal-700 hover:bg-teal-50 transition-colors">
            <span>Goal</span>
          </Link>
          <Link href="/leaderboard" className="flex items-center p-3 rounded-lg text-teal-700 hover:bg-teal-50 transition-colors">
            <span>Leaderboard</span>
          </Link>
          <Link href="/dashboard" className="flex items-center p-3 rounded-lg text-teal-700 hover:bg-teal-50 transition-colors">
            <span>Dashboard</span>
          </Link>
          <Link href="/ai-coach" className="flex items-center p-3 rounded-lg text-teal-700 hover:bg-teal-50 transition-colors">
            <span>AI Coach</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-teal-700">Dashboard</h1>
          <Link 
            href="/profile" 
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-teal-50 transition-colors text-teal-600"
          >
            Profile
          </Link>
        </header>
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
