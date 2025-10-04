import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#0B0F15]/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600" />
          <span className="text-sm font-semibold tracking-wide text-white">Vanish Auth</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#code" className="hover:text-white">Code</a>
          <a href="#security" className="hover:text-white">Security</a>
          <a href="#docs" className="hover:text-white">Docs</a>
        </nav>
        <a href="#waitlist" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/10 transition hover:bg-white/15">
          Join waitlist
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
