<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/supabase/init"; // Import your Supabase instance

const email = ref("");
const password = ref("");

const signUp = async () => {
  const { user, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) console.error("Error signing up:", error);
  else console.log("User signed up:", user);
};
</script>

<template>
  <div class="container max-w-md">
    <div class="flex flex-col items-center justify-between">
      <h1 class="text-2xl font-bold">Sign Up</h1>
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
      <button @click="signUp" class="border rounded px-2 py-1">Sign Up</button>
      <hr />
      <router-link to="/forgot-password" class="opacity-30"
        >Forgot Password</router-link
      >
    </div>
  </div>
</template>
