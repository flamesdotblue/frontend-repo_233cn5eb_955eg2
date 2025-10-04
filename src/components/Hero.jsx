import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative flex min-h-[78vh] w-full items-center justify-center overflow-hidden bg-[#070B11]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_20%,rgba(59,130,246,0.25),transparent),radial-gradient(600px_300px_at_20%_70%,rgba(16,185,129,0.18),transparent)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
          New • Passwordless for devs
        </span>
        <h1 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-6xl">
          Auth that disappears.
        </h1>
        <p className="max-w-2xl text-balance text-base leading-7 text-gray-300 md:text-lg">
          Ship biometric logins in one line. WebAuthn-first, device-native, and built for modern stacks. No passwords, no friction—just users that flow.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#code" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:brightness-110">
            Get the snippet
          </a>
          <a href="#waitlist" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10">
            Join waitlist
          </a>
        </div>
        <div className="mt-4 text-[11px] uppercase tracking-widest text-white/50">
          FIDO2 • WebAuthn • Passkeys • iOS • Android • Web
        </div>
      </div>
    </section>
  );
}
