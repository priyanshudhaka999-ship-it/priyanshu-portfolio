import React, { useState, useEffect, useCallback } from 'react';
import { portfolioData } from './data/portfolioData';
import { useReducedMotionPref } from './hooks/useReducedMotion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import ResumeBanner from './components/ResumeBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const reducedMotion = useReducedMotionPref();
  const [activeSection, setActiveSection] = useState('about');
  const [prefilledSubject, setPrefilledSubject] = useState('');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleNavigate = useCallback((href) => {
    if (!href) return;
    const id = href.replace('#', '');
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
      setActiveSection(id);
    }
  }, [reducedMotion]);

  // Track active section in viewport while scrolling
  useEffect(() => {
    const sectionIds = ['about', 'skills', 'projects', 'services', 'resume', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSubjectAndScroll = (subjectPrefix, itemTitle) => {
    setPrefilledSubject(`${subjectPrefix}: ${itemTitle}`);
    handleNavigate('#contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141413] flex flex-col selection:bg-[#C85A32]/20 selection:text-[#141413]">
      {/* Skip to Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-[#141413] focus:text-[#FAF8F5] focus:text-xs focus:font-mono-tech"
      >
        Skip to main content
      </a>

      <Navbar
        personal={portfolioData.personal}
        navigation={portfolioData.navigation}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <main id="main-content" className="flex-grow">
        <Hero
          personal={portfolioData.personal}
          hero={portfolioData.hero}
          onNavigate={handleNavigate}
          reducedMotion={reducedMotion}
        />

        <About
          about={portfolioData.about}
          personal={portfolioData.personal}
          reducedMotion={reducedMotion}
        />

        <Skills
          skills={portfolioData.skills}
          reducedMotion={reducedMotion}
        />

        <Projects
          projects={portfolioData.projects}
          onSelectProjectForInquiry={(projectTitle) =>
            handleSelectSubjectAndScroll('Project Architecture Inquiry', projectTitle)
          }
          reducedMotion={reducedMotion}
        />

        <Services
          services={portfolioData.services}
          onSelectServiceForInquiry={(serviceTitle) =>
            handleSelectSubjectAndScroll('Service Inquiry', serviceTitle)
          }
          reducedMotion={reducedMotion}
        />

        <ResumeBanner
          resume={portfolioData.resume}
          personal={portfolioData.personal}
          isModalOpen={resumeModalOpen}
          onOpenModal={() => setResumeModalOpen(true)}
          onCloseModal={() => setResumeModalOpen(false)}
        />

        <Contact
          contact={portfolioData.contact}
          personal={portfolioData.personal}
          prefilledSubject={prefilledSubject}
          onClearPrefilledSubject={() => setPrefilledSubject('')}
          reducedMotion={reducedMotion}
        />
      </main>

      <Footer
        personal={portfolioData.personal}
        navigation={portfolioData.navigation}
        socials={portfolioData.contact.socials}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
