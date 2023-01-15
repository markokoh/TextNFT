<template>
  <div class="image-container">
    <div class="content">
      <div class="display-5 p-3 font">{{ state.title }}</div>
      <img :src="state.imageUrl" class="centered-image" />
      <div class="p-3">
        <label style="font-weight: bold" class="py-3" for="des">About</label>
        <p id="des">{{ state.description }}</p>
      </div>
    </div>
  </div>
  <footer>
    <div class="footer-center">
      <button class="btn btn-danger btn-lg m-2">BUY: {{ state.price }}</button>
    </div>
  </footer>
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
  price: "",
});

onSnapshot(doc(db, "shows", "gallery"), (doc) => {
  const { frame } = doc.data();
  const nft = Object.values(nfts)[frame - 1];
  state.title = nft.name;
  state.imageUrl = nft.URL;
  state.description = nft.description;
  state.price = nft.price;
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

/* .content {
  flex: 1;
} */

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  color: red;
  background-color: #404040;
}

.footer-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.font {
  font-family: "Archivo Black", sans-serif;
}

button {
  width: 95vw;
  font-weight: bold;
}
</style>
