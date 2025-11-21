import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="relative w-full max-w-4xl bg-dark-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10 max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-dark-950">
              <div>
                <h2 className="text-xl md:text-2xl font-display font-bold text-white">Guida Completa Obblighi 2025</h2>
                <p className="text-brand-500 text-sm font-medium">Impianti Fotovoltaici Aziendali {'>'} 20kW</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-white">close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 md:p-10 space-y-10 text-slate-300 leading-relaxed">
              
              {/* Intro */}
              <section>
                <h3 className="text-3xl font-bold text-white mb-4">La trappola dei 20kW</h3>
                <p className="mb-4">
                  Molte aziende installano il fotovoltaico per risparmiare, ma ignorano che sopra i <strong>20 kW di potenza</strong> diventano, per lo Stato, dei veri e propri "produttori di energia".
                </p>
                <p className="p-4 bg-red-500/10 border-l-4 border-red-500 text-white rounded-r-lg">
                  <strong>Il problema:</strong> Non basta la connessione al GSE. Entra in gioco l'<strong>Agenzia delle Dogane e dei Monopoli (ADM)</strong>. Ignorare questo ente porta a sanzioni immediate.
                </p>
              </section>

              {/* Chapter 1 */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-brand-500 text-dark-900 rounded-full text-sm font-bold">1</span>
                  L'Officina Elettrica e la Licenza di Esercizio
                </h3>
                <p className="mb-4">
                  Cos'è l'<strong>Officina Elettrica</strong>? Non è un luogo fisico dove si riparano auto, ma uno status fiscale.
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Obbligo:</strong> Chi supera i 20kW deve aprire una posizione presso le Dogane e ottenere il <strong>Codice Ditta</strong>.
                  </li>
                  <li>
                    <strong>La Licenza:</strong> Ogni anno, entro il 16 dicembre, va pagato il <strong>Diritto Annuale di Licenza</strong>.
                  </li>
                </ul>
                <p className="text-sm text-slate-500 italic">Keyword: Licenza fiscale energia, Codice ditta dogane.</p>
              </section>

              {/* Chapter 2 */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-brand-500 text-dark-900 rounded-full text-sm font-bold">2</span>
                  La Dichiarazione Annuale di Consumo (Il GUD)
                </h3>
                <p className="mb-4">
                  È il cuore dell'obbligo fiscale. Ogni anno (scadenza 31 marzo) bisogna comunicare quanto prodotto e quanto consumato all'ADM.
                </p>
                <div className="glass-card p-4 rounded-xl border border-white/5 mb-4">
                  <h4 className="font-bold text-white mb-2">La Procedura Telematica</h4>
                  <p className="text-sm">
                    L'invio avviene tramite il <strong>Servizio Telematico Doganale (STD)</strong> e il software GUD. I portali sono complessi, richiedono firma digitale e accreditamenti specifici. Un errore qui blocca tutto.
                  </p>
                </div>
                <p className="text-sm text-slate-500 italic">Keyword: Dichiarazione consumo annuale energia elettrica, Modello AD-1.</p>
              </section>

              {/* Chapter 3 */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-brand-500 text-dark-900 rounded-full text-sm font-bold">3</span>
                  Registri di Produzione e Letture
                </h3>
                <p className="mb-4">
                   Non finisce con la dichiarazione annuale. L'azienda ha l'obbligo di tenere un <strong>registro di produzione fotovoltaico</strong> vidimato dalle Dogane, dove annotare le letture dei contatori.
                </p>
                <p>
                  Inoltre, ogni 3/5 anni è obbligatoria la <strong>taratura dei contatori fiscali</strong> per garantire la precisione delle misure.
                </p>
              </section>

              {/* Chapter 4 */}
              <section className="bg-red-900/20 p-6 rounded-2xl border border-red-500/20">
                <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined">warning</span>
                  Rischi e Sanzioni: Cosa succede se non dichiari?
                </h3>
                <p className="mb-4 text-white">
                  In caso di mancato invio della dichiarazione o controlli d'ufficio:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-500 mt-1">close</span>
                    <span><strong>Sanzioni Amministrative:</strong> Multe da 500€ a 3.000€ più il recupero delle accise.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-500 mt-1">close</span>
                    <span><strong>Blocco Incentivi GSE:</strong> Il GSE può sospendere i pagamenti se manca la regolarità doganale.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-500 mt-1">close</span>
                    <span><strong>Risvolti Penali:</strong> In casi gravi di evasione accise.</span>
                  </li>
                </ul>
              </section>

              {/* Conclusion */}
              <section className="text-center pt-8 border-t border-white/5">
                <h3 className="text-2xl font-bold text-white mb-4">Esternalizzare per dormire sonni tranquilli</h3>
                <p className="max-w-2xl mx-auto mb-8">
                  Gestire queste pratiche internamente toglie tempo al core business e aumenta i rischi di errore. Affidati a specialisti per la gestione burocratica completa.
                </p>
                <button onClick={onClose} className="bg-brand-500 text-dark-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-400 transition-colors shadow-glow">
                  Richiedi Audit Gratuito
                </button>
              </section>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};