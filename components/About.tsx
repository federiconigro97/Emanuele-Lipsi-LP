import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 relative">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Photo & Floating Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative max-w-[500px] mx-auto lg:mx-0 mt-16 lg:mt-0"
          >
            {/* The Main "Frame" Card Wrapper */}
            <div className="relative z-10">
                {/* 1. The White Border Frame */}
                <div className="absolute -inset-1 rounded-[44px] border-[4px] border-white pointer-events-none z-20 shadow-2xl"></div>
                
                {/* 2. The Dark Background Container */}
                <div className="bg-[#121216] rounded-[40px] overflow-hidden relative aspect-square flex items-center justify-center">
                    
                    {/* Grid Background */}
                    <div className="absolute inset-0 z-0 opacity-20" 
                         style={{ 
                             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
                             backgroundSize: '40px 40px' 
                         }}>
                    </div>

                    {/* Content Area (Image & Text) */}
                    <div className="relative z-10 w-[75%] h-[75%]">
                        <div className="w-full h-full bg-slate-800 rounded-2xl overflow-hidden relative shadow-lg group">
                            {/* Image with fallback bg */}
                            <img 
                                src="https://media.licdn.com/dms/image/v2/D4E03AQEnqV8ZbyeLCQ/profile-displayphoto-shrink_200_200/B4EZY0SPnfHkAc-/0/1744633930867?e=1767225600&v=beta&t=mBM02snxTJ8kAplDjPCNnbiV7dWgqjGNEoehrz4ECbA" 
                                alt="Antonio Palermo" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            
                            {/* Text Overlay inside Image */}
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 text-center">
                                <p className="text-brand-500 font-display font-bold text-lg leading-tight">Antonio Palermo & Team</p>
                                <p className="text-slate-300 text-xs font-medium mt-0.5">Esperti Gestione Fiscale Impianti</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Floating Badge - Top Right */}
                <div className="absolute -top-8 -right-8 z-30">
                    <div className="bg-[#1a1a20] border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-xl">
                        <div className="bg-brand-500 text-dark-900 w-10 h-10 rounded-lg flex items-center justify-center font-bold shadow-lg">
                            <span className="material-symbols-outlined" style={{fontSize: '24px'}}>military_tech</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Esperienza</span>
                            <span className="text-white font-bold text-sm whitespace-nowrap">+100 Aziende Seguite</span>
                        </div>
                    </div>
                </div>

                {/* 4. Floating Badge - Bottom Left (LinkedIn) */}
                <a 
                    href="https://www.linkedin.com/in/antonio-palermo-252177252?"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute -bottom-8 -left-8 z-30 group"
                >
                    <div className="bg-[#0A2647] hover:bg-[#0077b5] border border-blue-500/30 p-4 rounded-xl shadow-[0_10px_30px_-10px_rgba(0,119,181,0.5)] flex items-center gap-3 transition-colors">
                        <div className="bg-white/10 p-2 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-blue-200 group-hover:text-white transition-colors" style={{fontSize: '24px'}}>public</span>
                        </div>
                        <div className="flex flex-col pr-2">
                            <span className="text-white font-bold text-sm leading-tight">Parliamone su LinkedIn</span>
                        </div>
                    </div>
                </a>
            </div>

          </motion.div>
          
          {/* Right Column: Text Content */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="mt-12 lg:mt-0"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};