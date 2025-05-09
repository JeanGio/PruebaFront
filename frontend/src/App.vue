<template>
  <div id="app">
    <HomeView />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
import './assets/style.css'

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>
