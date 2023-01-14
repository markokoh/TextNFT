<template>
  <div class="image-container">
    <h1>{{ title }}</h1>
    <img :src="imageUrl" :alt="description" class="centered-image" />
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import nfts from "../data/nfts.json";

const title = ref(nfts.image1.name);
const imageUrl = ref(nfts.image1.URL);
const description = ref(nfts.image1.description);
</script>

<style>
.image-container {
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  color: white;
}

.centered-image {
  margin: 0;
  display: block;
  width: 100vw;
  object-fit: scale-down;
}
</style>
