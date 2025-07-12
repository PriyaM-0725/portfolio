import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
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
      <main className="min-h-screen bg-gray-900 text-white p-10 text-center">
        <p className="text-gray-400">Loading AI initiative...</p>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title} | Mohanapriya M</title>
      </Head>

      <main className="relative min-h-screen bg-gray-900 text-white px-6 py-16 font-sans overflow-hidden">
        {/* 🌈 Background Glows */}
        <div className="absolute top-[-100px] right-[-80px] w-[350px] h-[350px] bg-cyan-400 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-[-120px] left-[-100px] w-[400px] h-[400px] bg-pink-700 opacity-10 blur-3xl rounded-full z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />

        <section className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-center text-cyan-400 text-sm tracking-widest uppercase mb-2">
            AI & Health Innovation
          </h1>
          <h2 className="text-center text-4xl font-bold mb-12">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {data.title}
            </span>
          </h2>

          <div className="space-y-10">
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

// 🔹 Reusable Motion Card
function FadeCard({ title, content }: { title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 border border-cyan-600 rounded-xl p-6 shadow-md hover:shadow-cyan-400/30 transition"
    >
      <h3 className="text-xl font-semibold text-cyan-300 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base">{content}</p>
    </motion.div>
  );
}

// 🔹 Reusable Motion List
function FadeList({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gray-800 border border-cyan-600 rounded-xl p-6 shadow-md hover:shadow-cyan-400/30 transition"
    >
      <h3 className="text-xl font-semibold text-cyan-300 mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-300">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
