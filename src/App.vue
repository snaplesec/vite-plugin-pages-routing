<template>
  <the-header/>
  <div id="nav">
    <router-link to="/" class="hover:underline">Home</router-link> | 
    <router-link to="/about" class="hover:underline">About</router-link> | 
    <router-link to="/dashboard" class="hover:underline">Dashboard</router-link> | 
    <router-link to="/login" class="hover:underline">Login</router-link> | 
    <router-link to="/dashboardinsuredportal" class="hover:underline">DashIP</router-link>
  </div>
    <router-view/>
    <the-footer/>
</template>

<script lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
		TheFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  @apply text-2xl
}
h2 {
	@apply text-xl
}
h3 {
  @apply text-lg;
}
a {
  @apply text-blue-600 underline;
}
</style>