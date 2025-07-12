import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import { motion } from 'framer-motion';

interface AiData {
  title: string;
  summary: string;
  role: string;
  techStack: string[];
  features: string[];
  toolsUsed: string[];
  status: string;
}

export default function AiInitiative() {
  const [data, setData] = useState<AiData | null>(null);

  useEffect(() => {
    axios.get('/api/profile').then((res) => {
      setData(res.data.aiInitiative);
    });
  }, []);

  if (!data) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-gray-400">Loading AI initiative...</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title} | Mohanapriya M</title>
      </Head>

      <main className="relative min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-6 py-20 overflow-hidden">
        {/* 🌈 Background Glows */}
        <div className="absolute top-[-80px] left-[-60px] w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />
        <div className="absolute top-[50%] left-[50%] w-[400px] h-[400px] bg-purple-700 opacity-10 blur-3xl rounded-full z-0 transform -translate-x-1/2 -translate-y-1/2" />

        <section className="relative z-10 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-sm tracking-widest uppercase text-cyan-400 mb-2"
          >
            AI & Health Innovation
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            {data.title}
          </motion.h2>

          <div className="space-y-12">
            <FadeCard title="🗒️ Project Summary" content={data.summary} />
            <FadeCard title="👩‍💻 Role" content={data.role} />
            <FadeList title="💻 Tech Stack" items={data.techStack} />
            <FadeList title="✨ Key Features" items={data.features} />
            <FadeList title="⚙️ Tools Used" items={data.toolsUsed} />
            <FadeCard title="📊 Current Status" content={data.status} />
          </div>
        </section>
      </main>
    </>
  );
}

function FadeCard({ title, content }: { title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/70 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:shadow-cyan-500/20 transition"
    >
      <h3 className="text-xl font-semibold text-cyan-300 mb-3">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{content}</p>
    </motion.div>
  );
}

function FadeList({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/70 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:shadow-purple-500/20 transition"
    >
      <h3 className="text-xl font-semibold text-purple-300 mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
