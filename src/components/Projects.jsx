import { ShieldCheck, Stethoscope, CalendarCheck2 } from 'lucide-react';

const projects = [
  {
    key: 'clarimeet',
    title: 'ClariMeet',
    tagline: 'An AI meeting organizer',
    icon: CalendarCheck2,
    description:
      'Summarizes, schedules, and follows up on your meetings using LLMs, semantic search, and calendar integrations.',
    tech: ['React', 'Node', 'Express', 'PostgreSQL', 'LLMs'],
    link: '#',
  },
  {
    key: 'cura',
    title: 'Cura',
    tagline: 'An AI healthmate for daily lifestyle',
    icon: Stethoscope,
    description:
      'Your personalized wellness co‑pilot for habits, nutrition, and workouts. Uses embeddings for insights and smart recommendations.',
    tech: ['React Native', 'FastAPI', 'Vector DB', 'LLMs'],
    link: '#',
  },
  {
    key: 'origin',
    title: 'Origin',
    tagline: 'NFC + blockchain product authenticity checker',
    icon: ShieldCheck,
    description:
      'Verifies products from factory to customer using NFC tags bound to on‑chain proofs. Built with Solidity and zk‑friendly design.',
    tech: ['Solidity', 'Hardhat', 'Next.js', 'Polygon'],
    link: '#',
  },
];

function ProjectCard({ icon: Icon, title, tagline, description, tech, link }) {
  return (
    <a
      href={link}
      className="group rounded-2xl border border-red-900/40 bg-gradient-to-b from-white/5 to-white/0 p-5 hover:from-white/10 hover:border-red-700/60 transition shadow-lg shadow-black/30"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white shadow-inner shadow-red-900/40">
            <Icon size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-100">{title}</h3>
            <p className="text-sm text-red-200/80">{tagline}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 text-red-100/90 leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md bg-black/40 border border-red-900/40 text-red-200/90"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-300">
        Explore →
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-black to-black/95">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-800/60 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-100">Featured Projects</h2>
        <p className="mt-2 text-red-200/80 max-w-2xl">
          A selection of work spanning AI assistants, Web3 security, and real‑world applications.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.key} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
