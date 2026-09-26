import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  onStartLearning: () => void;
  onBrowseCourses: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartLearning, onBrowseCourses }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studio', href: '#studio' },
    { name: 'Courses', href: '#courses' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Outcomes', href: '#outcomes' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#E5EAF1] shadow-xs py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-[#0B1E3D] group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB547] rounded-lg"
              aria-label="Skillnest Home"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0B1E3D] flex items-center justify-center text-[#FFB547] shadow-xs group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-[#0B1E3D]">
                Skillnest
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-[#64748B] hover:text-[#0B1E3D] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB547] rounded-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFB547] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onStartLearning}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] active:scale-[0.98] transition-all duration-150 rounded-lg shadow-xs cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B1E3D]"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#0B1E3D] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1E3D]"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-In Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-[#0B1E3D]/50 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer panel */}
        <aside
          className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl z-50 flex flex-col justify-between p-6 transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E5EAF1]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-[#0B1E3D] flex items-center justify-center text-[#FFB547]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-bold text-lg text-[#0B1E3D]">Skillnest</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100"
                aria-label="Close Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-[#0B1E3D] hover:text-[#FFB547] py-2 transition-colors border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E5EAF1] space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartLearning();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#0B1E3D] bg-[#FFB547] hover:bg-[#ffa726] rounded-xl shadow-xs transition-colors"
            >
              <span>Start Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBrowseCourses();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#0B1E3D] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <span>Browse Programs</span>
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};
