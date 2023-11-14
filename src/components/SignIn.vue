<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/supabase/init.ts"; // Import your Supabase instance

const email = ref("");
const password = ref("");

const signIn = async () => {
  const { user, error } = await supabase.auth.signIn({
    email: email.value,
    password: password.value,
  });
  if (error) console.error("Error signing in:", error);
  else console.log("User signed in:", user);
};
</script>

<template>
  <div class="container mx-auto max-w-md">
    <div class="flex flex-col items-center justify-between">
      <h1 class="text-2xl font-bold">Sign In</h1>
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="rounded border m-2 p-2"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="rounded border m-2 p-2"
      />
      <button @click="signIn" class="rounded border px-2 py-1">Sign In</button>
    </div>
  </div>
</template>
