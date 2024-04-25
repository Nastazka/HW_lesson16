<template>
  <div id="app">
      <header-component></header-component>
      <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      
    };
  },
  created() {
    this.$router.push({ name: 'home'})
  }
}
</script>

<style>
body {
    width: 1920px;
}
.container {
    width: 1200px;
    margin:  0 360px 0 360px;
}
</style>
