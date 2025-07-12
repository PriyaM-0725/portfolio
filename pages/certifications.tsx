import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export default function CertificationsPage() {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Theme: button color, title gradient, and matching glow
  const cardThemes = [
    {
      btn: 'bg-pink-300',
      text: 'bg-gradient-to-r from-pink-400 to-pink-600',
      glow: 'hover:shadow-[0_0_15px_#f472b680]',
    },
    {
      btn: 'bg-cyan-300',
      text: 'bg-gradient-to-r from-cyan-400 to-cyan-600',
      glow: 'hover:shadow-[0_0_15px_#22d3ee80]',
    },
    {
      btn: 'bg-purple-300',
      text: 'bg-gradient-to-r from-purple-400 to-purple-600',
      glow: 'hover:shadow-[0_0_15px_#d8b4fe80]',
    },
    {
      btn: 'bg-blue-300',
      text: 'bg-gradient-to-r from-blue-400 to-blue-600',
      glow: 'hover:shadow-[0_0_15px_#93c5fd80]',
    },
    {
      btn: 'bg-emerald-300',
      text: 'bg-gradient-to-r from-emerald-400 to-emerald-600',
      glow: 'hover:shadow-[0_0_15px_#6ee7b780]',
    },
    {
      btn: 'bg-yellow-300',
      text: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
      glow: 'hover:shadow-[0_0_15px_#fde68a80]',
    },
  ];

  useEffect(() => {
    axios.get('/api/profile').then((res) => {
      setCerts(res.data.certifications || []);
    });
  }, []);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <Head>
        <title>Certifications | Mohanapriya M</title>
      </Head>

      <main className="relative min-h-screen bg-gray-900 text-white px-6 py-16 font-sans overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-10 -left-20 w-[300px] h-[300px] bg-cyan-400 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-24 w-[350px] h-[350px] bg-pink-300 opacity-10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h1 className="text-center text-cyan-400 text-sm tracking-widest uppercase mb-2">
            Achievements
          </h1>
          <h2 className="text-center text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Certifications
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {certs.map((cert, idx) => {
              const isOpen = idx === openIndex;
              const theme = cardThemes[idx % cardThemes.length];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`rounded-xl p-6 bg-gray-800/70 border border-gray-700 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? `scale-[1.01] ${theme.glow}`
                        : `${theme.glow}`
                    }`}
                >
                  {/* Header row */}
                  <div
                    className={`relative flex items-center ${
                      isOpen ? 'justify-start' : 'justify-center'
                    } transition-all duration-300`}
                  >
                    {/* Title */}
                    <h3
                      className={`text-xl font-semibold transition-all duration-300 ${
                        isOpen
                          ? 'text-white'
                          : `${theme.text} text-transparent bg-clip-text`
                      }`}
                    >
                      {cert.title}
                    </h3>

                    {/* Toggle button */}
                    <button
                      onClick={() => toggle(idx)}
                      className={`${theme.btn} w-8 h-8 flex items-center justify-center rounded-full absolute right-0 transition-transform duration-300`}
                    >
                      <span className="!text-black text-lg font-bold">
                        {isOpen ? '✕' : '+'}
                      </span>
                    </button>
                  </div>

                  {/* Details */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 text-sm text-gray-300 text-left"
                      >
                        <p className="text-gray-400">
                          {cert.organization} — {cert.year}
                        </p>
                        <p className="mt-2 text-justify">{cert.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          
        </div>
      </main>
    </>
  );
}
