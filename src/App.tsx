import { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FaqList } from './components/FaqList';
import { ScenariosSection } from './components/ScenariosSection';
import { GovernanceSection } from './components/GovernanceSection';
import { EcosystemSection } from './components/EcosystemSection';
import { OpenQuestionsSection } from './components/OpenQuestionsSection';
import { ArchitectureDiagramSection } from './components/ArchitectureDiagramSection';

type Section = 'overview' | 'faq' | 'scenarios' | 'governance' | 'architecture' | 'ecosystem' | 'open-questions';

function App() {
  const [, setActiveSection] = useState<Section>('overview');
  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null),
    scenarios: useRef<HTMLDivElement>(null),
    governance: useRef<HTMLDivElement>(null),
    architecture: useRef<HTMLDivElement>(null),
    ecosystem: useRef<HTMLDivElement>(null),
    'open-questions': useRef<HTMLDivElement>(null),
  };

  const handleNavigate = (section: string) => {
    const targetSection = section as Section;
    setActiveSection(targetSection);

    setTimeout(() => {
      sectionRefs[targetSection]?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  useEffect(() => {
    // Smooth scroll is natively supported in modern browsers
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={handleNavigate} />

      <main>
        {/* Overview Section */}
        <section ref={sectionRefs.overview} id="overview" className="scroll-mt-20">
          <Hero onNavigate={handleNavigate} />
        </section>

        {/* FAQ Section */}
        <section ref={sectionRefs.faq} id="faq" className="scroll-mt-20 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FaqList />
          </div>
        </section>

        {/* Scenarios Section */}
        <section ref={sectionRefs.scenarios} id="scenarios" className="scroll-mt-20 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScenariosSection onNavigate={handleNavigate} />
          </div>
        </section>

        {/* Governance Section */}
        <section ref={sectionRefs.governance} id="governance" className="scroll-mt-20 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GovernanceSection />
          </div>
        </section>

        {/* Architecture Diagram Section */}
        <section ref={sectionRefs.architecture} id="architecture" className="scroll-mt-20 py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ArchitectureDiagramSection />
          </div>
        </section>

        {/* Ecosystem Section */}
        <section ref={sectionRefs.ecosystem} id="ecosystem" className="scroll-mt-20 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EcosystemSection />
          </div>
        </section>

        {/* Open Questions Section */}
        <section ref={sectionRefs['open-questions']} id="open-questions" className="scroll-mt-20 py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <OpenQuestionsSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
