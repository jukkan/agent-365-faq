import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { FaqList } from './components/FaqList';
import { CoverageSection } from './components/CoverageSection';
import { DependenciesSection } from './components/DependenciesSection';
import { GotchasSection } from './components/GotchasSection';
import { OpenQuestionsSection } from './components/OpenQuestionsSection';

function App() {
  const handleNavigate = (section: string) => {
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const wrap = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={handleNavigate} />
      <main>
        <section id="overview" className="scroll-mt-20">
          <Hero onNavigate={handleNavigate} />
        </section>
        <section id="coverage" className="scroll-mt-20 py-16 bg-white">
          <div className={wrap}><CoverageSection /></div>
        </section>
        <section id="dependencies" className="scroll-mt-20 py-16 bg-gray-50">
          <div className={wrap}><DependenciesSection /></div>
        </section>
        <section id="gotchas" className="scroll-mt-20 py-16 bg-white">
          <div className={wrap}><GotchasSection /></div>
        </section>
        <section id="faq" className="scroll-mt-20 py-16 bg-gray-50">
          <div className={wrap}><FaqList /></div>
        </section>
        <section id="open-questions" className="scroll-mt-20 py-16 bg-white">
          <div className={wrap}><OpenQuestionsSection /></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
