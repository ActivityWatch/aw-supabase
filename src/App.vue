<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue'
</script>

<template lang="pug">
div.max-w-5xl.mx-auto.flex.flex-col
  header
      MenuBar
  main.px-4
      RouterView
  div.flex-grow
  footer.text-center.p-4.text-gray-400.pt-8.text-sm
      p Website operated by #[a.link(href="https://superuserlabs.org") Superuser Labs]
</template>
