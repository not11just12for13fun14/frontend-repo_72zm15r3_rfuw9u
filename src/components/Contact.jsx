import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-black/95 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border border-red-900/40 bg-gradient-to-b from-white/5 to-white/0 p-6 sm:p-10 shadow-xl shadow-black/40">
            <h2 className="text-3xl font-bold text-red-100">Get in touch</h2>
            <p className="mt-3 text-red-200/85">Open to internships, collaborations, and hackathons.</p>
            <div className="mt-6 flex items-center gap-3 text-red-200/90">
              <Mail size={18} className="text-red-400" />
              <a href="mailto:youremail@example.com" className="hover:text-white transition">youremail@example.com</a>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-red-900/40 bg-black/40 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-red-200/80">Name</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md bg-black/60 border border-red-900/50 px-3 py-2 text-red-100 placeholder-red-200/40 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-red-200/80">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md bg-black/60 border border-red-900/50 px-3 py-2 text-red-100 placeholder-red-200/40 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-red-200/80">Message</label>
              <textarea
                rows={5}
                className="mt-1 w-full rounded-md bg-black/60 border border-red-900/50 px-3 py-2 text-red-100 placeholder-red-200/40 focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Let's build something great together."
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-red-600 to-amber-600 text-white px-4 py-2 font-medium shadow-lg shadow-red-900/40 hover:brightness-110 transition"
            >
              Send <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
