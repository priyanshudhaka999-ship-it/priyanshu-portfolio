import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, Info, X, CheckCircle2 } from 'lucide-react';

export default function ResumeBanner({
  resume,
  personal,
  isModalOpen,
  onOpenModal,
  onCloseModal,
}) {
  return (
    <section
      id="resume"
      className="py-20 bg-[#FAF8F5] border-b border-[#E5DEC9] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#141413] text-[#FAF8F5] p-8 sm:p-10 lg:p-12 shadow-elevated relative overflow-hidden">
          {/* Subtle Warm Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#C85A32]/20 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#C85A32] font-semibold block">
                {resume.sectionTag}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                {resume.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#EAE3DC]/80 max-w-2xl leading-relaxed">
                {resume.description}
              </p>

              {/* Honest Placeholder Notice */}
              <div className="pt-2 flex items-start gap-2.5 text-xs text-[#EAE3DC]/70 bg-[#22211F] p-3.5 rounded-2xl border border-[#FAF8F5]/10 max-w-2xl">
                <Info className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#FAF8F5]">Document Path:</strong>{' '}
                  <code className="font-mono-tech text-[#C85A32]">{resume.fileUrl}</code> — Clearly documented placeholder PDF (zero invented employment history or credentials).
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={resume.fileUrl}
                download={resume.fileName}
                onClick={(e) => {
                  // Also open the inspection modal so the user in Canvas or browser can inspect placeholder details immediately
                  onOpenModal();
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#C85A32] hover:bg-[#b24d28] text-[#FAF8F5] font-medium text-sm transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                type="button"
                onClick={onOpenModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#22211F] hover:bg-[#3B3936] text-[#FAF8F5] border border-[#FAF8F5]/15 font-mono-tech text-xs uppercase tracking-wider transition-colors"
              >
                <Eye className="w-4 h-4 text-[#C85A32]" />
                <span>Inspect Placeholder Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Placeholder Inspection & Download Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#141413]/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-3xl bg-[#FAF8F5] border border-[#DDD4CA] p-6 sm:p-8 shadow-elevated space-y-5"
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-modal-title"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#E5DEC9] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#F6E8E2] text-[#C85A32] flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono-tech text-[11px] uppercase text-[#C85A32]">
                      RESUME CONFIGURATION
                    </span>
                    <h3 id="resume-modal-title" className="text-xl font-bold text-[#141413]">
                      {personal.name} — Resume Placeholder
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onCloseModal}
                  aria-label="Close resume modal"
                  className="p-2 rounded-full bg-[#F3EFEA] text-[#141413] hover:bg-[#EAE3DC]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#F3EFEA] border border-[#DDD4CA] space-y-2 text-xs text-[#3B3936]">
                <div className="font-mono-tech text-[#141413] font-semibold">
                  Configured File Location:
                </div>
                <code className="block p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E5DEC9] font-mono-tech text-[#C85A32] break-all">
                  public/resume/Priyanshu_Dhaka_Resume_Placeholder.pdf
                </code>
                <p className="leading-relaxed pt-1">
                  {resume.placeholderNotice}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-[#64615C]">
                  Verified Skills Included in Profile:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'React',
                    'Next.js',
                    'JavaScript',
                    'Tailwind CSS',
                    'Node.js',
                    'Express.js',
                    'MongoDB',
                    'AI APIs & Integration',
                    'Framer Motion',
                    'Razorpay',
                    'Docker',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono-tech bg-[#F3EFEA] text-[#141413] border border-[#DDD4CA]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#1F6E58]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 pt-2 border-t border-[#E5DEC9]">
                <a
                  href={resume.fileUrl}
                  download={resume.fileName}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-[#C85A32] text-[#FAF8F5] hover:bg-[#141413] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Placeholder PDF</span>
                </a>
                <button
                  type="button"
                  onClick={onCloseModal}
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
