import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaCode,
  FaPython,
  FaJava,
  FaHtml5,
  FaPaintBrush,
  FaGitAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';

interface TechCategory {
  label: string;
  items: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  'C Programming': <FaCode className="text-cyan-400 text-4xl" />,
  Python: <FaPython className="text-yellow-400 text-4xl" />,
  Java: <FaJava className="text-orange-500 text-4xl" />,
  'Front-End Development': <FaHtml5 className="text-orange-400 text-4xl" />,
  'UI/UX Design': <FaPaintBrush className="text-pink-400 text-4xl" />,
  'Version Control': <FaGitAlt className="text-red-400 text-4xl" />,
};

export default function TechStackPage() {
  const [stack, setStack] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/api/profile').then((res) => {
      setStack(res.data.techStack || []);
    });
  }, []);

  const categories: TechCategory[] = [
    {
      label: 'Languages',
      items: stack.filter((skill) =>
        ['C Programming', 'Python', 'Java'].includes(skill)
      ),
    },
    {
      label: 'Frontend',
      items: stack.filter((skill) => skill === 'Front-End Development'),
    },
    {
      label: 'Design',
      items: stack.filter((skill) => skill === 'UI/UX Design'),
    },
    {
      label: 'Tools',
      items: stack.filter((skill) => skill === 'Version Control'),
    },
  ];

  return (
    <>
      <Head>
        <title>Tech Stack | Mohanapriya M</title>
      </Head>

      <main className="min-h-screen bg-black text-white px-6 py-16 font-sans relative overflow-hidden">
        {/* 🔹 Background Glows */}
        <div className="absolute top-[-100px] right-[-80px] w-[350px] h-[350px] bg-pink-400 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-[-120px] left-[-100px] w-[400px] h-[400px] bg-purple-700 opacity-10 blur-3xl rounded-full z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-700 opacity-15 blur-3xl rounded-full z-0" />

        {/* 🔹 Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-12"
        >
          <h1 className="text-cyan-400 text-sm tracking-widest uppercase mb-2">
            What I Use
          </h1>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-300 to-pink-400 text-transparent bg-clip-text">
            My Technical Stack
          </h2>
        </motion.div>

        {/* 🔹 Content */}
        <div className="relative z-10 space-y-12 max-w-6xl mx-auto">
          {categories.map((category, catIdx) =>
            category.items.length > 0 ? (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.2 }}
              >
                <h3 className="text-xl text-cyan-300 font-semibold mb-6 border-b border-cyan-700 pb-2">
                  {category.label}
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {category.items.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="bg-gray-800 border border-cyan-600 rounded-2xl p-6 flex flex-col items-center text-center transition transform hover:shadow-cyan-400/40 shadow-md"
                    >
                      <div className="mb-4">{iconMap[tech]}</div>
                      <h4 className="text-lg font-medium text-cyan-100">
                        {tech}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : null
          )}
        </div>

       
      </main>
    </>
  );
}
