import { ref } from "vue";
import { useApi } from "./useApi.js";

export const useSearch = () => {
  const api = useApi();

  const query = ref("");
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const search = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.get("/search.php", {
        params: { f: query.value[0] || "a" }, // L'API busca per la primera lletra
      });
      results.value = response.data.meals;
    } catch (e) {
      error.value = "Error carregant dades.";
    }

    loading.value = false;
  };

  return { query, results, loading, error, search };
};
