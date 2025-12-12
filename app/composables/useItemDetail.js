import { ref } from 'vue';
import { useApi } from './useApi.js';

/**
 * Composable per obtenir els detalls d'un ítem específic per ID.
 * @param {import('vue').Ref<string>} itemId - El ID de l'ítem a buscar.
 */
export function useItemDetail(itemId) {
  const { get } = useApi();
  const item = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchItem = async () => {
    if (!itemId.value) return;
    loading.value = true;
    error.value = null;
    try {
      const response = await get(`/lookup.php?i=${itemId.value}`);
      item.value = response.data.meals ? response.data.meals[0] : null;
    } catch (e) {
      error.value = "Error en carregar els detalls de la recepta.";
    } finally {
      loading.value = false;
    }
  };

  return { item, loading, error, fetchItem };
}
