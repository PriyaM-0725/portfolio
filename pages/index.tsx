import Head from 'next/head';
import axios from 'axios';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import NeonAtom from '@/components/NeonAtom';

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  github: string;
  resumeLink: string;
}

export default function Home({ profile }: { profile: ProfileData }) {
  return (
    <>
      <Head>
        <title>{`${profile.name} | Portfolio`}</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-sans relative overflow-hidden">
        {/* 🔹 Background Glows */}
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-cyan-500 opacity-30 blur-3xl rounded-full z-0" />
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-400 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute top-[45%] left-[50%] w-[500px] h-[500px] bg-purple-700 opacity-15 blur-3xl rounded-full z-0 transform -translate-x-1/2 -translate-y-1/2" />

        

        {/* 🔹 Landing Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content Without Translucent Box */}
          <div>
            <h1 className="text-sm text-cyan-400 tracking-widest uppercase mb-2">
              Hello, I'm
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-4">
              {profile.name}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-pink-400 mb-6">
              {profile.title}
            </h3>

            <div className="flex flex-wrap gap-4">
              <a
                href={profile.resumeLink}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition"
                download
              >
                Download CV
              </a>
              <a
                href={profile.github}
                className="border border-cyan-500 hover:bg-cyan-500 text-cyan-500 hover:text-white px-6 py-3 rounded-full transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Neon Atom Right Side */}
          <div className="hidden md:flex justify-center items-center -mt-10">
  <div className="w-full max-w-[520px]">
    <NeonAtom />
  </div>
</div>



        </section>
      {/* 🔹 About Section */}
<section id="about" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
  <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl">
    <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
      About
    </h2>
    <p className="text-gray-300 leading-relaxed text-lg text-justify">
      I’m <span className="text-pink-400 font-semibold">Mohanapriya M</span>, a passionate Front-End Developer and UI/UX Designer dedicated to crafting digital experiences that are intuitive, engaging, and accessible. My approach blends creative design with clean, maintainable code to bring ideas to life.
      <br /><br />
      With a strong foundation in <span className="text-cyan-400 font-semibold">HTML, CSS, JavaScript, and React</span>, I specialize in building responsive user interfaces with modern design principles. I enjoy turning complex problems into simple, beautiful solutions.
      <br /><br />
      Whether it’s prototyping UI concepts or optimizing performance, I believe in delivering thoughtful, user-centered results — with attention to detail and a deep curiosity for learning.
    </p>
  </div>
</section>
        {/* 📬 Contact Form Section */}
        <section className="relative z-10 bg-gray-950 text-white px-6 py-20 border-t border-gray-800 mt-10">
          <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-cyan-400 opacity-10 rounded-full blur-3xl z-0" />
          <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-pink-500 opacity-10 rounded-full blur-3xl z-0" />
          <div className="absolute top-[40%] left-[45%] w-[250px] h-[250px] bg-purple-500 opacity-10 rounded-full blur-2xl z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-center text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Let’s Work Together
            </h2>
            <p className="text-center text-gray-400 mb-10 max-w-xl mx-auto">
              Got an idea, opportunity, or just want to say hi? Send me a message and let’s connect!
            </p>

            <form className="bg-gray-800 bg-opacity-60 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6 shadow-xl">
              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-900 border border-cyan-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-900 border border-pink-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-gray-900 border border-purple-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 px-8 py-3 text-white rounded-full font-medium shadow-lg transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* 🔻 Footer */}
        <footer className="relative z-10 bg-gray-950 border-t border-gray-800 px-6 py-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mohanapriya M. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile`);

  const profile: ProfileData = res.data;
  return {
    props: { profile },
    revalidate: 60, // Rebuild every 60s
  };
};
