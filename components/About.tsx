import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-orange-600 rounded-2xl opacity-30 blur-xl animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
               {/* Placeholder for Emanuele's photo - stylized */}
               <div className="bg-slate-800 h-[500px] w-full relative flex items-end">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Emanuele" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                  <div className="p-8 relative z-10">
                     <p className="text-brand-400 font-display font-bold text-2xl">Ing. Emanuele</p>
                     <p className="text-slate-400">Esperto Gestione Fiscale Impianti</p>
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
                  <p className="text-white font-bold">+100 Pratiche/Anno</p>
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
              L'Ingegnere <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">dal volto umano.</span>
            </h3>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Spesso quando si parla di <strong>burocrazia fotovoltaico aziende</strong> si immagina un ufficio grigio e polveroso. 
                Io ho scelto un approccio diverso: <span className="text-white font-medium">Solare, Diretto, Tecnologico.</span>
              </p>
              <p>
                Sono un Consulente per pratiche fotovoltaico post-installazione. So che per te l'impianto deve essere una fonte di guadagno, non di preoccupazioni legali.
                Mi occupo di tutti gli <strong>adempimenti GSE e Dogane</strong> in modo integrato.
              </p>
              <div className="p-6 bg-brand-500/5 border-l-4 border-brand-500 rounded-r-xl my-8">
                <p className="text-white italic font-medium">
                  "Il mio obiettivo? Gestione amministrativa impianti fotovoltaici completa, così l'unica cosa che tu debba firmare sia un foglio all'anno. Al resto penso io."
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-600/30 transition-all">
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>public</span>
                <span>Collegati su LinkedIn</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};