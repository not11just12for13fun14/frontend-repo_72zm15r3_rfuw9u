import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-red-900/40 bg-black py-6 text-center text-red-200/70">
      <p>
        © {new Date().getFullYear()} Your Name • Built with React • Theme: dark glossy red
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
