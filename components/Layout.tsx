import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode } from 'react';

const navItems = [
  { label: 'Education', path: '/education' },
  { label: 'Tech Stack', path: '/tech-stack' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'AI Initiative', path: '/ai-initiative' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-sans relative overflow-hidden">
      {/* 🔹 Header */}
      <header className="sticky top-0 z-50 bg-gray-950 bg-opacity-80 backdrop-blur-md shadow-md px-10 py-6 rounded-xl">
        <nav className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center text-sm sm:text-base">
          <h1 className="text-cyan-400 font-bold text-xl">Mohanapriya M</h1>
          <div className="flex gap-6 flex-wrap mt-4 sm:mt-0">
            {navItems.map(({ label, path }) => {
              const isActive = router.pathname === path;
              return (
                <Link key={label} href={path}>
                  <span
                    className={`px-4 py-2 rounded-lg cursor-pointer transition
                      ${isActive
                        ? 'bg-cyan-500 text-white shadow-md'
                        : 'bg-gray-800 hover:bg-cyan-500 hover:text-white text-cyan-300'
                      }`}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
