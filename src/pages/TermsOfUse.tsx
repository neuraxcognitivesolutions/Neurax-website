import { useState } from 'react';
import { CheckCircle, Monitor, Copyright, AlertTriangle, Shield, Gavel, Check } from 'lucide-react';

const termItems = [
  {
    icon: <CheckCircle size={20} className="text-blue-600" />,
    title: '1. Acceptance of Terms',
    desc: 'By using our website and solutions, you agree to these Terms & Conditions and our Privacy Policy.'
  },
  {
    icon: <Monitor size={20} className="text-blue-600" />,
    title: '2. Use of the Website',
    desc: 'Our website and solutions are for informational and professional use only. You agree not to use the platform for any unlawful purpose.'
  },
  {
    icon: <Copyright size={20} className="text-blue-600" />,
    title: '3. Intellectual Property',
    desc: 'All content, trademarks, logos, and materials on this website are the property of NeuraX and are protected by applicable laws.'
  },
  {
    icon: <AlertTriangle size={20} className="text-blue-600" />,
    title: '4. Disclaimers',
    desc: 'NeuraX solutions are under development and clinical validation. Content is provided "as is" without warranties of any kind.'
  },
  {
    icon: <Shield size={20} className="text-blue-600" />,
    title: '5. Limitation of Liability',
    desc: 'NeuraX shall not be liable for any indirect, incidental, or consequential damages arising from use of our platform.'
  },
  {
    icon: <Gavel size={20} className="text-blue-600" />,
    title: '6. Governing Law',
    desc: 'These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws.'
  }
];

export default function TermsOfUse() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("neuraxcognitivesolutions@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="hero-gradient py-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
          <h1 className="text-slate-900 text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-slate-655 text-sm leading-relaxed max-w-xl">
            Welcome to NeuraX Cognitive Solutions Pvt. Ltd. ("NeuraX"). By accessing or using our website and services, you agree to be bound by these Terms & Conditions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          {/* Main */}
          <div className="w-full">
            <div className="glass-panel rounded-2xl p-8 md:p-10 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {termItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                    <div className="mt-0.5 flex-shrink-0 text-blue-600">{item.icon}</div>
                    <div>
                      <h3 className="text-slate-900 font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-slate-550 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-6 flex items-start gap-3">
                <AlertTriangle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm font-medium">
                  NeuraX is an early-stage company advancing AI-enabled neuro-recovery solutions. Our services are not intended to replace professional medical advice, diagnosis, or treatment.
                </p>
              </div>

              <div className="space-y-4 text-slate-655 text-sm leading-relaxed">
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">7. Indemnification</h3>
                  <p>You agree to indemnify and hold harmless NeuraX and its affiliates from any claims, losses, or damages arising from your use of the platform or violation of these terms.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">8. Termination</h3>
                  <p>We reserve the right to suspend or terminate your access to the platform at our discretion, without prior notice, for conduct that violates these terms.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">10. Changes to Terms</h3>
                  <p>We may update these Terms from time to time. Continued use of the platform constitutes acceptance of any changes.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">11. Contact Us</h3>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    For questions about these Terms, contact us at:
                    <span className="inline-flex items-center gap-2">
                      <button type="button" onClick={handleCopyEmail} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors cursor-pointer" title="Click to copy email">neuraxcognitivesolutions@gmail.com</button>
                      {copied && (
                        <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold transition-all duration-300">
                          <Check size={14} className="stroke-[3]" /> Copied!
                        </span>
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
