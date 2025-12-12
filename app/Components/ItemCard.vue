<template>
  <div class="item-card">
    <img v-if="imgSrc" :src="imgSrc" :alt="titleText" />
    <h3>{{ titleText }}</h3>
    <p v-if="item.strInstructions && !hideDetails" class="description">
      {{ item.strInstructions.substring(0, 100) }}...
    </p>
    <div v-if="!hideDetails">
      <div class="dropdown">
        <button @click="toggleIngredients" class="dropdown-toggle">
          Ingredients
        </button>
        <ul v-if="showIngredients" class="dropdown-menu">
          <li v-for="(ingredient, index) in ingredients" :key="index">
            {{ ingredient.measure }} {{ ingredient.name }}
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <button @click="toggleSteps" class="dropdown-toggle">Passos</button>
        <ol v-if="showSteps" class="dropdown-menu">
          <li v-for="(step, index) in steps" :key="index">{{ step }}</li>
        </ol>
      </div>
    </div>
    <div class="actions-slot">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item", "hideDetails"]);

const item = props.item || {};

const imgSrc =
  item.strMealThumb ||
  item.image ||
  item.imageUrl ||
  item.thumbnail ||
  item.img ||
  item.picture ||
  item.image_link ||
  "";

const titleText =
  item.title || item.name || item.strMeal || item.label || "Sense títol";

const showIngredients = ref(false);
const showSteps = ref(false);

function toggleIngredients() {
  showIngredients.value = !showIngredients.value;
}

function toggleSteps() {
  showSteps.value = !showSteps.value;
}

const ingredients = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = item[`strIngredient${i}`];
    const measure = item[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ name: ingredient, measure });
    }
  }
  return ingredients;
});

const steps = computed(() => {
  if (item.strInstructions) {
    return item.strInstructions.split("\r\n").filter((step) => step);
  }
  return [];
});
</script>

<style scoped>
.item-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  height: 100%;
}

.item-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.item-card img {
  width: 100%;
  max-width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

h3 {
  font-size: 1.25rem;
  text-align: center;
  margin: 0;
  font-weight: 700;
  color: #1f2937;
  line-height: 1.3;
}

.description {
  font-size: 0.95rem;
  text-align: center;
  color: #6b7280;
  line-height: 1.5;
}

.dropdown {
  width: 100%;
  margin-bottom: 10px;
}

.dropdown-toggle {
  background-color: #f3f4f6;
  color: #4b5563;
  border: 1px solid #e5e7eb;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropdown-toggle::after {
  content: "▼";
  font-size: 0.7em;
  margin-left: 8px;
}

.dropdown-toggle:hover {
  background-color: #ede9fe;
  color: #7c3aed;
  border-color: #ddd6fe;
}

.dropdown-menu {
  list-style: none;
  padding: 8px;
  margin: 8px 0 0;
  border: 1px solid #f3f4f6;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.dropdown-menu li {
  padding: 8px 12px;
  border-bottom: 1px solid #f3f4f6;
  color: #4b5563;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.dropdown-menu li:hover {
  background-color: #f9fafb;
}

.dropdown-menu li:last-child {
  border-bottom: none;
}
.actions-slot {
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
