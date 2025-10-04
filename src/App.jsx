import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeSnippet from './components/CodeSnippet';
import TrustSection from './components/TrustSection';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B11] font-inter text-white antialiased">
      <Navbar />
      <Hero />
      <CodeSnippet />
      <TrustSection />
      <CTA />
      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-5 w-5 rounded-md bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600" />
            <span>Vanish Auth</span>
          </div>
          <p>© {new Date().getFullYear()} Vanish Labs, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
