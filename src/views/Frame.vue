<template>
  <div class="center-image">
    <img :src="imageUrl" :alt="imageAlt" ref="image" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import nfts from "../data/nfts.json";

const imageUrl = ref("");

const getImage = (num) => {
  switch (num) {
    case 1:
      // code to be executed if expression is equal to value1
      imageUrl.value = nfts.image1.URL;
      break;
    case 2:
      // code to be executed if expression is equal to value2
      imageUrl.value = nfts.image2.URL;
      break;
    default:
      // code to be executed if expression does not match any of the cases
      console.log("No match");
  }
};

onSnapshot(doc(db, "shows", "gallery"), (doc) => {
  const { frame } = doc.data();
  console.log("Frame", frame);

  getImage(frame);
});
</script>

<style>
.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 100vh;
}
</style>
