import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Chi è obbligato alla denuncia di officina elettrica?",
    answer: "L'obbligo di denuncia di Officina Elettrica all'Agenzia delle Dogane scatta per tutti gli impianti fotovoltaici con potenza superiore ai 20 kW che cedono energia in rete o la autoconsumano. Se l'impianto è sotto i 20kW, siete esenti da questo specifico adempimento."
  },
  {
    question: "Cosa succede se non dichiaro consumo fotovoltaico alle Dogane?",
    answer: "Le sanzioni doganali per il fotovoltaico sono severe. La mancata dichiarazione comporta sanzioni amministrative da 500€ a 3.000€, oltre al recupero delle accise non versate e interessi. Inoltre, aumenta drasticamente il rischio di accertamenti fiscali sugli anni passati."
  },
  {
    question: "Qual è la scadenza dichiarazione energia 2025?",
    answer: "L'invio telematico della dichiarazione annuale di consumo deve avvenire entro il 31 marzo di ogni anno. Consigliamo di contattarci entro febbraio per raccogliere i dati ed evitare colli di bottiglia nel portale Agenzia Dogane."
  },
  {
    question: "È possibile la regolarizzazione impianto fotovoltaico non denunciato?",
    answer: "Sì. Se avete un impianto >20kW mai denunciato, possiamo procedere con la regolarizzazione. Questo permette di pagare sanzioni ridotte e mettere in regola la posizione fiscale prima che arrivi un controllo d'ufficio."
  },
  {
    question: "Come pagare il diritto di licenza accise di dicembre?",
    answer: "Il Diritto di Licenza Annuale accise va versato entro il 16 dicembre di ogni anno tramite F24 Accise. Ci occupiamo noi di preparare il modello F24 per la vostra azienda."
  },
  {
    question: "Qual è il costo  della pratica verso l'Agenzia Dogane per un impianto fotovoltaico aziendale?",
    answer: "Il costo dipende dalla complessità (numero di contatori, presenza di sistemi di accumulo, anni arretrati). In ogni caso, la tariffa per la consulenza compilazione dichiarazione consumo energia elettrica è nettamente inferiore al costo di una singola sanzione minima."
  },
  {
    question: "Serve lo SPID o la firma digitale per il portale GUD?",
    answer: "Sì, per accedere al portale Dogane serve lo SPID o la CNS. Tuttavia, con una delega specifica, possiamo operare noi come consulenti delegati per l'invio telematico dichiarazione annuale accise, così non dovrete preoccuparvi della parte fiscale."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-dark-800" id="faq">
      {/* Updated outer container to match the wider layout of other sections */}
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
             <div className="inline-flex items-center justify-center p-3 bg-brand-500/10 rounded-xl mb-4">
               <span className="material-symbols-outlined text-brand-500" style={{ fontSize: '24px' }}>help</span>
             </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Domande Frequenti: Obblighi e Sanzioni
            </h2>
            <p className="mt-4 text-slate-400">
              Le risposte definitive su <strong>Sanzioni Dogane</strong>, <strong>Scadenza Dichiarazione</strong> e <strong>Codice Ditta</strong>.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/5 rounded-2xl bg-white/5 overflow-hidden hover:border-brand-500/30 transition-colors"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-lg font-medium transition-colors ${activeIndex === index ? 'text-brand-400' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors flex items-center justify-center ${activeIndex === index ? 'bg-brand-500 text-dark-900' : 'bg-white/10 text-slate-400'}`}>
                    {activeIndex === index ? <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>remove</span> : <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};