import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer({ personal, navigation, socials, onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (e, href) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-[#F3EFEA] text-[#141413] pt-16 pb-12 border-t border-[#DDD4CA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#DDD4CA]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#141413] text-[#FAF8F5] flex items-center justify-center font-mono-tech text-xs font-bold">
                {personal.initials}
              </div>
              <span className="font-bold text-xl tracking-tight text-[#141413]">
                {personal.name}
              </span>
            </div>
            <p className="text-sm text-[#57544E] max-w-sm leading-relaxed">
              {personal.tagline}
            </p>
            <div className="font-mono-tech text-xs text-[#C85A32] pt-1">
              {personal.role}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#64615C] font-semibold">
              Navigation
            </div>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNav(e, item.href)}
                    className="text-sm text-[#3B3936] hover:text-[#C85A32] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Configurable Social Links */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#64615C] font-semibold">
              Social Links (Placeholders)
            </div>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#3B3936] hover:text-[#C85A32] transition-colors"
                  >
                    <span>{s.label}</span>
                    <span className="font-mono-tech text-xs text-[#64615C]">
                      ({s.handle})
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64615C]">
          <div>
            &copy; {currentYear} <strong className="text-[#141413]">{personal.name}</strong>. All rights reserved. Built with React, Tailwind CSS &amp; Framer Motion.
          </div>

          <a
            href="#top"
            onClick={(e) => handleNav(e, '#top')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FAF8F5] border border-[#DDD4CA] text-[#141413] hover:border-[#C85A32] transition-colors font-mono-tech"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C85A32]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
