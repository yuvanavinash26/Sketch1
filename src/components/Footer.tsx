import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Linkedin, Youtube, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#0B1E3D] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FFB547] border border-white/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                Skillnest
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Practical learning for people building what's next. Structured courses, real projects, expert mentorship, and skills that actually translate into careers.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Get useful learning insights
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You're subscribed to our weekly engineering dispatch!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@workemail.com"
                    required
                    className="flex-1 px-3.5 py-2 rounded-lg bg-white/10 border border-slate-700 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-[#FFB547]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-lg bg-[#FFB547] hover:bg-[#ffa726] text-[#0B1E3D] text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Learn */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Learn
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Full-Stack Systems
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Applied AI & LLMs
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Digital Product Design
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Data Analytics & dbt
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Cloud Infrastructure & SRE
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Verifiable Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Our Pedagogy
                </a>
              </li>
              <li>
                <a href="#mentors" className="hover:text-white transition-colors">
                  Mentor Fellowship
                </a>
              </li>
              <li>
                <a href="#outcomes" className="hover:text-white transition-colors">
                  Outcomes & Metrics
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Tuition & Scholarships
                </a>
              </li>
              <li>
                <a href="mailto:careers@skillnest.edu" className="hover:text-white transition-colors">
                  Careers <span className="text-[10px] text-[#FFB547]">(We're hiring)</span>
                </a>
              </li>
              <li>
                <a href="mailto:press@skillnest.edu" className="hover:text-white transition-colors">
                  Press & Media Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Capstone Evaluation Rubric
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Curriculum Previews
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Enterprise Upskilling
                </a>
              </li>
              <li>
                <a href="mailto:support@skillnest.edu" className="hover:text-white transition-colors">
                  Admissions Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Skillnest Education Technologies Inc. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X (formerly Twitter)">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
