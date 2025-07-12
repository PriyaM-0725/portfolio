import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Tech Stack', path: '/tech-stack' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'AI Initiative', path: '/ai-initiative' },
];

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="px-6 pt-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between text-sm sm:text-base 
        backdrop-blur-xl bg-black/50 rounded-xl px-6 py-4 transition-all duration-300">
        <h1 className="text-cyan-400 font-bold text-xl">Mohanapriya M</h1>

        {/* Hamburger Icon (Mobile) */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-cyan-300 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-6">
          {navItems.map(({ label, path }) => (
            <Link key={path} href={path} legacyBehavior>
              <a
                className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                  router.pathname === path
                    ? 'bg-cyan-500 text-white shadow-md'
                    : 'bg-black/30 text-cyan-300 hover:bg-cyan-500 hover:text-white'
                }`}
              >
                {label}
              </a>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="sm:hidden bg-black/80 backdrop-blur-xl rounded-xl mx-6 mt-2 py-4 px-4 space-y-4">
          {navItems.map(({ label, path }) => (
            <Link key={path} href={path} legacyBehavior>
              <a
                onClick={() => {
                  closeMenu();
                  router.push(path);
                }}
                className={`block px-4 py-2 rounded-lg transition cursor-pointer text-center ${
                  router.pathname === path
                    ? 'bg-cyan-500 text-white shadow-md'
                    : 'bg-black/30 text-cyan-300 hover:bg-cyan-500 hover:text-white'
                }`}
              >
                {label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
