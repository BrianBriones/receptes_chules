<template>
  <div>
    <h1>Busca les teves Receptes</h1>
    <div class="controls">
      <SearchBar v-model="query" @search="search" />
      <button @click="search" :disabled="loading">Cerca</button>
    </div>

    <div v-if="loading">Carregant...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div class="results">
      <ItemCard
        v-for="item in results"
        :key="item.idMeal || item.id"
        :hide-details="true"
        :item="item"
      >
        <template #actions>
          <button
            @click="toggleFavorite(item)"
            :class="{
              'favorite-button': true,
              'is-favorite': isFavorite(item.idMeal || item.id),
            }"
          >
            {{ isFavorite(item.idMeal || item.id) ? "❤️" : "🤍" }}
          </button>
          <NuxtLink :to="`/item/${item.idMeal}`" class="details-button">
            Detalls
          </NuxtLink>
        </template>
      </ItemCard>
    </div>
  </div>
</template>

<script>
import { useSearch } from "../composables/useSearch";
import ItemCard from "../Components/ItemCard.vue";
import SearchBar from "../Components/searchBar.vue";
import { useFavoritesStore } from "../stores/favoritesStore";

export default {
  components: { ItemCard, SearchBar },
  setup() {
    const { query, results, loading, error, search } = useSearch();
    const favoritesStore = useFavoritesStore();

    function toggleFavorite(item) {
      const itemId = item.idMeal || item.id;
      if (favoritesStore.isFavorite(itemId)) {
        favoritesStore.removeFavorite(itemId);
      } else {
        favoritesStore.addFavorite(item);
      }
    }

    return {
      query,
      results,
      loading,
      error,
      isFavorite: favoritesStore.isFavorite,
      toggleFavorite,
      search,
    };
  },
};
</script>

<style scoped>
.controls {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}
.results {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}
.error {
  color: red;
}
.favorite-button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.2s;
  width: 100%;
}
.favorite-button.is-favorite {
  background-color: transparent;
  color: red;
}
.details-button {
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #6d28d9;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

/* Enhanced search page styles */
.results {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}
.loader {
  text-align: center;
  padding: 20px;
  font-weight: 700;
  color: var(--muted);
}
.no-results {
  padding: 24px;
  text-align: center;
  color: var(--muted);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.6),
    rgba(255, 250, 240, 0.6)
  );
  border-radius: 12px;
}
.search-controls {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 18px;
}

.results-container {
  margin-top: 12px;
}

@media (max-width: 800px) {
  .results {
    grid-template-columns: repeat(1, 1fr);
  }
  .search-controls {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
