import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Wrench,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { createFadeUpVariant, createStaggerContainer } from '../utils/motionVariants';

export default function Skills({ skills, reducedMotion }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);

  const containerVariants = createStaggerContainer(reducedMotion, 0.08);
  const itemVariants = createFadeUpVariant(reducedMotion);

  const categoryIcons = {
    frontend: Code2,
    backend: Server,
    database: Database,
    ai: Sparkles,
    tools: Wrench,
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skills.categories
      : skills.categories.filter((c) => c.id === selectedCategory);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#F3EFEA]/60 border-b border-[#E5DEC9] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <motion.span
              variants={itemVariants}
              className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#C85A32] font-semibold block mb-3"
            >
              {skills.sectionTag}
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#141413] leading-[1.15]"
            >
              {skills.headline}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base text-[#57544E] mt-3 leading-relaxed"
            >
              {skills.subtitle}
            </motion.p>
          </motion.div>

          {/* Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap items-center gap-2 bg-[#FAF8F5] p-1.5 rounded-2xl border border-[#DDD4CA] self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono-tech uppercase tracking-wider transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#141413] text-[#FAF8F5] shadow-sm'
                  : 'text-[#57544E] hover:text-[#141413]'
              }`}
            >
              All Layers (11)
            </button>
            {skills.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono-tech uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#C85A32] text-[#FAF8F5] shadow-sm'
                    : 'text-[#57544E] hover:text-[#141413]'
                }`}
              >
                {cat.id} ({cat.items.length})
              </button>
            ))}
          </div>
        </div>

        {/* Category Bento Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const IconComponent = categoryIcons[category.id] || Layers;
              const isWide = category.id === 'frontend' || category.id === 'tools';

              return (
                <motion.div
                  layout
                  key={category.id}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-3xl bg-[#FAF8F5] border border-[#DDD4CA] p-6 sm:p-7 shadow-subtle flex flex-col justify-between ${
                    isWide && selectedCategory === 'all' ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    {/* Category Top Header */}
                    <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-[#EAE3DC]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#F3EFEA] border border-[#DDD4CA] flex items-center justify-center text-[#C85A32]">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono-tech text-[11px] uppercase tracking-wider text-[#64615C] block">
                            {category.code}
                          </span>
                          <h3 className="text-lg font-bold text-[#141413]">
                            {category.name}
                          </h3>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono-tech bg-[#F3EFEA] text-[#3B3936] border border-[#DDD4CA]">
                        {category.items.length} {category.items.length === 1 ? 'Tech' : 'Techs'}
                      </span>
                    </div>

                    <p className="text-sm text-[#57544E] mb-5">
                      {category.summary}
                    </p>

                    {/* Individual Technology Cards inside Category */}
                    <div
                      className={`grid gap-3.5 ${
                        category.items.length > 2
                          ? 'grid-cols-1 sm:grid-cols-2'
                          : 'grid-cols-1'
                      }`}
                    >
                      {category.items.map((tech) => {
                        const isHovered = hoveredTech === tech.name;
                        return (
                          <div
                            key={tech.name}
                            onMouseEnter={() => setHoveredTech(tech.name)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className={`group p-4 rounded-2xl border transition-all duration-200 ${
                              isHovered
                                ? 'bg-[#141413] text-[#FAF8F5] border-[#141413] shadow-md'
                                : 'bg-[#F3EFEA]/70 text-[#141413] border-[#E5DEC9] hover:border-[#C85A32]/50'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-bold text-base tracking-tight">
                                {tech.name}
                              </span>
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 transition-colors ${
                                  isHovered ? 'text-[#C85A32]' : 'text-[#64615C]'
                                }`}
                              />
                            </div>
                            <div
                              className={`font-mono-tech text-[11px] mt-1 ${
                                isHovered ? 'text-[#E5DEC9]' : 'text-[#C85A32]'
                              }`}
                            >
                              {tech.role}
                            </div>
                            <p
                              className={`text-xs mt-2 leading-relaxed ${
                                isHovered ? 'text-[#FAF8F5]/85' : 'text-[#57544E]'
                              }`}
                            >
                              {tech.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
