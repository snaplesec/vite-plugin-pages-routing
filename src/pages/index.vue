<template>
<div class="index">
 <h1>Home</h1>
 <p>
 <img src="../assets/logo.png" alt="logo" class="inline-block">
 </p>
 <button class="btn-indigo" @click="state.count++">count is: {{ state.count }}</button>
</div>
</template>

<script setup lang=ts>
import { reactive } from 'vue'
const state = reactive({ count: 0 })
</script>
<style scoped>
.btn-indigo {
    @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75;
}

</style>
