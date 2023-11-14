<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Menubar from "./components/Menubar.vue";
</script>

<template>
  <div class="container mx-auto">
    <header class="text-center p-4">
      <h1 class="text-2xl font-bold">ActivityWatch Portal</h1>
      <Menubar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
