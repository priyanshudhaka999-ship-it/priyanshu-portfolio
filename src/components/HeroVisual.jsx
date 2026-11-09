import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Layers, ShieldCheck, Terminal, Sparkles, Code2 } from 'lucide-react';

/**
 * Interactive Abstract Technical & AI Architecture Illustration
 * Replaces generic stock photography with an interactive, studio-grade system schematic
 * allowing prospective clients to inspect Frontend, AI Engine, and Backend/Data layers.
 */
export default function HeroVisual({ reducedMotion }) {
  const [activeLayer, setActiveLayer] = useState('ai');

  const layers = [
    {
      id: 'frontend',
      code: 'LAYER 01 // CLIENT UI',
      title: 'React & Next.js Experience Layer',
      tech: ['React 18', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      description: 'Component-driven responsive interfaces with fluid motion and accessible interactions.',
      color: '#C85A32',
      badgeBg: 'bg-[#F6E8E2] text-[#C85A32] border-[#C85A32]/30',
      pipelineSnippet: 'UI.render(<StreamingWorkspace state="hydrated" />)',
    },
    {
      id: 'ai',
      code: 'LAYER 02 // AI ORCHESTRATION',
      title: 'AI API & Intelligent Workflow Core',
      tech: ['AI APIs', 'Prompt Pipelines', 'Structured JSON', 'Context Routing'],
      description: 'Server-side AI API integration transforming user intent into structured, reliable product outputs.',
      color: '#2B4C7E',
      badgeBg: 'bg-[#E6ECF5] text-[#2B4C7E] border-[#2B4C7E]/30',
      pipelineSnippet: 'await aiOrchestrator.stream({ model, schema, context })',
    },
    {
      id: 'backend',
      code: 'LAYER 03 // CORE RUNTIME & DATA',
      title: 'Node.js, Express, MongoDB & Docker',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Razorpay', 'Docker'],
      description: 'Resilient REST APIs, document persistence, verified payment webhooks, and containerized builds.',
      color: '#1F6E58',
      badgeBg: 'bg-[#E3F2EE] text-[#1F6E58] border-[#1F6E58]/30',
      pipelineSnippet: 'db.orders.verifySignature(razorpay_signature) -> 200 OK',
    },
  ];

  const currentLayer = layers.find((l) => l.id === activeLayer) || layers[1];

  return (
    <div className="relative w-full">
      {/* Subtle Ambient Warm & Indigo Glow Behind Schematic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#C85A32]/15 via-[#2B4C7E]/10 to-transparent blur-2xl"
      />

      <div className="relative rounded-3xl bg-[#F3EFEA] border border-[#DDD4CA] p-5 sm:p-6 shadow-[0_20px_50px_-12px_rgba(20,20,19,0.09)] overflow-hidden">
        {/* Top Technical Window Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDD4CA]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9A05B]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1F6E58]" />
            <span className="ml-2 font-mono-tech text-[11px] uppercase tracking-wider text-[#64615C]">
              ARCH_BLUEPRINT // PD-SYS-V2.4
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech bg-[#FAF8F5] border border-[#DDD4CA] text-[#3B3936]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F6E58] animate-pulse" />
            INTERACTIVE SCHEMATIC
          </span>
        </div>

        {/* Abstract Vector System Schematic */}
        <div className="relative bg-[#FAF8F5] rounded-2xl border border-[#E5DEC9] p-4 sm:p-5 overflow-hidden">
          <svg
            viewBox="0 0 520 230"
            className="w-full h-auto select-none"
            role="img"
            aria-label="Interactive technical illustration showing Full-Stack React, Node.js, MongoDB, and AI API architecture"
          >
            <defs>
              <linearGradient id="warmLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C85A32" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#2B4C7E" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#1F6E58" stopOpacity="0.85" />
              </linearGradient>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C85A32" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#C85A32" stopOpacity="0" />
              </radialGradient>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#141413"
                  strokeWidth="0.5"
                  strokeOpacity="0.06"
                />
              </pattern>
            </defs>

            {/* Architectural Grid Backdrop */}
            <rect width="520" height="230" fill="url(#smallGrid)" />

            {/* Ambient Center Halo */}
            <circle cx="260" cy="115" r="85" fill="url(#nodeGlow)" />

            {/* Connection Paths between Frontend -> AI Core -> Backend/DB */}
            <path
              d="M 115 70 C 175 70, 195 115, 260 115"
              fill="none"
              stroke="url(#warmLine)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M 115 160 C 175 160, 195 115, 260 115"
              fill="none"
              stroke="url(#warmLine)"
              strokeWidth="2"
            />
            <path
              d="M 260 115 C 325 115, 345 70, 405 70"
              fill="none"
              stroke="url(#warmLine)"
              strokeWidth="2"
            />
            <path
              d="M 260 115 C 325 115, 345 160, 405 160"
              fill="none"
              stroke="url(#warmLine)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Animated Data Packets (Respects Reduced Motion) */}
            {!reducedMotion && (
              <>
                <motion.circle
                  r="4"
                  fill="#C85A32"
                  animate={{
                    cx: [115, 190, 260, 340, 405],
                    cy: [70, 92, 115, 92, 70],
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                />
                <motion.circle
                  r="4"
                  fill="#2B4C7E"
                  animate={{
                    cx: [405, 340, 260, 190, 115],
                    cy: [160, 138, 115, 138, 160],
                  }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: 'linear' }}
                />
              </>
            )}

            {/* Left Node 1: React / Next.js Client */}
            <g
              onClick={() => setActiveLayer('frontend')}
              className="cursor-pointer"
            >
              <rect
                x="28"
                y="42"
                width="105"
                height="56"
                rx="12"
                fill={activeLayer === 'frontend' ? '#141413' : '#FAF8F5'}
                stroke={activeLayer === 'frontend' ? '#C85A32' : '#DDD4CA'}
                strokeWidth="2"
              />
              <text
                x="80"
                y="66"
                textAnchor="middle"
                fill={activeLayer === 'frontend' ? '#FAF8F5' : '#141413'}
                fontSize="11"
                fontWeight="700"
                fontFamily="Plus Jakarta Sans, sans-serif"
              >
                React / Next.js
              </text>
              <text
                x="80"
                y="83"
                textAnchor="middle"
                fill={activeLayer === 'frontend' ? '#E5DEC9' : '#64615C'}
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
              >
                CLIENT UI LAYER
              </text>
            </g>

            {/* Left Node 2: Tailwind + Framer Motion */}
            <g
              onClick={() => setActiveLayer('frontend')}
              className="cursor-pointer"
            >
              <rect
                x="28"
                y="132"
                width="105"
                height="56"
                rx="12"
                fill={activeLayer === 'frontend' ? '#141413' : '#FAF8F5'}
                stroke={activeLayer === 'frontend' ? '#C85A32' : '#DDD4CA'}
                strokeWidth="2"
              />
              <text
                x="80"
                y="156"
                textAnchor="middle"
                fill={activeLayer === 'frontend' ? '#FAF8F5' : '#141413'}
                fontSize="11"
                fontWeight="700"
                fontFamily="Plus Jakarta Sans, sans-serif"
              >
                Motion &amp; Design
              </text>
              <text
                x="80"
                y="173"
                textAnchor="middle"
                fill={activeLayer === 'frontend' ? '#E5DEC9' : '#64615C'}
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
              >
                TAILWIND + FRAMER
              </text>
            </g>

            {/* Center Hub: AI & Full-Stack Core */}
            <g
              onClick={() => setActiveLayer('ai')}
              className="cursor-pointer"
            >
              <circle
                cx="260"
                cy="115"
                r="52"
                fill="#FAF8F5"
                stroke="#C85A32"
                strokeWidth="1.5"
                strokeDasharray="5 4"
              />
              <circle
                cx="260"
                cy="115"
                r="42"
                fill={activeLayer === 'ai' ? '#141413' : '#F3EFEA'}
                stroke={activeLayer === 'ai' ? '#C85A32' : '#141413'}
                strokeWidth="2"
              />
              <text
                x="260"
                y="110"
                textAnchor="middle"
                fill={activeLayer === 'ai' ? '#FAF8F5' : '#141413'}
                fontSize="11"
                fontWeight="700"
                fontFamily="Plus Jakarta Sans, sans-serif"
              >
                AI + API CORE
              </text>
              <text
                x="260"
                y="126"
                textAnchor="middle"
                fill="#C85A32"
                fontSize="8.5"
                fontFamily="JetBrains Mono, monospace"
              >
                ORCHESTRATION
              </text>
            </g>

            {/* Right Node 1: Node.js + Express */}
            <g
              onClick={() => setActiveLayer('backend')}
              className="cursor-pointer"
            >
              <rect
                x="387"
                y="42"
                width="105"
                height="56"
                rx="12"
                fill={activeLayer === 'backend' ? '#141413' : '#FAF8F5'}
                stroke={activeLayer === 'backend' ? '#1F6E58' : '#DDD4CA'}
                strokeWidth="2"
              />
              <text
                x="440"
                y="66"
                textAnchor="middle"
                fill={activeLayer === 'backend' ? '#FAF8F5' : '#141413'}
                fontSize="11"
                fontWeight="700"
                fontFamily="Plus Jakarta Sans, sans-serif"
              >
                Node &amp; Express
              </text>
              <text
                x="440"
                y="83"
                textAnchor="middle"
                fill={activeLayer === 'backend' ? '#E5DEC9' : '#64615C'}
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
              >
                REST API / AUTH
              </text>
            </g>

            {/* Right Node 2: MongoDB, Razorpay & Docker */}
            <g
              onClick={() => setActiveLayer('backend')}
              className="cursor-pointer"
            >
              <rect
                x="387"
                y="132"
                width="105"
                height="56"
                rx="12"
                fill={activeLayer === 'backend' ? '#141413' : '#FAF8F5'}
                stroke={activeLayer === 'backend' ? '#1F6E58' : '#DDD4CA'}
                strokeWidth="2"
              />
              <text
                x="440"
                y="156"
                textAnchor="middle"
                fill={activeLayer === 'backend' ? '#FAF8F5' : '#141413'}
                fontSize="11"
                fontWeight="700"
                fontFamily="Plus Jakarta Sans, sans-serif"
              >
                MongoDB &amp; Ops
              </text>
              <text
                x="440"
                y="173"
                textAnchor="middle"
                fill={activeLayer === 'backend' ? '#E5DEC9' : '#64615C'}
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
              >
                DOCKER · RAZORPAY
              </text>
            </g>
          </svg>

          {/* Interactive Layer Selector Tabs */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {layers.map((layer) => {
              const isSelected = layer.id === activeLayer;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setActiveLayer(layer.id)}
                  className={`px-3 py-2 rounded-xl text-left transition-all border ${
                    isSelected
                      ? 'bg-[#141413] text-[#FAF8F5] border-[#141413] shadow-sm'
                      : 'bg-[#F3EFEA]/70 text-[#3B3936] border-[#DDD4CA] hover:bg-[#EAE3DC]'
                  }`}
                >
                  <div className="font-mono-tech text-[10px] opacity-75 truncate">
                    {layer.code.split('//')[0]}
                  </div>
                  <div className="text-xs font-semibold truncate mt-0.5">
                    {layer.id === 'frontend'
                      ? 'Frontend UI'
                      : layer.id === 'ai'
                      ? 'AI Integration'
                      : 'Backend & DB'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Layer Live Inspector Panel */}
        <motion.div
          key={currentLayer.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-4 rounded-2xl bg-[#FAF8F5] border border-[#DDD4CA] p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono-tech text-[11px] uppercase tracking-wider text-[#C85A32] font-medium">
              {currentLayer.code}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentLayer.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-[11px] font-mono-tech bg-[#F3EFEA] text-[#141413] border border-[#DDD4CA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <h3 className="text-sm font-semibold text-[#141413] mt-2">
            {currentLayer.title}
          </h3>
          <p className="text-xs text-[#57544E] mt-1 leading-relaxed">
            {currentLayer.description}
          </p>
          <div className="mt-3 pt-2.5 border-t border-[#EAE3DC] flex items-center gap-2 font-mono-tech text-[11px] text-[#3B3936] overflow-x-auto">
            <Terminal className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
            <code className="truncate">{currentLayer.pipelineSnippet}</code>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
