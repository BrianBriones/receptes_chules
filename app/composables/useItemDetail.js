import { ref } from "vue";
import { useApi } from "./useApi.js";

/**
 * Composable per obtenir els detalls d'un ítem específic per ID.
 * @param {import('vue').Ref<string>} itemId - El ID de l'ítem a buscar.
 */
export function useItemDetail(itemId) {
  const { get } = useApi();

  const { data: item, pending: loading, error, refresh } = useAsyncData(
    `meal-${itemId.value}`,
    async () => {
      if (!itemId.value) return null;
      const response = await get(`/lookup.php?i=${itemId.value}`);
      return response.data.meals ? response.data.meals[0] : null;
    },
    {
      watch: [itemId]
    }
  );

  return { item, loading, error, fetchItem: refresh };
}
