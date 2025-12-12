import { ref } from "vue";

// Minimal implementation: keep a simple stub but include a commented example
// of how to integrate Google Generative AI. The real integration requires
// credentials and the package `@google/generative-ai` installed.

export const useGemini = () => {
  const aiResponse = ref("");
  const isGenerating = ref(false);
  const error = ref(null);

  const generateCreativeText = async (title) => {
    isGenerating.value = true;
    error.value = null;
    aiResponse.value = "";
    try {
      // Simple placeholder text generation to avoid runtime errors.
      await new Promise((r) => setTimeout(r, 600));
      aiResponse.value = `Una breu història creativa sobre ${title}.`;
    } catch (e) {
      error.value = "La IA no està disponible ara mateix.";
    } finally {
      isGenerating.value = false;
    }
  };

  return { aiResponse, isGenerating, error, generateCreativeText };
};
