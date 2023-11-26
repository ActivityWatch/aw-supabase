<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template lang="pug">
nav.py-4
  div.text-2xl.font-bold.text-center.text-gray-800
    RouterLink(to="/") ActivityWatch
  div.flex.justify-center.space-x-4.mt-4
    div.rounded.border.px-2.py-1
      RouterLink(to="/about") About
    div.rounded.border.px-2.py-1
      RouterLink(to="/pricing") Pricing
    div.rounded.border.px-2.py-1
      RouterLink(to="/account") Account
</template>
