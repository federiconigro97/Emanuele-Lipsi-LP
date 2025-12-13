import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-orange-600 rounded-2xl opacity-30 blur-xl animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
               {/* Updated photo to local file as requested. Please ensure 'antonio-palermo.jpg' exists in your project root/public folder */}
               <div className="bg-slate-800 h-[500px] w-full relative flex items-end">
                  <img 
                    src="./antonio-palermo.jpg" 
                    alt="Antonio Palermo" 
                    className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                  <div className="p-8 relative z-10">
                     <p className="text-brand-400 font-display font-bold text-2xl">Antonio Palermo & Team</p>
                     <p className="text-slate-400">Esperti Gestione Fiscale Impianti</p>
                  </div>
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 right-4 md:-right-6 glass-card p-4 rounded-xl border border-white/10 flex items-center gap-3 shadow-xl z-20">
               <div className="bg-brand-500 text-dark-900 p-2 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined">military_tech</span>
               </div>
               <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">Esperienza</p>
                  <p className="text-white font-bold">+100 Aziende Seguite</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="mt-8 lg:mt-0"
          >
            <h2 className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4">Consulenza Fotovoltaico Industriale</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Oltre la semplice <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Burocrazia.</span>
            </h3>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                <strong className="text-white">L'errore che riscontriamo nel 90% delle aziende?</strong><br />
                Pensare che dopo l'installazione il lavoro sia finito. Spesso la gestione doganale viene trattata come un dettaglio burocratico fastidioso, accorgendosi della gravità solo quando arrivano le sanzioni o il blocco degli incentivi GSE.
              </p>
              
              <p>
                <strong className="text-white">Come operiamo diversamente:</strong><br />
                Non siamo semplici "passacarte". Applichiamo un metodo ingegneristico alla fiscalità: verifichiamo i flussi energetici, preveniamo le anomalie sui contatori e anticipiamo le richieste dell'Agenzia delle Dogane prima che diventino un problema.
              </p>

              <div className="p-6 bg-brand-500/5 border-l-4 border-brand-500 rounded-r-xl my-8">
                <p className="text-white italic font-medium">
                  "Il nostro obiettivo è essere il partner di fiducia per la vostra azienda. Voi producete energia, noi ci occupiamo di tutta la burocrazia e della gestione legale dell'impianto."
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a 
                href="https://www.linkedin.com/in/antonio-palermo-252177252?"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition-all group"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform" style={{ fontSize: '20px' }}>public</span>
                <span>Parliamone su LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};