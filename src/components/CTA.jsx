import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="waitlist" className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_80%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(500px_200px_at_20%_90%,rgba(99,102,241,0.25),transparent)]" />
        <div className="relative z-10 grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-2 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium uppercase tracking-widest text-white/70">
              <Sparkles className="h-3 w-3 text-cyan-300" />
              Private beta
            </div>
            <h3 className="text-2xl font-semibold text-white">Be first to ship auth that disappears</h3>
            <p className="mt-2 text-sm text-gray-300">Join the waitlist to get early access, sample apps, and migration guides.</p>
          </div>
          <form className="relative flex flex-col gap-3 md:flex-row">
            <input
              type="email"
              required
              placeholder="your@company.com"
              className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-cyan-400/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110"
            >
              Join waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
