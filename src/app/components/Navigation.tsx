'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-[var(--card-bg)] backdrop-blur supports-[backdrop-filter]:bg-[var(--card-bg)]/60">
      <div className="container flex h-16 items-center max-w-6xl mx-auto px-4">
        <div className="mr-4 hidden md:flex w-full justify-between items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Sparkles icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[var(--primary)]"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              <path d="M5 3v4" />
              <path d="M19 17v4" />
              <path d="M3 5h4" />
              <path d="M17 19h4" />
            </svg>
            <span className="hidden font-bold sm:inline-block">Kaity&apos;s App</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link 
              href="/" 
              className={`hover:text-[var(--primary)] transition-colors ${pathname === '/' ? 'text-[var(--primary)]' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/counter" 
              className={`hover:text-[var(--primary)] transition-colors ${pathname === '/counter' ? 'text-[var(--primary)]' : ''}`}
            >
              Counter
            </Link>
            <Link 
              href="/todos" 
              className={`hover:text-[var(--primary)] transition-colors ${pathname === '/todos' ? 'text-[var(--primary)]' : ''}`}
            >
              Todos
            </Link>
            <Link 
              href="/snake" 
              className={`hover:text-[var(--primary)] transition-colors ${pathname === '/snake' ? 'text-[var(--primary)]' : ''}`}
            >
              Snake Game
            </Link>
            <Link 
              href="/api-demo" 
              className={`hover:text-[var(--primary)] transition-colors ${pathname === '/api-demo' ? 'text-[var(--primary)]' : ''}`}
            >
              API Demo
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden w-full justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[var(--primary)]"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              <path d="M5 3v4" />
              <path d="M19 17v4" />
              <path d="M3 5h4" />
              <path d="M17 19h4" />
            </svg>
            <span className="font-bold">Kaity&apos;s App</span>
          </Link>
          <button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-[var(--border)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--primary)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
