import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowUpRight,
  Info,
  RotateCcw,
} from 'lucide-react';
import { createFadeUpVariant, createStaggerContainer } from '../utils/motionVariants';

export default function Contact({
  contact,
  personal,
  prefilledSubject,
  onClearPrefilledSubject,
  reducedMotion,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [simulateErrorMode, setSimulateErrorMode] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: prefilledSubject,
      }));
      if (onClearPrefilledSubject) {
        onClearPrefilledSubject();
      }
    }
  }, [prefilledSubject, onClearPrefilledSubject]);

  const validate = (values) => {
    const newErrors = {};
    if (!values.name || values.name.trim().length < 2) {
      newErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email || !emailRegex.test(values.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!values.subject || values.subject.trim().length < 3) {
      newErrors.subject = 'Please provide a clear subject (at least 3 characters).';
    }
    if (!values.message || values.message.trim().length < 15) {
      newErrors.message = 'Please include a brief project or role overview (at least 15 characters).';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValues = { ...formData, [name]: value };
    setFormData(nextValues);
    if (touched[name]) {
      setErrors(validate(nextValues));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitState('error');
      return;
    }

    setSubmitState('submitting');

    // Check if an external endpoint is configured via environment variables
    const configuredEndpoint =
      typeof import.meta !== 'undefined' &&
      import.meta.env &&
      import.meta.env.VITE_CONTACT_ENDPOINT
        ? import.meta.env.VITE_CONTACT_ENDPOINT
        : '';

    setTimeout(async () => {
      if (simulateErrorMode) {
        setSubmitState('error');
        return;
      }

      if (configuredEndpoint) {
        try {
          const response = await fetch(configuredEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            setSubmitState('success');
          } else {
            setSubmitState('error');
          }
        } catch {
          setSubmitState('error');
        }
      } else {
        // Client-side validated preview state (does not pretend a backend sent the message silently)
        setSubmitState('success');
      }
    }, 450);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
    setSubmitState('idle');
  };

  const copyToClipboard = (text, setFlag) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setFlag(true);
      setTimeout(() => setFlag(false), 2200);
    } catch {
      setFlag(false);
    }
  };

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || 'Project Inquiry for Priyanshu Dhaka'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  const containerVariants = createStaggerContainer(reducedMotion, 0.1);
  const itemVariants = createFadeUpVariant(reducedMotion);

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#FAF8F5] border-b border-[#E5DEC9] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Configurable Social Placeholders */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <motion.span
                variants={itemVariants}
                className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#C85A32] font-semibold block mb-3"
              >
                {contact.sectionTag}
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141413] leading-[1.15]"
              >
                {contact.headline}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-base text-[#57544E] mt-3 leading-relaxed"
              >
                {contact.subtitle}
              </motion.p>
            </div>

            {/* Direct Email Card (Configurable Placeholder) */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-3xl bg-[#F3EFEA] border border-[#DDD4CA] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs uppercase tracking-wider text-[#64615C]">
                  DIRECT EMAIL (PLACEHOLDER)
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech bg-[#F6E8E2] text-[#C85A32]">
                  Configurable
                </span>
              </div>
              <div className="text-base sm:text-lg font-bold text-[#141413] break-all">
                {personal.email}
              </div>
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={() => copyToClipboard(personal.email, setCopiedEmail)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono-tech bg-[#FAF8F5] hover:bg-[#EAE3DC] text-[#141413] border border-[#DDD4CA] transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#1F6E58]" />
                      <span>Copied Address</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#C85A32]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono-tech bg-[#141413] text-[#FAF8F5] hover:bg-[#C85A32] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail Client</span>
                </a>
              </div>
            </motion.div>

            {/* Social Links (Configurable Placeholders) */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="font-mono-tech text-xs uppercase tracking-wider text-[#64615C] font-semibold">
                Social Profiles (Configurable Placeholders):
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {contact.socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-[#F3EFEA]/70 hover:bg-[#F3EFEA] border border-[#DDD4CA] hover:border-[#C85A32]/50 transition-all"
                  >
                    <div>
                      <div className="text-sm font-bold text-[#141413]">
                        {social.label}
                      </div>
                      <div className="font-mono-tech text-xs text-[#64615C]">
                        {social.handle}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#64615C] group-hover:text-[#C85A32] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-[#F3EFEA] border border-[#DDD4CA] p-6 sm:p-8 lg:p-10 shadow-subtle">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-[#DDD4CA]">
                <div>
                  <h3 className="text-xl font-bold text-[#141413]">
                    Send a Project or Role Inquiry
                  </h3>
                  <p className="text-xs text-[#57544E] mt-0.5">
                    Client-side validated form with transparent backend status.
                  </p>
                </div>

                {/* Toggle to test error state easily during QA review */}
                <label className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#57544E] cursor-pointer select-none bg-[#FAF8F5] px-3 py-1.5 rounded-xl border border-[#DDD4CA]">
                  <input
                    type="checkbox"
                    checked={simulateErrorMode}
                    onChange={(e) => setSimulateErrorMode(e.target.checked)}
                    className="rounded border-[#DDD4CA] text-[#C85A32] focus:ring-[#C85A32]"
                  />
                  <span>Simulate Network Error</span>
                </label>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono-tech text-xs uppercase tracking-wider text-[#141413] font-semibold mb-2"
                    >
                      Your Name <span className="text-[#C85A32]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g., Alex Morgan"
                      aria-invalid={Boolean(touched.name && errors.name)}
                      aria-describedby={touched.name && errors.name ? 'error-name' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#141413] placeholder-[#8C8881] focus:outline-none focus:ring-2 transition-all ${
                        touched.name && errors.name
                          ? 'border-red-600 focus:ring-red-600/30'
                          : 'border-[#DDD4CA] focus:border-[#C85A32] focus:ring-[#C85A32]/20'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p id="error-name" className="mt-1.5 text-xs text-red-700 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono-tech text-xs uppercase tracking-wider text-[#141413] font-semibold mb-2"
                    >
                      Email Address <span className="text-[#C85A32]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="alex@company.com"
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={touched.email && errors.email ? 'error-email' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#141413] placeholder-[#8C8881] focus:outline-none focus:ring-2 transition-all ${
                        touched.email && errors.email
                          ? 'border-red-600 focus:ring-red-600/30'
                          : 'border-[#DDD4CA] focus:border-[#C85A32] focus:ring-[#C85A32]/20'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p id="error-email" className="mt-1.5 text-xs text-red-700 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono-tech text-xs uppercase tracking-wider text-[#141413] font-semibold mb-2"
                  >
                    Subject / Engagement Type <span className="text-[#C85A32]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g., Full-Stack SaaS MVP / AI Integration Inquiry"
                    aria-invalid={Boolean(touched.subject && errors.subject)}
                    aria-describedby={touched.subject && errors.subject ? 'error-subject' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#141413] placeholder-[#8C8881] focus:outline-none focus:ring-2 transition-all ${
                      touched.subject && errors.subject
                        ? 'border-red-600 focus:ring-red-600/30'
                        : 'border-[#DDD4CA] focus:border-[#C85A32] focus:ring-[#C85A32]/20'
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p id="error-subject" className="mt-1.5 text-xs text-red-700 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono-tech text-xs uppercase tracking-wider text-[#141413] font-semibold mb-2"
                  >
                    Project Details or Role Description <span className="text-[#C85A32]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Share your goals, tech stack requirements, timeline, or role details..."
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={touched.message && errors.message ? 'error-message' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border text-sm text-[#141413] placeholder-[#8C8881] focus:outline-none focus:ring-2 transition-all resize-y ${
                      touched.message && errors.message
                        ? 'border-red-600 focus:ring-red-600/30'
                        : 'border-[#DDD4CA] focus:border-[#C85A32] focus:ring-[#C85A32]/20'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p id="error-message" className="mt-1.5 text-xs text-red-700 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit & Reset Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141413] hover:bg-[#C85A32] disabled:opacity-50 text-[#FAF8F5] text-sm font-medium transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {submitState === 'submitting'
                        ? 'Validating Inquiry...'
                        : 'Validate & Prepare Inquiry'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono-tech text-[#57544E] hover:text-[#141413] bg-[#FAF8F5] border border-[#DDD4CA]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Form</span>
                  </button>
                </div>
              </form>

              {/* Success / Error Feedback Banners */}
              <AnimatePresence mode="wait">
                {submitState === 'error' && (
                  <motion.div
                    key="error-banner"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    role="alert"
                    className="mt-6 p-4 rounded-2xl bg-red-50 border border-red-300 text-red-900 text-xs space-y-1.5"
                  >
                    <div className="font-bold flex items-center gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>
                        {simulateErrorMode
                          ? 'Simulated Endpoint Error Triggered'
                          : 'Please resolve the highlighted validation fields above.'}
                      </span>
                    </div>
                    <p>
                      {simulateErrorMode
                        ? 'You enabled "Simulate Network Error" to verify error handling. Uncheck the toggle above and submit again, or use the direct email link.'
                        : 'Ensure your name, valid email address, subject, and message (at least 15 characters) are filled in.'}
                    </p>
                  </motion.div>
                )}

                {submitState === 'success' && (
                  <motion.div
                    key="success-banner"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    role="status"
                    className="mt-6 p-5 rounded-2xl bg-[#E3F2EE] border border-[#1F6E58]/40 text-[#141413] space-y-3"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#1F6E58] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold">
                          Inquiry Validated &amp; Ready ({formData.subject})
                        </div>
                        <p className="text-xs text-[#3B3936] mt-1 leading-relaxed">
                          Because no backend API key is hardcoded in the frontend bundle, your message has been formatted locally. Choose how you would like to dispatch it below, or configure <code className="font-mono-tech">VITE_CONTACT_ENDPOINT</code> in <code className="font-mono-tech">.env.local</code> for automatic server delivery.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={mailtoHref}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-[#1F6E58] text-[#FAF8F5] hover:bg-[#141413] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Open in Email Client (mailto:)</span>
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          copyToClipboard(
                            `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`,
                            setCopiedPayload
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono-tech bg-[#FAF8F5] text-[#141413] border border-[#DDD4CA]"
                      >
                        {copiedPayload ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#1F6E58]" />
                            <span>Copied Formatted Message</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#C85A32]" />
                            <span>Copy Message Text</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Transparent Form Configuration Notice */}
              <div className="mt-6 pt-4 border-t border-[#DDD4CA] flex items-start gap-2.5 text-xs text-[#64615C]">
                <Info className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <span>{contact.formNotice}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
