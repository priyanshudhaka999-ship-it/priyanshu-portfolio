import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Globe2, Sparkles, Layers, Cpu } from 'lucide-react';
import HeroVisual from './HeroVisual';
import { createFadeUpVariant, createStaggerContainer } from '../utils/motionVariants';

export default function Hero({ personal, hero, onNavigate, reducedMotion }) {
  const containerVariants = createStaggerContainer(reducedMotion, 0.1);
  const itemVariants = createFadeUpVariant(reducedMotion);

  const handleCtaClick = (e, href) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <section
      id="top"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-architectural-grid border-b border-[#E5DEC9]"
    >
      {/* Subtle Atmospheric Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/4 w-[36rem] h-[36rem] -translate-y-1/2 rounded-full bg-[#C85A32]/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-10 w-[28rem] h-[28rem] translate-y-1/3 rounded-full bg-[#2B4C7E]/[0.06] blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Identity & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            {/* Availability Status Pill */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F3EFEA] border border-[#DDD4CA] shadow-subtle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1F6E58] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1F6E58]" />
              </span>
              <span className="font-mono-tech text-xs font-medium text-[#3B3936] tracking-wide">
                {personal.availabilityBadge}
              </span>
            </motion.div>

            {/* Prominent Name & Role */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="font-mono-tech text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C85A32] font-semibold">
                {personal.role}
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-[#141413] leading-[1.03]">
                {personal.name}
              </h1>
            </motion.div>

            {/* Required Tagline */}
            <motion.p
              variants={itemVariants}
              className="font-serif-editorial italic text-2xl sm:text-3xl lg:text-[34px] text-[#22211F] leading-[1.25] max-w-2xl"
            >
              &ldquo;{personal.tagline}&rdquo;
            </motion.p>

            {/* Supporting Engineering Statement */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#57544E] leading-relaxed max-w-xl"
            >
              {personal.subHeadline}
            </motion.p>

            {/* Primary & Secondary CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href={hero.primaryCta.href}
                onClick={(e) => handleCtaClick(e, hero.primaryCta.href)}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#141413] text-[#FAF8F5] font-medium text-sm sm:text-base hover:bg-[#C85A32] transition-all duration-300 shadow-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] focus-visible:ring-offset-2"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={hero.secondaryCta.href}
                onClick={(e) => handleCtaClick(e, hero.secondaryCta.href)}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F3EFEA] hover:bg-[#EAE3DC] text-[#141413] border border-[#DDD4CA] font-medium text-sm sm:text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] focus-visible:ring-offset-2"
              >
                <span>{hero.secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C85A32] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Architectural Pillars Bar */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#E5DEC9] grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {hero.architecturePillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-3.5 rounded-2xl bg-[#F3EFEA]/70 border border-[#E5DEC9] hover:border-[#C85A32]/40 transition-colors"
                >
                  <div className="font-mono-tech text-[11px] text-[#C85A32] font-medium">
                    {pillar.code}
                  </div>
                  <div className="text-sm font-semibold text-[#141413] mt-0.5">
                    {pillar.title}
                  </div>
                  <p className="text-xs text-[#57544E] mt-1 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Abstract Technical Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.96, y: reducedMotion ? 0 : 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0.15 : 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <HeroVisual reducedMotion={reducedMotion} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
