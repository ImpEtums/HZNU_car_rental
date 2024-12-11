<template>
  <div id="app">
    <NavBar />
    <Hero />
    <CarRentalSelector />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import CarRentalSelector from './components/CarRentalSelector.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Hero,
    CarRentalSelector
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; /* 填入适合的顶边距，防止Nav覆盖Hero */
}
</style>
