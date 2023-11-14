<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
</script>

<template>
  <main>
    <TheWelcome />
    <div class="flex">
      <SignIn />
      <SignUp />
    </div>
  </main>
</template>
