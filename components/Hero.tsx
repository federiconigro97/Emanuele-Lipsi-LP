import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-orange-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      {/* Expanded Container for wider layout */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content - Significantly Expanded width to prevent line breaks */}
          <div className="lg:w-[65%] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-lg rounded-full px-4 py-2 mb-8 border border-white/10 shadow-glow"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
              </span>
              <span className="text-sm text-brand-100 font-medium tracking-wide uppercase">Scadenza 31 Marzo 2025</span>
            </motion.div>

            {/* H1 - Unified and fluid */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-display font-bold text-white leading-[1.1] mb-6 tracking-tight"
            >
              Delega la Dichiarazione <br className="hidden xl:block" />
              <span className="text-brand-500">di Energia Elettrica.</span>
            </motion.h1>

            {/* H2 - Concise and One Line on Desktop */}
            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="text-xl lg:text-3xl font-medium text-white mb-8 max-w-5xl mx-auto lg:mx-0"
            >
              Gestiamo la burocrazia completa per Aziende con Impianti <span className="text-brand-400 font-bold whitespace-nowrap">{'>'} 20kW</span>.
            </motion.h2>

            {/* Description - Updated Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-400 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            >
              Recuperiamo i dati dai tuoi contatori e prepariamo la dichiarazione annuale accise tramite il portale dell'Agenzia Dogane. Ricevi la ricevuta ufficiale in 24h.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
            >
              <button 
                onClick={onCtaClick}
                className="relative group px-10 py-5 bg-brand-500 text-dark-900 text-lg font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,193,7,0.6)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -translate-x-full"></div>
                <span className="relative flex items-center gap-2">
                  Richiedi Consulenza
                  <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </span>
              </button>
              
              <div className="flex items-center gap-4 px-4">
                 <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-dark-900 bg-slate-700"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-dark-900 bg-slate-600"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-dark-900 bg-slate-500 flex items-center justify-center text-xs font-bold text-white">+100</div>
                 </div>
                 <div className="text-sm text-slate-400 text-left leading-tight">
                    <span className="block text-white font-bold">Aziende Gestite</span>
                    Soddisfatte
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Content - Slightly condensed to allow more space for text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="lg:w-[35%] relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
             {/* Container constraint */}
             <div className="relative w-full max-w-[600px] aspect-[4/3] lg:aspect-[1/1] flex items-center justify-center">
                
                {/* Frame - White border card */}
                <div className="relative w-full h-full lg:h-[90%] bg-transparent border-4 border-white rounded-[2.5rem] p-2 shadow-2xl flex items-center justify-center bg-dark-900/50 backdrop-blur-sm">
                    
                    {/* Inner Dark Screen */}
                    <div className="w-full h-full bg-dark-900 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                        
                        {/* Icon */}
                        <div className="w-20 h-20 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(255,193,7,0.15)]">
                           <span className="material-symbols-outlined text-brand-500" style={{fontSize: '40px'}}>fact_check</span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-display font-bold text-white text-center mb-1 relative z-10">
                          Licenza Esercizio
                        </h3>
                        <h3 className="text-2xl lg:text-3xl font-display font-bold text-white text-center mb-8 relative z-10">
                          Attiva
                        </h3>
                        
                        {/* Details List */}
                        <div className="w-full px-8 lg:px-12 relative z-10 space-y-0">
                            <div className="flex justify-between items-center py-4 border-t border-white/10">
                                <span className="text-slate-500 font-medium text-sm">Stato Pratica</span>
                                <span className="text-green-500 font-bold flex items-center gap-2 text-sm">
                                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Conforme
                                </span>
                            </div>
                            <div className="flex justify-between items-center py-4 border-t border-white/10 border-b">
                                <span className="text-slate-500 font-medium text-sm">Scadenza</span>
                                <span className="text-white font-mono font-bold tracking-wide text-sm">31/03/2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge Top Right */}
                    <motion.div 
                       initial={{ x: 20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ delay: 1 }}
                       className="absolute -top-6 -right-2 lg:-right-6 bg-dark-900 border border-white/10 p-3 lg:p-4 rounded-xl shadow-2xl flex items-center gap-3 z-20"
                    >
                       <div className="bg-green-500/10 p-2 rounded-lg text-green-500">
                         <span className="material-symbols-outlined" style={{fontSize: '20px'}}>send</span>
                       </div>
                       <div>
                         <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Status Invio</p>
                         <p className="text-white font-bold text-sm">Trasmesso OK</p>
                       </div>
                    </motion.div>

                    {/* Floating Badge Bottom Left */}
                    <motion.div 
                       initial={{ x: -20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ delay: 1.2 }}
                       className="absolute -bottom-6 -left-2 lg:-left-6 bg-dark-900 border border-white/10 p-3 lg:p-4 rounded-xl shadow-2xl flex items-center gap-3 z-20"
                    >
                       <div className="bg-brand-500/10 p-2 rounded-lg text-brand-500">
                         <span className="material-symbols-outlined" style={{fontSize: '20px'}}>badge</span>
                       </div>
                       <div>
                         <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Codice Ditta</p>
                         <p className="text-white font-mono font-bold text-sm">IT00...VERIFIED</p>
                       </div>
                    </motion.div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
