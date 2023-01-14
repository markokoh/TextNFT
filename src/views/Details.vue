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
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

const title = ref("");
const imageUrl = ref("");
const description = ref(nfts.image1.description);

onSnapshot(doc(db, "shows", "gallery"), (doc) => {
  const { frame } = doc.data();
  const art = Object.values(nfts)[frame - 1];
  title.value = art.name;
  imageUrl.value = art.URL;
  description.value = art.description;
});
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
