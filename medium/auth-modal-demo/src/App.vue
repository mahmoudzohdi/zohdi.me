<template>
  <div id="app">
    <app-header msg="Welcome to Your Vue.js App"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/app-header.vue'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
