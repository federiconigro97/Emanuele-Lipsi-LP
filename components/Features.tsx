import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Analisi Licenza e Codice Ditta",
    desc: "Verifichiamo lo stato della tua Licenza di Esercizio (Accise) e la validità del Codice Ditta. Se l'impianto non è ancora denunciato, pianifichiamo subito la regolarizzazione.",
    icon: "manage_search",
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    id: 2,
    title: "Compilazione Registro",
    desc: "Recuperiamo le letture dai tuoi contatori e prepariamo il Registro di Produzione fotovoltaico, garantendone la corretta tenuta e la vidimazione annuale.",
    icon: "description",
    color: "text-brand-400",
    bg: "bg-brand-400/10"
  },
  {
    id: 3,
    title: "Invio Telematico Dichiarazione",
    desc: "Gestiamo l'invio telematico della Dichiarazione Annuale di Consumo sul portale dell'Agenzia delle Dogane. Ricevi la ricevuta ufficiale di protocollo in 24 ore.",
    icon: "send",
    color: "text-green-400",
    bg: "bg-green-400/10"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Gestione Fiscale Impianti <span className="text-brand-500">Senza Stress</span>.
          </motion.h2>
          <p className="text-lg text-slate-400">
            Un processo collaudato in 3 step per la <strong>gestione amministrativa impianti fotovoltaici per aziende</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 group h-full"
            >
              <div className={`glass-card p-8 rounded-2xl h-full border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-2 flex flex-col`}>
                <div className={`w-16 h-16 ${step.bg} rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                  <span className={`material-symbols-outlined ${step.color}`} style={{ fontSize: '32px' }}>{step.icon}</span>
                </div>
                
                <div className="text-5xl font-display font-bold text-white/5 absolute top-4 right-4 select-none">0{step.id}</div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-grow">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Risk Section - High Contrast - Group B Keywords */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-red-900/20 to-red-600/10 border border-red-500/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
        >
           <div className="p-4 bg-red-500/20 rounded-full animate-pulse flex-shrink-0">
              <span className="material-symbols-outlined text-red-500" style={{ fontSize: '48px' }}>warning</span>
           </div>
           <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Sanzioni Dogane Fotovoltaico: Il rischio è reale</h3>
              <p className="text-slate-300">
                La <strong>mancata dichiarazione di consumo</strong> comporta pesanti sanzioni amministrative e accertamenti fiscali.
                Hai un impianto non denunciato? Richiedi subito una <strong>regolarizzazione</strong> per evitare multe oltre i 3.000€, più il recupero delle accise e degli interessi.
                Ti ricordiamo in anticipo tutte le scadenze fiscali per non sbagliare mai.
                <span className="block mt-2 text-red-400 font-medium">Il costo della consulenza è una frazione della sanzione.</span>
              </p>
           </div>
           <button className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg font-medium transition-colors whitespace-nowrap">
              Evita Sanzioni Dogane
           </button>
        </motion.div>

      </div>
    </section>
  );
};