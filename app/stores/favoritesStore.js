import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: [],
  }),

  actions: {
    addFavorite(item) {
      const itemId = item.idMeal || item.id;
      if (!this.favorites.some((f) => (f.idMeal || f.id) === itemId)) {
        this.favorites.push(item);
      }
    },

    removeFavorite(id) {
      this.favorites = this.favorites.filter((f) => (f.idMeal || f.id) !== id);
    },
  },

  getters: {
    isFavorite: (state) => (id) => {
      return state.favorites.some((f) => (f.idMeal || f.id) === id);
    },
  },
});
