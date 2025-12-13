import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSeoContent = async (
  keyword: string,
  type: string
): Promise<string> => {
  try {
    const ai = getClient();
    // Using gemini-2.5-flash for speed and efficiency in generating structured text
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      Agisci come un esperto di SEO e Copywriting per il settore fotovoltaico B2B.
      Stai scrivendo per conto di "DichiarazioneDiConsumo", un team di ingegneri specializzati in pratiche doganali per impianti >20kW.
      
      Il tono di voce deve essere:
      - Plurale ("Noi", "Il nostro team")
      - Autorevole ma accessibile
      - Chiaro e diretto
      - Solare ma rigoroso ("Ingegneri dal volto umano")

      Genera una struttura (outline) dettagliata per un contenuto di tipo: ${type}.
      Keyword focus: "${keyword}".

      Il contenuto deve convincere il lettore (titolare di azienda) a delegare la burocrazia al nostro team per evitare sanzioni.
      Usa formattazione Markdown.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Nessun contenuto generato.";
  } catch (error) {
    console.error("Error generating content:", error);
    return `Errore nella generazione: ${(error as Error).message}. Assicurati di aver impostato l'API KEY.`;
  }
};