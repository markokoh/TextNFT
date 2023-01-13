<template>
  <div class="center-image">
    <button @click="getImage(1)">get image</button>
    <img :src="imageUrl" :alt="imageAlt" ref="image" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const imageUrl = ref("");

const image1 =
  "https://firebasestorage.googleapis.com/v0/b/textvote-7a52e.appspot.com/o/JasperArt_2022-09-04_15.06.35_3.png?alt=media&token=0915911d-c3e7-42b2-b522-be4a5f85ee68";

const image2 =
  "https://firebasestorage.googleapis.com/v0/b/textvote-7a52e.appspot.com/o/JasperArt_2022-09-04_16.16.22_2.png?alt=media&token=0c11e0c5-9bed-4b0a-87b0-a3df21865007";

const imageAlt = ref("");
const imageRef = ref(null);

const getImage = (num) => {
  switch (num) {
    case 1:
      // code to be executed if expression is equal to value1
      imageUrl.value = image1;
      break;
    case 2:
      // code to be executed if expression is equal to value2
      imageUrl.value = image2;
      break;
    default:
      // code to be executed if expression does not match any of the cases
      console.log("No match");
  }
};
</script>

<style>
.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
