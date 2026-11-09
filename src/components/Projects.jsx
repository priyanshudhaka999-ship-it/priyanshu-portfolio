import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  GitBranch,
  Layers,
  CheckCircle2,
  Eye,
  X,
  ShoppingBag,
  Sparkles,
  Cloud,
  AlertCircle,
} from 'lucide-react';
import { createFadeUpVariant, createStaggerContainer } from '../utils/motionVariants';

/**
 * Custom Architectural Visual Preview for each Featured Project
 */
function ProjectVisualPreview({ visualType, title }) {
  if (visualType === 'ecommerce') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#141413] rounded-2xl p-4 overflow-hidden flex flex-col justify-between border border-[#22211F]">
        <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#FAF8F5]/70 border-b border-[#FAF8F5]/10 pb-2.5">
          <span className="flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-[#C85A32]" />
            MERN_COMMERCE // STOREFRONT_ENGINE
          </span>
          <span className="px-2 py-0.5 rounded bg-[#C85A32]/20 text-[#C85A32]">
            RAZORPAY READY
          </span>
        </div>

        {/* Simulated Storefront & Checkout Architecture */}
        <div className="grid grid-cols-12 gap-3 my-auto py-2">
          <div className="col-span-7 bg-[#22211F] rounded-xl p-3 border border-[#FAF8F5]/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono-tech text-[#FAF8F5]/60">CATALOG_QUERY</span>
              <span className="w-2 h-2 rounded-full bg-[#1F6E58]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#141413] p-2 rounded-lg border border-[#FAF8F5]/5">
                <div className="w-full h-8 rounded bg-[#C85A32]/20 mb-1.5" />
                <div className="h-2 w-12 bg-[#FAF8F5]/70 rounded" />
                <div className="h-1.5 w-8 bg-[#C85A32] rounded mt-1" />
              </div>
              <div className="bg-[#141413] p-2 rounded-lg border border-[#FAF8F5]/5">
                <div className="w-full h-8 rounded bg-[#2B4C7E]/30 mb-1.5" />
                <div className="h-2 w-14 bg-[#FAF8F5]/70 rounded" />
                <div className="h-1.5 w-9 bg-[#C85A32] rounded mt-1" />
              </div>
            </div>
          </div>

          <div className="col-span-5 bg-[#22211F] rounded-xl p-3 border border-[#C85A32]/30 flex flex-col justify-between">
            <div className="text-[10px] font-mono-tech text-[#C85A32]">CHECKOUT_WEBHOOK</div>
            <div className="space-y-1.5 my-1">
              <div className="flex justify-between text-[10px] text-[#FAF8F5]/80 font-mono-tech">
                <span>Cart State</span>
                <span>Synced</span>
              </div>
              <div className="flex justify-between text-[10px] text-[#FAF8F5]/80 font-mono-tech">
                <span>Signature</span>
                <span className="text-[#1F6E58]">HMAC-SHA256</span>
              </div>
            </div>
            <div className="w-full py-1 rounded bg-[#C85A32] text-center text-[10px] font-mono-tech text-[#FAF8F5] font-medium">
              VERIFY ORDER
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#FAF8F5]/50 pt-2 border-t border-[#FAF8F5]/10">
          <span>React · Express · MongoDB</span>
          <span>REST API + JWT Auth</span>
        </div>
      </div>
    );
  }

  if (visualType === 'ai') {
    return (
      <div className="relative w-full h-56 sm:h-64 bg-[#141413] rounded-2xl p-4 overflow-hidden flex flex-col justify-between border border-[#22211F]">
        <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#FAF8F5]/70 border-b border-[#FAF8F5]/10 pb-2.5">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C85A32]" />
            AI_WORKSPACE // STREAM_PIPELINE
          </span>
          <span className="px-2 py-0.5 rounded bg-[#2B4C7E]/30 text-[#93B4E8]">
            LLM API PROXY
          </span>
        </div>

        <div className="my-auto space-y-2.5 py-2">
          <div className="bg-[#22211F] rounded-xl p-2.5 border border-[#FAF8F5]/10 flex items-center justify-between">
            <span className="text-[11px] font-mono-tech text-[#FAF8F5]/80 truncate">
              Prompt: &quot;Extract structured action items &amp; schema...&quot;
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-[#C85A32] text-[#FAF8F5]">
              STREAMING
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#22211F] p-2.5 rounded-xl border border-[#FAF8F5]/10">
              <div className="text-[10px] font-mono-tech text-[#C85A32]">01. SANITIZE</div>
              <div className="text-[11px] text-[#FAF8F5]/90 mt-1 font-medium">Server Route</div>
            </div>
            <div className="bg-[#22211F] p-2.5 rounded-xl border border-[#2B4C7E]/50">
              <div className="text-[10px] font-mono-tech text-[#93B4E8]">02. AI API</div>
              <div className="text-[11px] text-[#FAF8F5]/90 mt-1 font-medium">Context Engine</div>
            </div>
            <div className="bg-[#22211F] p-2.5 rounded-xl border border-[#1F6E58]/50">
              <div className="text-[10px] font-mono-tech text-[#6BD4B3]">03. RENDER</div>
              <div className="text-[11px] text-[#FAF8F5]/90 mt-1 font-medium">Typed UI Cards</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#FAF8F5]/50 pt-2 border-t border-[#FAF8F5]/10">
          <span>Next.js · AI APIs · Node.js</span>
          <span>Zero Client Key Exposure</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-56 sm:h-64 bg-[#141413] rounded-2xl p-4 overflow-hidden flex flex-col justify-between border border-[#22211F]">
      <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#FAF8F5]/70 border-b border-[#FAF8F5]/10 pb-2.5">
        <span className="flex items-center gap-1.5">
          <Cloud className="w-3.5 h-3.5 text-[#C85A32]" />
          SAAS_CORE // MULTI_TENANT_PLATFORM
        </span>
        <span className="px-2 py-0.5 rounded bg-[#1F6E58]/30 text-[#6BD4B3]">
          DOCKERIZED
        </span>
      </div>

      <div className="grid grid-cols-12 gap-2.5 my-auto py-2">
        <div className="col-span-4 bg-[#22211F] rounded-xl p-2.5 border border-[#FAF8F5]/10 space-y-1.5">
          <div className="text-[10px] font-mono-tech text-[#FAF8F5]/50">WORKSPACES</div>
          <div className="px-2 py-1 rounded bg-[#C85A32]/20 text-[#C85A32] text-[10px] font-mono-tech">
            ● Team Alpha
          </div>
          <div className="px-2 py-1 rounded bg-[#141413] text-[#FAF8F5]/70 text-[10px] font-mono-tech">
            ○ API Keys
          </div>
          <div className="px-2 py-1 rounded bg-[#141413] text-[#FAF8F5]/70 text-[10px] font-mono-tech">
            ○ Billing Tier
          </div>
        </div>

        <div className="col-span-8 bg-[#22211F] rounded-xl p-3 border border-[#FAF8F5]/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono-tech text-[#FAF8F5]/70">CONTAINER_ORCHESTRATION</span>
            <span className="text-[10px] font-mono-tech text-[#6BD4B3]">HEALTHY</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-1.5">
            <div className="p-2 rounded bg-[#141413] border border-[#FAF8F5]/5">
              <div className="text-[9px] font-mono-tech text-[#FAF8F5]/50">SUBSCRIPTION</div>
              <div className="text-xs font-semibold text-[#FAF8F5] mt-0.5">Razorpay Webhooks</div>
            </div>
            <div className="p-2 rounded bg-[#141413] border border-[#FAF8F5]/5">
              <div className="text-[9px] font-mono-tech text-[#FAF8F5]/50">DEPLOYMENT</div>
              <div className="text-xs font-semibold text-[#FAF8F5] mt-0.5">Docker Image</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#FAF8F5]/50 pt-2 border-t border-[#FAF8F5]/10">
        <span>Next.js · Express · MongoDB · Docker</span>
        <span>Role-Based Access</span>
      </div>
    </div>
  );
}

export default function Projects({ projects, onSelectProjectForInquiry, reducedMotion }) {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [placeholderLinkNotice, setPlaceholderLinkNotice] = useState(null);

  const containerVariants = createStaggerContainer(reducedMotion, 0.1);
  const itemVariants = createFadeUpVariant(reducedMotion);

  const handlePlaceholderLinkClick = (e, project, linkType, url) => {
    e.preventDefault();
    setPlaceholderLinkNotice({
      projectTitle: project.title,
      linkType,
      url,
    });
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-[#FAF8F5] border-b border-[#E5DEC9] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
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
            {projects.sectionTag}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#141413] leading-[1.15]"
          >
            {projects.headline}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base text-[#57544E] mt-3 leading-relaxed"
          >
            {projects.subtitle}
          </motion.p>
        </motion.div>

        {/* Placeholder Link Toast / Inspector Banner when clicked */}
        <AnimatePresence>
          {placeholderLinkNotice && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#F6E8E2] border border-[#C85A32]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#141413]">
                    Placeholder {placeholderLinkNotice.linkType} Link — {placeholderLinkNotice.projectTitle}
                  </div>
                  <p className="text-xs text-[#3B3936] mt-0.5">
                    Configured placeholder URL:{' '}
                    <code className="font-mono-tech bg-[#FAF8F5] px-1.5 py-0.5 rounded border border-[#DDD4CA]">
                      {placeholderLinkNotice.url}
                    </code>
                    . Replace with your real URL in{' '}
                    <code className="font-mono-tech">src/data/portfolioData.js</code>.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPlaceholderLinkNotice(null)}
                className="px-3 py-1.5 rounded-lg text-xs font-mono-tech uppercase bg-[#141413] text-[#FAF8F5] hover:bg-[#C85A32] transition-colors shrink-0"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Project Showcases */}
        <div className="space-y-12">
          {projects.items.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: reducedMotion ? 0.15 : 0.6, delay: idx * 0.05 }}
              className="group rounded-3xl bg-[#F3EFEA] border border-[#DDD4CA] hover:border-[#C85A32]/60 p-6 sm:p-8 lg:p-10 shadow-subtle hover:shadow-elevated transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Visual Preview Column */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ProjectVisualPreview
                    visualType={project.visualType}
                    title={project.title}
                  />

                  {/* Quick Architecture Spec Modal Trigger */}
                  <div className="mt-4 flex items-center justify-between px-2">
                    <span className="font-mono-tech text-[11px] text-[#64615C]">
                      SHOWCASE // {project.index}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#C85A32] hover:text-[#141413] font-medium transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect System Architecture</span>
                    </button>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-tech uppercase tracking-wider bg-[#FAF8F5] border border-[#DDD4CA] text-[#C85A32] font-semibold">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono-tech bg-[#F6E8E2] text-[#C85A32]">
                      Links: Configurable Placeholders
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono-tech text-[#64615C] mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-base text-[#3B3936] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-1">
                    <div className="font-mono-tech text-xs uppercase tracking-wider text-[#64615C] font-semibold">
                      Key Engineering Features:
                    </div>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.keyFeatures.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-sm text-[#3B3936]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Stack Badges */}
                  <div className="pt-2">
                    <div className="font-mono-tech text-xs uppercase tracking-wider text-[#64615C] font-semibold mb-2.5">
                      Technology Stack:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl text-xs font-mono-tech bg-[#FAF8F5] text-[#141413] border border-[#DDD4CA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links (Clearly Marked Placeholders + Architecture Modal) */}
                  <div className="pt-4 border-t border-[#DDD4CA] flex flex-wrap items-center gap-3">
                    <a
                      href={project.liveDemoUrl}
                      onClick={(e) =>
                        handlePlaceholderLinkClick(e, project, 'Live Demo', project.liveDemoUrl)
                      }
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#141413] text-[#FAF8F5] hover:bg-[#C85A32] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo (Placeholder)</span>
                    </a>

                    <a
                      href={project.githubRepoUrl}
                      onClick={(e) =>
                        handlePlaceholderLinkClick(e, project, 'GitHub Repository', project.githubRepoUrl)
                      }
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#FAF8F5] text-[#141413] border border-[#DDD4CA] hover:border-[#141413] transition-colors"
                    >
                      <GitBranch className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>GitHub Repo (Placeholder)</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectProjectForInquiry(project.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-mono-tech text-[#C85A32] hover:bg-[#F6E8E2] transition-colors ml-auto"
                    >
                      <span>Request Similar Build &rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive System Architecture Breakdown Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#141413]/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl bg-[#FAF8F5] border border-[#DDD4CA] p-6 sm:p-8 shadow-elevated space-y-5 max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#E5DEC9] pb-4">
                <div>
                  <span className="font-mono-tech text-xs uppercase text-[#C85A32]">
                    ARCHITECTURE SPECIFICATION // {activeModalProject.index}
                  </span>
                  <h3 id="modal-project-title" className="text-2xl font-bold text-[#141413] mt-1">
                    {activeModalProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-full bg-[#F3EFEA] text-[#141413] hover:bg-[#EAE3DC]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#DDD4CA]">
                  <div className="font-mono-tech text-[11px] text-[#C85A32] font-semibold">
                    FRONTEND LAYER
                  </div>
                  <p className="text-xs text-[#3B3936] mt-1.5 leading-relaxed">
                    {activeModalProject.architectureNotes.frontend}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#DDD4CA]">
                  <div className="font-mono-tech text-[11px] text-[#2B4C7E] font-semibold">
                    BACKEND &amp; API
                  </div>
                  <p className="text-xs text-[#3B3936] mt-1.5 leading-relaxed">
                    {activeModalProject.architectureNotes.backend}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#DDD4CA]">
                  <div className="font-mono-tech text-[11px] text-[#1F6E58] font-semibold">
                    DATA &amp; INFRA
                  </div>
                  <p className="text-xs text-[#3B3936] mt-1.5 leading-relaxed">
                    {activeModalProject.architectureNotes.dataLayer}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6E8E2]/60 border border-[#C85A32]/30 text-xs text-[#3B3936]">
                <strong className="text-[#141413]">Placeholder Links Notice:</strong> Live Demo (
                <code className="font-mono-tech">{activeModalProject.liveDemoUrl}</code>) and GitHub Repo (
                <code className="font-mono-tech">{activeModalProject.githubRepoUrl}</code>) are clearly marked placeholders ready to be updated in{' '}
                <code className="font-mono-tech">src/data/portfolioData.js</code>.
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onSelectProjectForInquiry(title);
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-medium bg-[#C85A32] text-[#FAF8F5] hover:bg-[#141413] transition-colors"
                >
                  Discuss a Similar Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-medium bg-[#F3EFEA] text-[#141413] hover:bg-[#EAE3DC]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
