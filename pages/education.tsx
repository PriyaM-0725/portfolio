import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface EducationItem {
  level: string;
  institution: string;
  year: string;
  score: string;
  details: string;
}

export default function EducationPage() {
  const [education, setEducation] = useState<EducationItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    axios.get('/api/profile').then((res) => {
      setEducation(res.data.education || []);
    });
  }, []);

  const toggleCard = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const cardThemes = [
    {
      gradient: 'from-pink-600 via-pink-500 to-rose-400',
      glow: 'hover:shadow-[0_0_25px_#ec489980]',
    },
    {
      gradient: 'from-purple-600 via-purple-500 to-violet-400',
      glow: 'hover:shadow-[0_0_25px_#a855f780]',
    },
    {
      gradient: 'from-indigo-600 via-indigo-500 to-blue-400',
      glow: 'hover:shadow-[0_0_25px_#6366f180]',
    },
    {
      gradient: 'from-emerald-600 via-emerald-500 to-green-400',
      glow: 'hover:shadow-[0_0_25px_#10b98180]',
    },
    {
      gradient: 'from-yellow-500 via-amber-400 to-orange-400',
      glow: 'hover:shadow-[0_0_25px_#f59e0b80]',
    },
    {
      gradient: 'from-cyan-600 via-sky-500 to-blue-400',
      glow: 'hover:shadow-[0_0_25px_#22d3ee80]',
    },
  ];

  return (
    <>
      <Head>
        <title>Education | Mohanapriya M</title>
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-16 font-sans relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-pink-400 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute top-32 -right-40 w-[500px] h-[500px] bg-cyan-500 opacity-30 blur-3xl rounded-full z-0" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-700 opacity-20 blur-3xl rounded-full z-0" />

        {/* Section Title */}
        <div className="relative z-10 text-center mb-12">
          <h1 className="text-cyan-400 text-sm tracking-widest uppercase mb-2">
            Education Timeline
          </h1>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-500 text-transparent bg-clip-text">
            Educational Qualifications
          </h2>
        </div>

        {/* Education Cards */}
        <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {education.map((item, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 transition-all duration-300 transform backdrop-blur-lg border border-white/10 bg-gradient-to-br ${theme.gradient} ${
                  isOpen
                    ? 'scale-[1.03]'
                    : `hover:-translate-y-2 hover:scale-[1.02] ${theme.glow}`
                }`}
              >
                {/* Education Level Box */}
                <div className="h-28 rounded-xl mb-4 flex items-center justify-center text-white text-xl font-bold text-center px-2 shadow-inner bg-white/10 backdrop-blur-sm border border-white/10">
                  {item.level}
                </div>

                {/* Institution & Year */}
                <h3 className="text-lg font-semibold text-white mb-1">{item.institution}</h3>
                <p className="text-sm text-gray-100">{item.year}</p>
                <p className="text-sm text-gray-200 mt-1 mb-2">Score: {item.score}</p>

                {/* Description */}
                <div className="min-h-[60px] text-justify">
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen && (
                      <motion.div
                        key="desc"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-gray-100 mb-2"
                      >
                        <p>{item.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleCard(idx)}
                  className="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition shadow-md"
                >
                  {isOpen ? 'Less' : 'More'}
                </button>
              </div>
            );
          })}
        </div>

       
      </main>
    </>
  );
}
