<template>
  <div class="image-container">
    <h1>{{ state.title }}</h1>
    <img :src="state.imageUrl" class="centered-image" />
    <p>{{ state.description }}</p>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import nfts from "../data/nfts.json";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

const state = reactive({
  title: "",
  imageUrl: "",
  description: "",
});

onSnapshot(doc(db, "shows", "gallery"), (doc) => {
  const { frame } = doc.data();
  const nft = Object.values(nfts)[frame - 1];
  state.title = nft.name;
  state.imageUrl = nft.URL;
  state.description = nft.description;
});
</script>

<style>
.image-container {
  display: flex;
  flex-direction: column;
  color: white;
}

.centered-image {
  margin: 0;
  display: block;
  width: 100vw;
  object-fit: scale-down;
}
</style>
