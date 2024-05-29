<template>
  <div class="container m-auto grid grid-cols-4 gap-10 items-center py-20">
    <div class="col-span-1">
      <img :src="product.image" alt="" />
    </div>
    <div class="col-span-3 flex flex-col gap-4">
      <h1 class="text-4xl">{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <div class="flex items-center gap-2">
        <quantity-selector />
        <SfButton>Add to Cart</SfButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`
);
</script>