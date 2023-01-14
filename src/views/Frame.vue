<template>
  <div class="center-image" @do-stuff="getImage(2)">
    <img :src="imageUrl" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import nfts from "../data/nfts.json";

const imageUrl = ref("");

onSnapshot(doc(db, "shows", "gallery"), (doc) => {
  const { frame } = doc.data();
  imageUrl.value = Object.values(nfts)[frame - 1].URL;
});
</script>

<style scoped>
.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 100vh;
}
</style>
