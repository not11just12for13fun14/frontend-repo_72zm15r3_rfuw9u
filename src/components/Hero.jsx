import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark glossy gradient overlay to match theme; pointer events off to retain Spline interaction */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/50 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20 flex flex-col items-start">
        <span className="inline-flex items-center gap-2 rounded-full border border-red-800/60 bg-black/40 px-3 py-1 text-xs text-red-200/80 backdrop-blur">
          <Rocket size={14} className="text-red-400" /> 2nd year undergraduate • Web3 • PERN • Solidity
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-red-300 via-red-400 to-amber-300 drop-shadow-md">
          Building immersive, AI‑powered and blockchain‑backed experiences
        </h1>
        <p className="mt-5 max-w-2xl text-red-100/90 leading-relaxed">
          I love crafting products at the intersection of AI and Web3. From Postgres + Express + React + Node to Solidity smart contracts —
          I focus on clear architecture, performance, and delightful UX.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-red-600 to-amber-600 text-white px-4 py-2 font-medium shadow-lg shadow-red-900/40 hover:brightness-110 transition">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-red-100 px-4 py-2 font-medium transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
