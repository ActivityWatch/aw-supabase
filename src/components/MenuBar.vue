<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template lang="pug">
nav.py-4
  div.text-2xl.font-bold.text-center.text-gray-800
    RouterLink(to="/") ActivityWatch
  div.flex.justify-center.space-x-4.mt-4
    div.btn.btn-white.btn-sm
      RouterLink(to="/about") About
    div.btn.btn-white.btn-sm
      RouterLink(to="/pricing") Pricing
    div.btn.btn-white.btn-sm
      RouterLink(to="/account") Account
</template>
