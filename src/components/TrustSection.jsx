import { Shield, Lock, Globe, Server } from 'lucide-react';

function TrustCard({ icon: Icon, title, children }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/10">
      <div className="mb-3 flex items-center gap-2 text-white">
        <Icon className="h-4 w-4 text-cyan-400" />
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <p className="text-sm leading-6 text-gray-300">{children}</p>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">Security that earns trust</h3>
          <p className="mt-2 max-w-2xl text-sm text-gray-300">
            WebAuthn-native. FIDO2 certified flows, signed challenges, and hardware-backed keys. We eliminate passwords and reduce phishing to zero.
          </p>
        </div>
        <a href="#docs" className="text-xs font-medium text-cyan-300 hover:text-cyan-200">Read the security brief →</a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <TrustCard icon={Shield} title="FIDO2 / WebAuthn">
          Passkey-first across browsers and devices. Native biometrics with cryptographic attestation.
        </TrustCard>
        <TrustCard icon={Lock} title="Zero secrets at rest">
          No shared secrets. Signed nonces, rotating keys, and short-lived tokens by default.
        </TrustCard>
        <TrustCard icon={Server} title="Edge-first infra">
          Sessions at the edge for sub-50ms auth. Regional isolation and EU residency options.
        </TrustCard>
        <TrustCard icon={Globe} title="Compliance-ready">
          Built with SOC2 and GDPR in mind. Audit trails, SSO, and enterprise controls.
        </TrustCard>
      </div>
    </section>
  );
}
