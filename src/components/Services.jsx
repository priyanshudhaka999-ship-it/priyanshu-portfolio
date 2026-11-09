import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Layers,
  Sparkles,
  Cpu,
  Cloud,
  CreditCard,
  Smartphone,
  Check,
} from 'lucide-react';
import { createFadeUpVariant, createStaggerContainer } from '../utils/motionVariants';

export default function Services({ services, onSelectServiceForInquiry, reducedMotion }) {
  const containerVariants = createStaggerContainer(reducedMotion, 0.08);
  const itemVariants = createFadeUpVariant(reducedMotion);

  const icons = [Code2, Layers, Sparkles, Cpu, Cloud, CreditCard, Smartphone];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-[#F3EFEA]/70 border-b border-[#E5DEC9] relative"
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
            {services.sectionTag}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#141413] leading-[1.15]"
          >
            {services.headline}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base text-[#57544E] mt-3 leading-relaxed"
          >
            {services.subtitle}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.items.map((service, idx) => {
            const IconComponent = icons[idx % icons.length];
            const isFeaturedWide = idx === 0 || idx === 3;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={reducedMotion ? {} : { y: -4 }}
                className={`group rounded-3xl bg-[#FAF8F5] border border-[#DDD4CA] hover:border-[#C85A32] p-6 sm:p-8 shadow-subtle transition-all duration-300 flex flex-col justify-between ${
                  isFeaturedWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="font-mono-tech text-xs font-semibold text-[#C85A32] px-3 py-1 rounded-full bg-[#F6E8E2]">
                      SERVICE // {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-[#F3EFEA] border border-[#DDD4CA] flex items-center justify-center text-[#141413] group-hover:bg-[#141413] group-hover:text-[#FAF8F5] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-[#C85A32] mt-1.5">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-[#57544E] mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-5 pt-4 border-t border-[#EAE3DC] flex flex-wrap gap-2">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-tech bg-[#F3EFEA] text-[#3B3936]"
                      >
                        <Check className="w-3 h-3 text-[#1F6E58]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForInquiry(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider font-semibold text-[#141413] group-hover:text-[#C85A32] transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
