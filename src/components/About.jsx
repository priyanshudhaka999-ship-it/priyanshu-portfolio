import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Layers, ShieldCheck, Info } from 'lucide-react';
import { createFadeUpVariant, createStaggerContainer } from '../utils/motionVariants';

export default function About({ about, personal, reducedMotion }) {
  const containerVariants = createStaggerContainer(reducedMotion, 0.1);
  const itemVariants = createFadeUpVariant(reducedMotion);

  const principleIcons = [Code2, Cpu, Layers, ShieldCheck];

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#FAF8F5] border-b border-[#E5DEC9] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#C85A32] font-semibold block mb-3"
          >
            {about.sectionTag}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#141413] leading-[1.15]"
          >
            {about.headline}
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative Bio & Editable Notice */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#F3EFEA] border border-[#DDD4CA] space-y-5 shadow-subtle">
              <div className="flex items-center justify-between border-b border-[#DDD4CA] pb-4">
                <div>
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-[#64615C]">
                    ENGINEER PROFILE
                  </div>
                  <div className="text-lg font-bold text-[#141413] mt-0.5">
                    {personal.name}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono-tech bg-[#FAF8F5] border border-[#DDD4CA] text-[#C85A32]">
                  {personal.role}
                </span>
              </div>

              {about.paragraphs.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  variants={itemVariants}
                  className="text-base sm:text-[17px] text-[#3B3936] leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* Editable Copy Transparency Notice */}
              <motion.div
                variants={itemVariants}
                className="pt-3 flex items-start gap-2.5 text-xs text-[#64615C] bg-[#FAF8F5]/80 p-3.5 rounded-2xl border border-[#E5DEC9]"
              >
                <Info className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <span>{about.customizationNote}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Principles */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {about.engineeringPrinciples.map((principle, idx) => {
              const IconComponent = principleIcons[idx % principleIcons.length];
              return (
                <motion.div
                  key={principle.number}
                  variants={itemVariants}
                  whileHover={reducedMotion ? {} : { y: -4 }}
                  className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#DDD4CA] hover:border-[#C85A32]/60 transition-all duration-300 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono-tech text-xs font-semibold text-[#C85A32] px-2.5 py-1 rounded-lg bg-[#F6E8E2]">
                        {principle.number}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#F3EFEA] border border-[#DDD4CA] flex items-center justify-center text-[#141413]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#141413] tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-[#57544E] mt-2 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
