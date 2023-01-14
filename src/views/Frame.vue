<template>
  <div class="center-image">
    <img :src="imageUrl" :alt="imageAlt" ref="image" />
  </div>
</template>

<script setup>
import { ref } from "vue";
// import { db } from "../firebase/config";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

const imageUrl = ref("");

const image1 =
  "https://firebasestorage.googleapis.com/v0/b/textvote-7a52e.appspot.com/o/images%2FJasperArt_2022-09-04_16.10.11_1.png?alt=media&token=3fc2f3f0-dd36-4d9f-a201-4f60541bcf0a";
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
