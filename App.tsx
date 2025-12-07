import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { StrategyDashboard } from './components/StrategyDashboard';
import { FAQ } from './components/FAQ';
import { LeadMagnet } from './components/LeadMagnet';

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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 font-sans text-white selection:bg-brand-500 selection:text-dark-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/5">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-orange-600 rounded-xl flex items-center justify-center font-bold text-dark-900 shadow-glow group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined">description</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">GestioneDogane<span className="text-brand-500">FV</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#process" className="text-sm text-slate-300 hover:text-white transition-colors font-medium">Come Funziona</a>
              {/* <a href="#tools" className="text-sm text-slate-300 hover:text-white transition-colors font-medium">Risorse Free</a> */}
              <a href="#about" className="text-sm text-slate-300 hover:text-white transition-colors font-medium">Chi Siamo</a>
              <a href="#faq" className="text-sm text-slate-300 hover:text-white transition-colors font-medium">FAQ</a>
              <button 
                onClick={scrollToContact}
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
        <Hero onCtaClick={scrollToContact} />
        <Ticker />
        <div id="process"><Features /></div>
        {/* <div id="tools"><LeadMagnet /></div> */}
        <div id="about"><About /></div>
        <div id="faq"><FAQ /></div>
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-dark-950 text-slate-500 py-12 border-t border-white/5 relative z-10">
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center font-bold text-dark-900">
                 <span className="material-symbols-outlined" style={{fontSize: '18px'}}>description</span>
              </div>
              <span className="font-bold text-xl tracking-tight">GestioneDogane<span className="text-brand-500">FV</span></span>
            </div>
            <p className="max-w-sm text-sm mb-6 leading-relaxed">
              Offriamo consulenza ingegneristica verticalizzata per le pratiche doganali fotovoltaico. 
              Siamo l'unico servizio integrato che si occupa dell'intera gestione burocratica, azzerando il rischio di sanzioni per la vostra azienda.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 hover:text-dark-900 transition-all">
                 <span className="material-symbols-outlined" style={{fontSize: '18px'}}>public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 hover:text-dark-900 transition-all">
                <span className="material-symbols-outlined" style={{fontSize: '18px'}}>share</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contatti Diretti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 hover:text-brand-400 transition-colors cursor-pointer">
                <span className="material-symbols-outlined" style={{fontSize: '16px'}}>mail</span> info@gestionedoganefv.it
              </li>
              <li className="flex items-center gap-3 hover:text-brand-400 transition-colors cursor-pointer">
                <span className="material-symbols-outlined" style={{fontSize: '16px'}}>call</span> +39 333 000 0000
              </li>
              <li className="opacity-60">P.IVA: IT12345678901</li>
              <li className="opacity-60">Milano • Operativo in tutta Italia</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal & Link</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Portale Dogane</a></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
          <p className="text-xs">© 2025 GestioneDoganeFV. All rights reserved.</p>
          
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