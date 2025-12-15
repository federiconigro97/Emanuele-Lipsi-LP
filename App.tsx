import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { StrategyDashboard } from './components/StrategyDashboard';
import { FAQ } from './components/FAQ';
import { LeadMagnet } from './components/LeadMagnet';
import { LegalModal } from './components/LegalModal';

// Simple Ticker Component for Social Proof
const Ticker = () => (
  <div className="bg-brand-500 py-3 overflow-hidden flex items-center">
    <div className="animate-marquee whitespace-nowrap flex gap-12 text-dark-900 font-bold uppercase tracking-wider text-sm">
      {[...Array(10)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined" style={{fontSize: '16px'}}>bolt</span> GESTIONE DOGANE FOTOVOLTAICO</span>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined" style={{fontSize: '16px'}}>bolt</span> +100 IMPIANTI GESTITI</span>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined" style={{fontSize: '16px'}}>bolt</span> ZERO SANZIONI</span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

function App() {
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'cookie'>('privacy');

  // Smooth scroll handler with offset for fixed header
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Height of header + breathing room
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const openLegal = (tab: 'privacy' | 'cookie') => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-900 font-sans text-white selection:bg-brand-500 selection:text-dark-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-orange-600 rounded-xl flex items-center justify-center font-bold text-dark-900 shadow-glow group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">description</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">DichiarazioneDi<span className="text-brand-500">Consumo</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#process" 
                onClick={(e) => scrollToSection(e, 'process')}
                className="text-sm text-slate-300 hover:text-white transition-colors font-medium"
              >
                Come Funziona
              </a>
              {/* <a href="#tools" onClick={(e) => scrollToSection(e, 'tools')} className="text-sm text-slate-300 hover:text-white transition-colors font-medium">Risorse Free</a> */}
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-sm text-slate-300 hover:text-white transition-colors font-medium"
              >
                Chi Siamo
              </a>
              <a 
                href="#faq" 
                onClick={(e) => scrollToSection(e, 'faq')}
                className="text-sm text-slate-300 hover:text-white transition-colors font-medium"
              >
                FAQ
              </a>
              <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-white/10 hover:bg-brand-500 hover:text-dark-900 text-white border border-white/10 px-5 py-2 rounded-lg font-bold transition-all text-sm backdrop-blur-sm"
              >
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero onCtaClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        <Ticker />
        
        {/* Sections with IDs for Navigation and scroll-mt (scroll-margin-top) for offset */}
        <div id="process" className="scroll-mt-24">
          <Features />
        </div>
        
        {/* <div id="tools" className="scroll-mt-24"><LeadMagnet /></div> */}
        
        <div id="about" className="scroll-mt-24">
          <About />
        </div>
        
        <div id="faq" className="scroll-mt-24">
          <FAQ />
        </div>
        
        <div id="contact" className="scroll-mt-24">
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark-950 text-slate-500 py-12 border-t border-white/5 relative z-10">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center font-bold text-dark-900">
                 <span className="material-symbols-outlined" style={{fontSize: '18px'}}>description</span>
              </div>
              <span className="font-bold text-xl tracking-tight">DichiarazioneDi<span className="text-brand-500">Consumo</span></span>
            </div>
            <p className="max-w-sm text-sm mb-6 leading-relaxed">
              Offriamo consulenza ingegneristica verticalizzata per le pratiche doganali fotovoltaico. 
              Siamo l'unico servizio integrato che si occupa dell'intera gestione burocratica, azzerando il rischio di sanzioni per la vostra azienda.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Dati Aziendali & Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white font-bold">PALERMO ANTONIO</li>
              <li className="flex items-start gap-3 opacity-80">
                <span className="material-symbols-outlined mt-1" style={{fontSize: '16px'}}>location_on</span>
                <span>Via Caduti sul lavoro 26A<br/>71026 Deliceto (FG)</span>
              </li>
              <li className="flex items-center gap-3 hover:text-brand-400 transition-colors cursor-pointer">
                <span className="material-symbols-outlined" style={{fontSize: '16px'}}>mail</span> infodichiarazioneadm@gmail.com
              </li>
               <li className="flex items-center gap-3 hover:text-brand-400 transition-colors cursor-pointer">
                <span className="material-symbols-outlined" style={{fontSize: '16px'}}>verified_user</span> antonio.palermo.arch@pec.it
              </li>
              <li className="flex items-center gap-3 hover:text-brand-400 transition-colors cursor-pointer">
                <span className="material-symbols-outlined" style={{fontSize: '16px'}}>call</span> +39 327 941 7550
              </li>
              <li className="opacity-60 text-xs mt-2 pt-2 border-t border-white/5">
                P.IVA IT04512350713<br/>
                C.F. PL**********643V
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal & Link</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => openLegal('privacy')} className="hover:text-brand-400 transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => openLegal('cookie')} className="hover:text-brand-400 transition-colors text-left">
                  Cookie Policy
                </button>
              </li>
              <li>
                <a 
                  href="https://www.adm.gov.it/portale/home" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-400 transition-colors flex items-center gap-1"
                >
                  Portale Dogane <span className="material-symbols-outlined" style={{fontSize: '14px'}}>open_in_new</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2025 DichiarazioneDiConsumo. All rights reserved.</p>
          <div className="text-xs opacity-50 text-center md:text-right">
             <p>Sede Legale: Via Caduti sul lavoro 26A, 71026 Deliceto (FG)</p>
          </div>
          
          {/* Admin Trigger for Strategy Dashboard - HIDDEN */}
          <button 
            onClick={() => setIsStrategyOpen(true)}
            className="hidden flex items-center gap-2 text-xs text-slate-600 hover:text-brand-500 transition-colors bg-dark-900 px-3 py-1 rounded-full border border-white/5 hover:border-brand-500/50"
          >
            <span className="material-symbols-outlined" style={{fontSize: '14px'}}>dashboard</span>
            Admin
          </button>
        </div>
      </footer>

      {/* Modals */}
      <StrategyDashboard isOpen={isStrategyOpen} onClose={() => setIsStrategyOpen(false)} />
      <LegalModal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} initialTab={legalTab} />
      
      {/* Global CSS for scrolling ticker */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;