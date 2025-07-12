// components/Header.tsx

import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { label: 'Home', path: '/index' },
  { label: 'Education', path: '/education' },
  { label: 'Tech Stack', path: '/tech-stack' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'AI Initiative', path: '/ai-initiative' },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-gray-950 bg-opacity-80 backdrop-blur-md shadow-md px-10 py-6 rounded-xl mb-6 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex flex-wrap justify-center sm:justify-between items-center text-sm sm:text-base">
        <h1 className="text-cyan-400 font-bold text-xl">Mohanapriya M</h1>
        <div className="flex gap-6 flex-wrap mt-4 sm:mt-0">
          {navItems.map(({ label, path }) => (
            <Link key={path} href={path}>
              <span
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                  router.pathname === path
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-cyan-300 hover:bg-cyan-500 hover:text-white'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
