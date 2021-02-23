<template>
  <h1>Dashboard</h1>
  <div class="hover:text-red-500">{{ state }}</div>
</template>

<script setup lang=ts>
let state = "This is client side."
if (import.meta.env.SSR) {
  state = "This is server side only."
  console.log("State: ", state)
}
</script>

<style scoped>
h1 {
  color:violet;
}
</style>