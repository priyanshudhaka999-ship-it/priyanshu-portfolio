import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, FileText } from 'lucide-react';

export default function Navbar({ personal, navigation, activeSection, onNavigate, onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E5DEC9]/80 py-3.5 shadow-[0_4px_24px_-6px_rgba(20,20,19,0.05)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, '#top')}
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-lg"
          aria-label={`${personal.name} — Back to top`}
        >
          <div className="w-10 h-10 rounded-xl bg-[#141413] text-[#FAF8F5] flex items-center justify-center font-mono-tech text-sm font-medium tracking-wider relative overflow-hidden shadow-sm group-hover:bg-[#C85A32] transition-colors duration-300">
            <span>{personal.initials}</span>
            <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#C85A32] group-hover:bg-[#FAF8F5] transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-[#141413] leading-none">
              {personal.name}
            </span>
            <span className="font-mono-tech text-[11px] text-[#64615C] mt-1 tracking-wide">
              FULL-STACK &amp; AI ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#F3EFEA]/80 border border-[#E5DEC9] rounded-full px-2 py-1.5">
          {navigation.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                  isActive
                    ? 'text-[#FAF8F5]'
                    : 'text-[#3B3936] hover:text-[#141413]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-[#141413]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono-tech uppercase tracking-wider text-[#3B3936] hover:text-[#141413] bg-[#F3EFEA] hover:bg-[#EAE3DC] border border-[#DDD4CA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
          >
            <FileText className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs lg:text-sm font-medium bg-[#141413] text-[#FAF8F5] hover:bg-[#C85A32] transition-colors duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FAF8F5]" />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2.5 rounded-xl bg-[#F3EFEA] border border-[#DDD4CA] text-[#141413] hover:bg-[#EAE3DC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#FAF8F5] border-b border-[#DDD4CA] overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navigation.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#141413] text-[#FAF8F5]'
                        : 'text-[#3B3936] hover:bg-[#F3EFEA]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono-tech text-xs opacity-60">{item.href}</span>
                  </a>
                );
              })}
              <div className="pt-3 grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono-tech uppercase tracking-wider bg-[#F3EFEA] border border-[#DDD4CA] text-[#141413]"
                >
                  <FileText className="w-4 h-4 text-[#C85A32]" />
                  <span>Resume PDF</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-medium bg-[#C85A32] text-[#FAF8F5]"
                >
                  <span>Hire Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
