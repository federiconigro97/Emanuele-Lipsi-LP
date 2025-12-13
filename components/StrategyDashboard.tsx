import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateSeoContent } from '../services/geminiService';
import { ContentType, StrategicKeyword } from '../types';

interface StrategyDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StrategyDashboard: React.FC<StrategyDashboardProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'market' | 'icp' | 'positioning' | 'tools'>('market');
  const [generating, setGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState('');

  const keywords: StrategicKeyword[] = [
    { term: "dichiarazione consumi dogane fotovoltaico", intent: "Transactional", volume: "High" },
    { term: "sanzioni mancata dichiarazione consumo", intent: "Fear/Urgency", volume: "Med" },
    { term: "scadenza dogane impianto 20kw", intent: "Informational", volume: "High" },
    { term: "consulente pratiche gse dogane", intent: "Commercial", volume: "Med" },
  ];

  const handleGenerate = async () => {
    if (!selectedKeyword) return;
    setGenerating(true);
    const content = await generateSeoContent(selectedKeyword, ContentType.BLOG_POST);
    setGeneratedContent(content);
    setGenerating(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Strategia: Antonio Palermo & Team</h2>
                <p className="text-slate-500 text-sm">Analisi di mercato, ICP e Strumenti Operativi</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-500">close</span>
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 bg-slate-50 border-r border-slate-200 p-4 flex flex-col gap-2">
                <button
                  onClick={() => setActiveTab('market')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-colors ${activeTab === 'market' ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>map</span> Ricerca Mercato
                </button>
                <button
                  onClick={() => setActiveTab('icp')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-colors ${activeTab === 'icp' ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>ads_click</span> Target (ICP)
                </button>
                <button
                  onClick={() => setActiveTab('positioning')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-colors ${activeTab === 'positioning' ? 'bg-brand-100 text-brand-700' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>lightbulb</span> Posizionamento
                </button>
                <div className="my-2 border-t border-slate-200"></div>
                <button
                  onClick={() => setActiveTab('tools')}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-colors ${activeTab === 'tools' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>edit_note</span> AI Content Gen
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-8 overflow-y-auto bg-white">
                {activeTab === 'market' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800">Analisi di Mercato (Italia)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-800 mb-2">La Situazione Attuale</h4>
                        <p className="text-sm text-blue-900 leading-relaxed">
                          In Italia, ogni impianto FV {'>'}20kW è considerato "Officina Elettrica". 
                          I proprietari devono inviare la dichiarazione annuale all'Agenzia delle Dogane entro marzo.
                          Molti imprenditori ignorano l'obbligo o si affidano a commercialisti generalisti che spesso sbagliano procedura.
                        </p>
                      </div>
                      <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">I Competitors</h4>
                        <ul className="text-sm text-red-900 space-y-2 list-disc list-inside">
                          <li><strong>Grandi ESCO:</strong> Costose, lente, impersonali.</li>
                          <li><strong>Installatori:</strong> Fanno O&M ma odiano la burocrazia.</li>
                          <li><strong>Studi Tecnici Generalisti:</strong> Non specializzati, rischio errori.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-6 bg-green-50 rounded-xl border border-green-100">
                        <h4 className="font-bold text-green-800 mb-2">L'Opportunità per Antonio</h4>
                        <p className="text-sm text-green-900">
                          C'è un vuoto di mercato per una figura <strong>iper-specializzata</strong> e <strong>agile</strong>. 
                          Il cliente vuole solo togliersi il pensiero ed evitare multe. Antonio vince su velocità e contatto umano.
                        </p>
                    </div>
                  </div>
                )}

                {activeTab === 'icp' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800">Ideal Customer Profile (ICP)</h3>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-2xl">🏭</div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900">L'Imprenditore PMI Manifatturiera</h4>
                          <p className="text-slate-600 mt-1">Aziende metalmeccaniche, logistiche o agricole del Nord/Centro Italia.</p>
                          
                          <div className="grid grid-cols-2 gap-4 mt-6">
                            <div>
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Caratteristiche Impianto</span>
                              <p className="font-medium">Fotovoltaico su tetto, 50kW - 500kW.</p>
                            </div>
                            <div>
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pain Points</span>
                              <ul className="list-disc list-inside text-sm text-slate-700 mt-1">
                                <li>Paura delle sanzioni (migliaia di euro).</li>
                                <li>Odio per il portale Dogane (complicato).</li>
                                <li>Non ha un Energy Manager interno.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'positioning' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-800">Posizionamento Strategico</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                       <div className="p-4 border border-slate-200 rounded-lg">
                          <h4 className="font-bold text-brand-600">Archetipo</h4>
                          <p className="text-2xl font-serif mt-2">L'Angelo Custode Tecnico</p>
                          <p className="text-sm text-slate-500 mt-2">Mix tra Saggio (competenza) e Amico (accessibilità).</p>
                       </div>
                       <div className="p-4 border border-slate-200 rounded-lg">
                          <h4 className="font-bold text-brand-600">Tone of Voice</h4>
                          <p className="text-2xl font-serif mt-2">Solare & Preciso</p>
                          <p className="text-sm text-slate-500 mt-2">"Sono un ingegnere, ma parlo la tua lingua. Sorrido, ma sui numeri non scherzo."</p>
                       </div>
                       <div className="p-4 border border-slate-200 rounded-lg">
                          <h4 className="font-bold text-brand-600">Value Proposition</h4>
                          <p className="text-2xl font-serif mt-2">Zero Sanzioni, Zero Stress</p>
                          <p className="text-sm text-slate-500 mt-2">Il servizio non è "la dichiarazione", è la "tranquillità mentale".</p>
                       </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-bold text-slate-900 mb-4">Keyword Strategiche</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-slate-50 text-slate-500">
                            <tr>
                              <th className="p-3">Keyword</th>
                              <th className="p-3">Intento</th>
                              <th className="p-3">Priorità</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {keywords.map((k, i) => (
                              <tr key={i}>
                                <td className="p-3 font-mono text-brand-600">{k.term}</td>
                                <td className="p-3">{k.intent}</td>
                                <td className="p-3">{k.volume}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'tools' && (
                  <div className="space-y-6 h-full flex flex-col">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-slate-800">Generatore Contenuti AI</h3>
                      <div className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-xs font-bold">Powered by Gemini</div>
                    </div>
                    
                    <p className="text-slate-600">
                      Seleziona una keyword strategica e genera una struttura per un articolo del blog ottimizzato SEO.
                    </p>

                    <div className="flex gap-4">
                      <select 
                        className="flex-1 p-3 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-brand-500 outline-none"
                        value={selectedKeyword}
                        onChange={(e) => setSelectedKeyword(e.target.value)}
                      >
                        <option value="">Seleziona una keyword...</option>
                        {keywords.map((k) => (
                          <option key={k.term} value={k.term}>{k.term}</option>
                        ))}
                      </select>
                      
                      <button 
                        onClick={handleGenerate}
                        disabled={!selectedKeyword || generating}
                        className="bg-brand-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {generating ? (
                          <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        ) : (
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit_note</span>
                        )}
                        Genera Outline
                      </button>
                    </div>

                    <div className="flex-1 bg-slate-50 rounded-xl border border-slate-200 p-4 overflow-y-auto font-mono text-sm text-slate-800 whitespace-pre-wrap">
                      {generatedContent ? generatedContent : <span className="text-slate-400 italic">Il contenuto generato apparirà qui...</span>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};