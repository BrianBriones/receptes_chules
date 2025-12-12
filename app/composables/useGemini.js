import { ref } from "vue";

import { GoogleGenerativeAI } from "@google/generative-ai"; // USAR ESTA LIBRERÍA

// Inicializamos la instancia fuera del hook para no recrearla en cada llamada

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

export const useGemini = () => {
  const aiResponse = ref("");

  const isGenerating = ref(false);

  const error = ref(null);

  const generateCreativeText = async (itemName) => {
    isGenerating.value = true;

    error.value = null;

    aiResponse.value = "";

    // Implementació de la memòria cau (cache)
    const cacheKey = `gemini_origin_${itemName}`;
    const cachedResponse = sessionStorage.getItem(cacheKey);

    if (cachedResponse) {
      aiResponse.value = cachedResponse;
      isGenerating.value = false;
      return; // Sortim de la funció si tenim una resposta a la memòria cau
    }

    try {
      // 1. Instanciamos el modelo CORRECTO que tienes en tu lista

      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      // 2. Definimos el prompt

      const prompt = `Digam la historia d'aquest plat: "${itemName}"? 100 paraules com a maxim .`;

      // 3. Llamamos a generateContent (Esta librería permite pasar el string directo)

      const result = await model.generateContent(prompt);

      // 4. Obtenemos la respuesta

      const response = await result.response;

      // En la librería web estándar, text() ES una función

      const textResponse = response.text();
      aiResponse.value = textResponse;
      // Guardem la resposta a la memòria cau per a futures peticions
      sessionStorage.setItem(cacheKey, textResponse);
    } catch (e) {
      console.error("Error Gemini:", e);

      // Personalizamos el mensaje si el error es por permisos/modelo

      if (e.message?.includes("429")) {
        error.value =
          "Has superat la quota de peticions a la IA. Prova-ho de nou més tard.";
      } else if (e.message?.includes("404")) {
        error.value = "Error de modelo: Verifica el nombre 'gemini-2.0-flash'.";
      } else {
        error.value = "La IA no està disponible ara mateix.";
      }
    } finally {
      isGenerating.value = false;
    }
  };

  return { aiResponse, isGenerating, error, generateCreativeText };
};
