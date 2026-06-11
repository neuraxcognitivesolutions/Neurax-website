import { Linkedin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <button onClick={() => setCurrentPage('Home')} className="flex items-center shrink-0">
          <img src="/assets/logo-light-bg-v3.webp" alt="NeuraX" className="h-12 w-auto block opacity-90 hover:opacity-100 transition-opacity shrink-0" />
        </button>

        {/* Copyright */}
        <span className="text-slate-500 text-sm text-center">
          © NeuraX Cognitive Solutions Pvt. Ltd. All rights reserved.
        </span>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
          <button onClick={() => setCurrentPage('Privacy Policy')} className="hover:text-slate-900 transition-colors">Privacy Policy</button>
          <button onClick={() => setCurrentPage('Terms of Use')} className="hover:text-slate-900 transition-colors">Terms of Use</button>
          <button onClick={() => setCurrentPage('Cookie Policy')} className="hover:text-slate-900 transition-colors">Cookie Policy</button>
          <button onClick={() => setCurrentPage('Medical Disclaimer')} className="hover:text-slate-900 transition-colors">Medical Disclaimer</button>
          <button onClick={() => setCurrentPage('Contact')} className="hover:text-slate-900 transition-colors">Contact</button>
          <a href="https://www.linkedin.com/in/dr-varshini-md-103438212/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
