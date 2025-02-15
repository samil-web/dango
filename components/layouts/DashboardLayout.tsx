import Link from 'next/link';
import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 space-y-6">
        <div className="text-2xl font-bold">MoveFit</div>
        
        <nav className="space-y-2">
          <Link href="/" className="block p-2 rounded hover:bg-gray-200">
            Goal
          </Link>
          <Link href="/leaderboard" className="block p-2 rounded hover:bg-gray-200">
            Leaderboard
          </Link>
          <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="/ai-coach" className="block p-2 rounded hover:bg-gray-200">
            AI Coach
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Link href="/profile" className="p-2 rounded-full hover:bg-gray-100">
            Profile
          </Link>
        </header>
        {children}
      </main>
    </div>
  );
}
