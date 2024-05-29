<template>
  <div>
    {{ mealStore.meals }}
  </div>
</template>

<script setup>
import { useMealStore } from "~/store/meals";
const mealStore = useMealStore();
await mealStore.fetchMeals();
</script>

<style lang="scss" scoped>
</style>