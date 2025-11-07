import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/50 border-b border-red-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 via-red-600 to-amber-600 shadow-lg shadow-red-900/40" />
          <span className="text-red-100 font-semibold tracking-wide">Your Name</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-red-100/90">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-red-100 transition">
            <Github size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-red-100 transition">
            <Linkedin size={18} />
          </a>
          <a href="#contact" aria-label="Email" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-red-100 transition">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
