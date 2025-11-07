export default function About() {
  return (
    <section id="about" className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-red-900/40 bg-gradient-to-b from-white/5 to-white/0 p-6 sm:p-10 shadow-xl shadow-black/40">
          <h2 className="text-3xl font-bold text-red-100">About</h2>
          <p className="mt-4 text-red-100/90 leading-relaxed max-w-3xl">
            I'm a second‑year undergraduate passionate about systems that blend AI with decentralized tech. My toolkit includes PostgreSQL, Express, React, Node, and Solidity.
            I enjoy shaping clean APIs, performant frontends, and robust on‑chain components.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            {['React', 'Node.js', 'Express', 'PostgreSQL', 'Solidity', 'Hardhat', 'Web3', 'Tailwind'].map((s) => (
              <div key={s} className="rounded-md border border-red-900/40 bg-black/40 px-3 py-2 text-red-200/90">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
