<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuBar from "./components/MenuBar.vue";
</script>

<template>
  <div class="container mx-auto">
    <header class="text-center p-4">
      <h1 class="text-2xl font-bold">ActivityWatch</h1>
      <MenuBar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
