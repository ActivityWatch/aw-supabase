<script setup lang="ts">
import { RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue'
</script>

<template lang="pug">
div.container.max-w-5xl.mx-auto
    header
        MenuBar
    main.px-4
        RouterView
    footer.text-center.p-4
        p ActivityWatch
        p Website operated by #[a(href="https://superuserlabs.org") Superuser Labs]
</template>
