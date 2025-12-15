import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'cookie';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'cookie'>(initialTab);

  // Sync tab if prop changes when opening
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

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
              <div className="flex gap-4">
                <button 
                  onClick={() => setActiveTab('privacy')}
                  className={`text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-colors ${activeTab === 'privacy' ? 'bg-brand-500 text-dark-900' : 'text-slate-500 hover:text-white'}`}
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setActiveTab('cookie')}
                  className={`text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-colors ${activeTab === 'cookie' ? 'bg-brand-500 text-dark-900' : 'text-slate-500 hover:text-white'}`}
                >
                  Cookie Policy
                </button>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <span className="material-symbols-outlined text-white">close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 md:p-10 text-slate-300 leading-relaxed text-sm">
              
              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Informativa sulla Privacy (GDPR UE 2016/679)</h3>
                  
                  <section>
                    <h4 className="font-bold text-white mb-2">1. Titolare del Trattamento</h4>
                    <p>Il titolare del trattamento dei dati è <strong>PALERMO ANTONIO</strong>.</p>
                    <p>Sede Legale: Via Caduti sul lavoro 26A, 71026 Deliceto (FG)</p>
                    <p>P.IVA: IT04512350713 | C.F.: PL**********643V</p>
                    <p>Contatto: infodichiarazioneadm@gmail.com | PEC: antonio.palermo.arch@pec.it</p>
                  </section>

                  <section>
                    <h4 className="font-bold text-white mb-2">2. Dati raccolti</h4>
                    <p>Raccogliamo i seguenti dati personali tramite il modulo di contatto:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Nome e Cognome</li>
                      <li>Indirizzo email</li>
                      <li>Dati aziendali (Nome azienda, Potenza impianto)</li>
                      <li>Messaggio dell'utente</li>
                    </ul>
                  </section>

                  <section>
                    <h4 className="font-bold text-white mb-2">3. Finalità del trattamento</h4>
                    <p>I dati forniti verranno utilizzati esclusivamente per:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Rispondere alle richieste di consulenza e preventivo.</li>
                      <li>Inviare informazioni tecniche relative agli obblighi doganali (se richiesto).</li>
                      <li>Adempiere agli obblighi di legge.</li>
                    </ul>
                  </section>

                  <section>
                    <h4 className="font-bold text-white mb-2">4. Base giuridica</h4>
                    <p>Il trattamento si basa sul consenso dell'utente (art. 6, par. 1, lett. a del GDPR) espresso mediante la compilazione del modulo di contatto.</p>
                  </section>

                  <section>
                    <h4 className="font-bold text-white mb-2">5. Conservazione dei dati</h4>
                    <p>I dati saranno conservati per il tempo strettamente necessario a gestire la richiesta e, successivamente, per i termini previsti dalla legge per la conservazione amministrativa (se applicabile).</p>
                  </section>

                  <section>
                    <h4 className="font-bold text-white mb-2">6. Diritti dell'interessato</h4>
                    <p>In ogni momento, l'utente può esercitare i suoi diritti (artt. 15-22 GDPR):</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Accedere ai propri dati.</li>
                      <li>Chiederne la rettifica o la cancellazione.</li>
                      <li>Revocare il consenso.</li>
                    </ul>
                    <p className="mt-2">Per esercitare tali diritti, inviare una mail a: infodichiarazioneadm@gmail.com o antonio.palermo.arch@pec.it</p>
                  </section>
                </div>
              )}

              {activeTab === 'cookie' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Cookie Policy</h3>
                  
                  <section>
                    <h4 className="font-bold text-white mb-2">Cosa sono i cookie</h4>
                    <p>Questo sito utilizza cookie per migliorare l'esperienza di navigazione e analizzare il traffico.</p>
                  </section>

                  <section>
                    <h4 className="font-bold text-white mb-2">Tipologie di cookie utilizzati</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li><strong>Cookie Tecnici:</strong> Necessari per il funzionamento del sito (es. navigazione). Non richiedono consenso.</li>
                      <li><strong>Cookie Analitici (Google Analytics 4):</strong> Utilizzati per raccogliere statistiche anonime sull'uso del sito.</li>
                    </ul>
                  </section>

                  <section>
                    <h4 className="font-bold text-white mb-2">Gestione del consenso</h4>
                    <p>Al primo accesso, è presente un banner (Cookiebot) che permette di accettare o rifiutare i cookie non essenziali. È possibile modificare le preferenze in qualsiasi momento tramite il pannello di gestione dei cookie presente nel footer o nelle impostazioni del browser.</p>
                  </section>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};