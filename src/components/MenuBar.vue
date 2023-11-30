<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template lang="pug">
nav.py-4
  div.text-2xl.font-bold.text-center
    RouterLink(to="/") ActivityWatch
  div.flex.justify-center.space-x-4.mt-4
    RouterLink(to="/about")
      div.btn.btn-white.btn-sm
        | About
    RouterLink(to="/pricing")
      div.btn.btn-white.btn-sm
        | Pricing
    RouterLink(to="/account") 
      div.btn.btn-white.btn-sm
        | Account
</template>
