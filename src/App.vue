<template>
  <div id="app">
    <Navbar />
    
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: { Navbar }
}
</script>

<style>
  .container { margin-top: 25px; margin-bottom: 40px; }
  .card {
    border-radius: 0 !important; 
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
</style>
