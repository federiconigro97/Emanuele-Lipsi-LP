import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GuideModal } from './GuideModal';

export const LeadMagnet: React.FC = () => {
  const [kw, setKw] = useState<number | ''>('');
  const [result, setResult] = useState<'safe' | 'danger' | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const handleCalculate = () => {
    if (kw === '') return;
    if (kw > 20) {
      setResult('danger');
    } else {
      setResult('safe');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined" style={{fontSize: '16px'}}>build</span>
              Strumenti Gratuiti
            </div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Il tuo impianto è a rischio sanzioni?
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Molte aziende non sanno che superata una certa soglia di potenza scattano gli obblighi di <strong>Officina Elettrica</strong>. 
              Usa il calcolatore rapido o scarica la nostra checklist per verificare la tua conformità in 5 minuti.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors group cursor-pointer" onClick={() => setIsGuideOpen(true)}>
                <div className="p-3 bg-brand-500 text-dark-900 rounded-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-brand-400 transition-colors">Guida Completa Obblighi 2025</h4>
                  <p className="text-sm text-slate-400">Scopri tutti gli adempimenti ADM e GUD.</p>
                </div>
                <span className="material-symbols-outlined text-slate-500 ml-auto self-center">arrow_forward</span>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-colors group cursor-pointer">
                <div className="p-3 bg-blue-500 text-white rounded-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">checklist</span>
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">Checklist Anti-Sanzioni</h4>
                  <p className="text-sm text-slate-400">PDF scaricabile per verificare i tuoi documenti.</p>
                </div>
                <span className="material-symbols-outlined text-slate-500 ml-auto self-center">download</span>
              </div>
            </div>
          </motion.div>

          {/* Calculator Tool Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 to-orange-600"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-brand-500">calculate</span>
                Calcolatore Obblighi
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Potenza del tuo impianto (kW)
                  </label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={kw}
                      onChange={(e) => {
                        setKw(Number(e.target.value));
                        setResult(null);
                      }}
                      placeholder="Es. 50"
                      className="w-full bg-dark-900/50 border border-white/20 rounded-xl p-4 pl-4 pr-12 text-white text-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all placeholder:text-slate-600"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">kW</span>
                  </div>
                </div>

                <button 
                  onClick={handleCalculate}
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-4 rounded-xl shadow-lg transition-all"
                >
                  Verifica Obblighi
                </button>

                {result === 'danger' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mt-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-red-500 text-2xl">warning</span>
                      <div>
                        <h4 className="font-bold text-white">ATTENZIONE: Officina Elettrica</h4>
                        <p className="text-sm text-red-200 mt-1">
                          Il tuo impianto supera i 20kW. Hai <strong>3 scadenze obbligatorie</strong> (Licenza, Registri, Dichiarazione).
                        </p>
                        <button onClick={() => setIsGuideOpen(true)} className="mt-3 text-xs font-bold uppercase tracking-wide text-red-400 hover:text-white underline decoration-red-500/50 underline-offset-4">
                          Vedi cosa devi fare subito
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {result === 'safe' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mt-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-500 text-2xl">check_circle</span>
                      <div>
                        <h4 className="font-bold text-white">Sotto Soglia Doganale</h4>
                        <p className="text-sm text-green-200 mt-1">
                          Sei sotto i 20kW. Non hai obblighi verso le Dogane (Modello AD-1), ma devi gestire le pratiche GSE.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Guide Modal Integration */}
      <GuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </section>
  );
};