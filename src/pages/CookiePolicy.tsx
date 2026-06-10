import { useState } from 'react';
import { Cookie, Monitor, Settings, Globe, Check } from 'lucide-react';

const cookieItems = [
  {
    icon: <Cookie size={20} className="text-blue-600" />,
    title: '1. What Are Cookies?',
    desc: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.'
  },
  {
    icon: <Monitor size={20} className="text-blue-600" />,
    title: '2. How We Use Cookies',
    desc: 'We use cookies to enhance website functionality, analyze site performance, understand user behavior, and personalize content.'
  },
  {
    icon: <Settings size={20} className="text-blue-600" />,
    title: '4. Managing Cookies',
    desc: 'You can control or delete cookies through your browser settings. Disabling cookies may affect the functionality of our website.'
  },
  {
    icon: <Globe size={20} className="text-blue-600" />,
    title: '5. Third-Party Cookies',
    desc: 'We may use third-party services (e.g., analytics providers) that set cookies to help us understand website traffic and usage.'
  }
];

export default function CookiePolicy() {
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
          <h1 className="text-slate-900 text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-slate-655 text-sm leading-relaxed max-w-xl">
            This Cookie Policy explains how NeuraX Cognitive Solutions Pvt. Ltd. ("NeuraX", "we", "our", "us") uses cookies and similar technologies on our website.
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
                {cookieItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                    <div className="mt-0.5 flex-shrink-0 text-blue-600">{item.icon}</div>
                    <div>
                      <h3 className="text-slate-900 font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-slate-550 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-slate-900 font-bold text-sm mb-3">3. Types of Cookies</h3>
                <ul className="space-y-2 text-sm text-slate-700 font-medium">
                  {[
                    { name: 'Essential Cookies', desc: 'Required for website operation' },
                    { name: 'Performance Cookies', desc: 'Help us analyse website usage' },
                    { name: 'Functional Cookies', desc: 'Remember your preferences' },
                    { name: 'Targeting Cookies', desc: 'Used to deliver relevant content' }
                  ].map((c, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span><strong>{c.name}</strong> – {c.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-slate-655 text-sm leading-relaxed">
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">6. Updates</h3>
                  <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with the updated date.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">7. Contact Us</h3>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    For questions about this Cookie Policy, contact us at:
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

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mt-6">
                <p className="text-slate-700 text-sm font-medium">By continuing to use our website, you consent to the use of cookies as described in this policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
