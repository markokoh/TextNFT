<script setup>
import { RouterLink, RouterView } from "vue-router";
// import Frame from "./components/Frame.vue";
// import Details from "./views/Details.vue";
</script>

<template>
  <!-- <Frame /> -->
  <nav>
    <RouterLink to="/">Frame</RouterLink>
    <RouterLink to="/details">Details</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
