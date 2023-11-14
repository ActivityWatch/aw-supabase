<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container mx-auto">
    <header class="text-center p-4">
      <h1 class="text-2xl font-bold">Subscription Service</h1>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
