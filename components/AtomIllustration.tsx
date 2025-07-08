import React from 'react';

export default function AtomIllustration() {
  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center">
      {/* 🔹 Nucleus */}
      <div className="w-10 h-10 bg-gradient-to-tr from-cyan-400 via-purple-400 to-pink-500 rounded-full shadow-2xl z-10" />

      {/* 🔸 Orbit 1 – 45° Diagonal */}
      <div className="absolute w-full h-full animate-spin-slow">
        <div className="w-full h-full border border-cyan-400 rounded-full transform rotate-45 absolute left-0 top-0" />
      </div>

      {/* 🔸 Orbit 2 – 135° Diagonal */}
      <div className="absolute w-full h-full animate-spin-reverse">
        <div className="w-full h-full border border-pink-500 rounded-full transform rotate-[135deg] absolute left-0 top-0" />
      </div>

      {/* 🔸 Orbit 3 – Horizontal */}
      <div className="absolute w-full h-full animate-spin-slower">
        <div className="w-full h-full border border-purple-500 rounded-full transform rotate-0 absolute left-0 top-0" />
      </div>
    </div>
  );
}
