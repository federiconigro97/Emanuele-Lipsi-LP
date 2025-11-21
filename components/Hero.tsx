import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left pt-8 lg:pt-0">
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
              <span className="text-sm text-brand-100 font-medium tracking-wide uppercase">Scadenza Dichiarazione 2025</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 tracking-tight"
            >
              Burocrazia Fotovoltaico <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">
                Aziende {'>'} 20kW
              </span>
            </motion.h1>

            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="text-xl lg:text-2xl font-medium text-white mb-6"
            >
              Ci occupiamo noi della tua <span className="text-brand-400">Dichiarazione Consumo ADM</span> e della <span className="text-brand-400">Licenza di Esercizio</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Specializzati in pratiche per <strong>Officina Elettrica</strong>. Gestisco il <strong>Modello AD-1</strong>, la <strong>vidimazione registro di produzione</strong> e l'<strong>assistenza portale STD Agenzia Dogane</strong>.
              <br/>Affida a me l'<strong>invio telematico dichiarazione annuale accise</strong> ed evita sanzioni.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={onCtaClick}
                className="relative group px-8 py-4 bg-brand-500 text-dark-900 font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,193,7,0.6)]"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -translate-x-full"></div>
                <span className="relative flex items-center gap-2">
                  Consulenza Dichiarazione
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-xl transition-all backdrop-blur-sm">
                Servizi Gestione
              </button>
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="lg:w-1/2 relative w-full"
          >
             {/* Abstract Composition */}
             <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Central Orb */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-orange-600/20 rounded-full animate-float blur-3xl"></div>
                
                {/* Floating Cards */}
                <motion.div 
                   animate={{ y: [-10, 10, -10] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-10 right-0 z-20 glass-card p-4 rounded-2xl shadow-2xl border-l-4 border-brand-500 w-64"
                >
                   <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-500/20 rounded-lg text-green-400 flex items-center justify-center">
                        <span className="material-symbols-outlined" style={{fontSize: '20px'}}>verified_user</span>
                      </div>
                      <span className="font-bold text-sm">Modello AD-1 Inviato</span>
                   </div>
                   <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-green-500 w-full h-full"></div>
                   </div>
                </motion.div>

                <motion.div 
                   animate={{ y: [10, -10, 10] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-10 left-0 z-20 glass-card p-4 rounded-2xl shadow-2xl border-l-4 border-blue-500 w-64"
                >
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 flex items-center justify-center">
                        <span className="material-symbols-outlined" style={{fontSize: '20px'}}>description</span>
                      </div>
                      <div>
                         <span className="block text-xs text-slate-400">Codice Ditta</span>
                         <span className="font-bold text-lg font-mono">IT00AL...OK</span>
                      </div>
                   </div>
                </motion.div>

                {/* Main Visual - A stylized document turning into energy */}
                <div className="absolute inset-10 glass-card rounded-3xl flex flex-col items-center justify-center border border-white/10 overflow-hidden bg-dark-800/80">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent"></div>
                    <span className="material-symbols-outlined text-brand-500 drop-shadow-[0_0_15px_rgba(255,193,7,0.5)] mb-4" style={{fontSize: '80px'}}>fact_check</span>
                    <h3 className="text-2xl font-display font-bold text-center">Licenza Esercizio<br/>Attiva</h3>
                    <p className="text-slate-500 text-sm mt-2 text-center px-8">Prot. Dogane 2025<br/>Officina Elettrica OK</p>
                </div>
             </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest">Adempimenti GSE e Dogane</span>
          <span className="material-symbols-outlined animate-bounce">keyboard_arrow_down</span>
        </motion.div>
      </div>
    </section>
  );
};