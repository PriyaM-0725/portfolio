import Head from 'next/head';
import axios from 'axios';
import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import NeonAtom from '@/components/NeonAtom';

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  github: string;
  resumeLink: string;
}

export default function Home({ profile }: { profile: ProfileData | null }) {
  if (!profile) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white">
        <h1>⚠️ Failed to load profile (SSR error)</h1>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{`${profile.name} | Portfolio`}</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-sans relative overflow-hidden">
        {/* background, header, sections unchanged */}

        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
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

          <div className="hidden md:flex justify-center items-center -mt-10">
            <div className="w-full max-w-[520px]">
              <NeonAtom />
            </div>
          </div>
        </section>

        {/* other sections remain unchanged */}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const protocol = context.req.headers['x-forwarded-proto'] || 'https';
  const host = context.req.headers.host;
  const baseUrl = `${protocol}://${host}`;

  try {
    const res = await axios.get(`${baseUrl}/api/profile`);
    const profile: ProfileData = res.data;

    return {
      props: { profile },
    };
  } catch (err) {
    console.error('SSR failed:', err);
    return {
      props: { profile: null },
    };
  }
};
