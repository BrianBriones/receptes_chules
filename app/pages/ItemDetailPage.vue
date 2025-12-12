<template>
  <div class="item-detail-page">
    <h1 v-if="!item">Detalls de la Recepta</h1>
    <div v-if="loading">Carregant...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="item" class="item-content">
      <h1>{{ item.strMeal }}</h1>
      <!-- removed large image to keep layout compact; ItemCard shows thumbnail -->
      <ItemCard :item="item" />

      <div class="ai-container">
        <h3>✨ D'on ve aquesta recepta? (IA)</h3>

        <!-- Passem el nom de l'item actual a la funció -->
        <button
          @click="generateCreativeText(item.strMeal)"
          :disabled="isGenerating"
        >
          {{ isGenerating ? "Pensant..." : "Generar informació" }}
        </button>

        <p v-if="aiResponse" class="response-box">
          {{ aiResponse }}
        </p>
      </div>
    </div>
    <div v-if="!loading && !item && !error">
      <p>No s'ha trobat la recepta.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useItemDetail } from "../composables/useItemDetail.js";
import ItemCard from "../Components/ItemCard.vue";
import { useGemini } from "../composables/useGemini";

const { aiResponse, isGenerating, generateCreativeText } = useGemini();

const route = useRoute();
const itemId = ref(route.params.id); // Canviat de 'name' a 'id'

const { item, loading, error, fetchItem } = useItemDetail(itemId);

onMounted(fetchItem);
</script>

<style scoped>
.item-detail-page {
  max-width: 900px;
  margin: 40px auto;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-align: center;
  color: #374151;
}

.item-content h1 {
  font-size: 2.5rem;
  color: #111827;
  margin-bottom: 1.5rem;
}

.item-image {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.error {
  color: #ef4444;
  background-color: #fee2e2;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

/* Estilos para la sección de IA */
.ai-container {
  margin-top: 40px;
  padding: 30px;
  background-color: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

button {
  background-color: #7c3aed; /* Violeta atractivo */
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

button:hover:not(:disabled) {
  background-color: #6d28d9;
  transform: translateY(-1px);
}

button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

.response-box {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-left: 4px solid #7c3aed;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: left;
  line-height: 1.6;
  color: #4b5563;
}
</style>
