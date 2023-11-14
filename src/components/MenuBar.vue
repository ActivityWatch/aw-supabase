<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="flex justify-center space-x-4 mt-4">
    <div class="rounded border px-2 py-1">
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div class="rounded border px-2 py-1">
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div class="rounded border px-2 py-1">
      <RouterLink to="/settings">Settings</RouterLink>
    </div>
  </nav>
</template>
