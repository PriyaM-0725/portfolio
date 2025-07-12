// pages/_app.tsx

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white font-sans">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
