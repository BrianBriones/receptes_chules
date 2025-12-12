<script setup>
const emit = defineEmits(["search"]);
const model = defineModel();

function onSearch() {
  emit("search");
}
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Cerca per la primera lletra..."
      v-model="model"
      @keydown.enter="onSearch"
    />
  </div>
</template>
