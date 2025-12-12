<template>
  <div class="favorites-page">
    <h1>Els teus Favorits</h1>
    <div v-if="favorites.length === 0" class="no-favorites">
      <p>
        Encara no tens cap favorit. Afegeix-ne alguns des de la pàgina de cerca!
      </p>
    </div>
    <div v-else class="favorites-grid">
      <ItemCard
        v-for="item in favorites"
        :key="item.idMeal || item.id"
        :item="item"
        :hide-details="true"
      >
        <template #actions>
          <button
            @click="favoritesStore.removeFavorite(item.idMeal || item.id)"
            class="remove-button"
          >
            🗑️ Eliminar
          </button>
          <NuxtLink :to="`/item/${item.idMeal}`" class="details-button">
            Detalls
          </NuxtLink>
        </template>
      </ItemCard>
    </div>
  </div>
</template>
<script setup>
const favoritesStore = useFavoritesStore();
const favorites = favoritesStore.favorites;
</script>
<style scoped>
.favorites-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  text-align: center;
  color: #111827;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.favorites-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.no-favorites {
  text-align: center;
  margin-top: 30px;
  font-size: 1.1em;
  color: #6b7280;
}
.details-button {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: #7c3aed; /* Violeta consistente */
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.details-button:hover {
  background-color: #6d28d9;
}

.remove-button {
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 5px;
  transition: background-color 0.2s;
}

.remove-button:hover {
  background-color: #dc2626;
}
</style>
