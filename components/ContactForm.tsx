import React from 'react';
import { motion } from 'framer-motion';

export const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-900 to-transparent"></div>
      <div className="absolute -right-40 top-20 w-96 h-96 bg-brand-900/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-4">Parliamone.</h2>
              <p className="text-slate-400 text-lg">
                Non aspettare che arrivi la lettera delle Dogane. Mettiamoci in regola oggi stesso.
              </p>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                  <div className="bg-brand-500/20 p-3 rounded-lg text-brand-500 flex items-center justify-center">
                     <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                     <p className="text-xs text-slate-500 uppercase font-bold">Chiamami</p>
                     <p className="text-white font-mono">+39 333 123 4567</p>
                  </div>
               </div>

               <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                  <div className="bg-brand-500/20 p-3 rounded-lg text-brand-500 flex items-center justify-center">
                     <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                     <p className="text-xs text-slate-500 uppercase font-bold">Scrivimi</p>
                     <p className="text-white font-mono">info@emanuele.engineering</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                  <div className="bg-green-500/20 p-3 rounded-lg text-green-500 flex items-center justify-center">
                     <span className="material-symbols-outlined">chat</span>
                  </div>
                  <div>
                     <p className="text-xs text-slate-500 uppercase font-bold">WhatsApp</p>
                     <p className="text-white font-mono">Disponibile</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-orange-600"></div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full bg-dark-900/50 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" 
                      placeholder="Mario Rossi" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Azienda</label>
                    <input 
                      type="text" 
                      className="w-full bg-dark-900/50 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" 
                      placeholder="Rossi SRL" 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-dark-900/50 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600" 
                      placeholder="mario@azienda.it" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Potenza Impianto (kW)</label>
                    <select className="w-full bg-dark-900/50 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                      <option className="bg-dark-900">20 - 50 kW</option>
                      <option className="bg-dark-900">50 - 100 kW</option>
                      <option className="bg-dark-900">100 - 500 kW</option>
                      <option className="bg-dark-900">{'>'} 500 kW</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Come posso aiutarti?</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl p-4 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 resize-none" 
                    placeholder="Ho bisogno di verificare la mia posizione doganale..."
                  ></textarea>
                </div>

                <button className="w-full bg-brand-500 hover:bg-brand-400 text-dark-950 font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                  Richiedi Analisi Gratuita
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};