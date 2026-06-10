import { useState } from 'react';
import { User, Brain, Monitor, FileText, Check } from 'lucide-react';

export default function PrivacyPolicy() {
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
          <h1 className="text-slate-900 text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-655 text-sm leading-relaxed max-w-xl">
            NeuraX Cognitive Solutions Pvt. Ltd. ("NeuraX", "we", "our", "us") is committed to protecting your privacy and ensuring the security of your personal and health-related information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          {/* Main content */}
          <div className="w-full">
            <div className="glass-panel rounded-2xl p-8 md:p-10 bg-white">
              <h2 className="text-slate-900 text-xl font-bold mb-2">1. Information We Collect</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We collect information to provide and improve our AI-enabled cognitive recovery solutions.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: <User size={24} className="text-blue-600" />, title: 'Personal Information', desc: 'Name, email, phone number, demographic details when you contact us or sign up for updates.' },
                  { icon: <Brain size={24} className="text-blue-600" />, title: 'Health & Cognitive Data', desc: 'Cognitive assessments, recovery progress, therapy interactions, and related clinical information.' },
                  { icon: <Monitor size={24} className="text-blue-600" />, title: 'Device & Usage Data', desc: 'Device type, browser, IP address, usage patterns, and diagnostic logs.' },
                  { icon: <FileText size={24} className="text-blue-600" />, title: 'Other Information', desc: 'Information you voluntarily provide in forms, surveys, or communications.' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="icon-circle mb-3 bg-slate-50 border-slate-100">
                      {item.icon}
                    </div>
                    <h4 className="text-slate-900 font-semibold text-xs mb-1">{item.title}</h4>
                    <p className="text-slate-555 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-6">
                <p className="text-slate-700 text-sm font-medium">All health-related data is collected only with your informed consent.</p>
              </div>

              <div className="space-y-4 text-slate-655 text-sm leading-relaxed">
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">2. How We Use Information</h3>
                  <p>We use the information collected to operate and improve our platform, personalize user experiences, conduct research and clinical validation, and communicate with you about our services.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">3. Information Sharing</h3>
                  <p>We do not sell your personal information. When you submit a message through our contact form, your submission data is securely transmitted to Google Forms (a third-party tool operated by Google LLC) which hosts our contact questionnaire. We may also share information with clinical collaborators and healthcare providers involved in your care, with your consent, and as required by law.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">4. Data Security</h3>
                  <p>We implement enterprise-grade security measures including encryption, access controls, and regular security audits to protect your information.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">5. Your Rights</h3>
                  <p>You have the right to access, correct, or delete your personal information. You may also withdraw consent for data processing at any time by contacting us.</p>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">6. Contact Us</h3>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    For privacy-related queries, contact us at:
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
