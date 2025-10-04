import { useState } from 'react';
import { Copy, Check, Code2 } from 'lucide-react';

const snippets = {
  js: `// 1) Install SDK\n// npm i @vanish/auth\n\n// 2) One line to launch biometric login\nimport { login } from '@vanish/auth'\nawait login()\n\n// That's it — passkeys with WebAuthn.`,
  ts: `// 1) Install SDK\n// pnpm add @vanish/auth\n\n// 2) One line to launch biometric login\nimport { login } from '@vanish/auth'\nawait login()\n\n// Full typings and ESLint-friendly.`,
  py: `# FastAPI example\n# pip install vanish-auth\nfrom vanish import login\nlogin()  # opens WebAuthn/passkey prompt`,
};

export default function CodeSnippet() {
  const [tab, setTab] = useState('js');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(snippets[tab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="code" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/80">
          <Code2 className="h-4 w-4" />
          <h3 className="text-sm font-semibold tracking-wide">One-line biometrics</h3>
        </div>
        <div className="flex overflow-hidden rounded-md border border-white/10 bg-white/5 text-xs text-white/80">
          {['js', 'ts', 'py'].map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-3 py-1.5 transition ${tab === k ? 'bg-white/10 text-white' : 'hover:bg-white/10'}`}
            >
              {k.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="relative rounded-xl border border-white/10 bg-[#0B0F15] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]">
        <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-lg bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-4 text-[13px] leading-6 text-cyan-100">
{snippets[tab]}
        </pre>
        <button
          onClick={copy}
          className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />} 
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </section>
  );
}
