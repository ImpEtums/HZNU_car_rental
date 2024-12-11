<template>
  <div id="app">
    <NavBar />
    <Hero />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';

export default {
  name: "App",
  components: {
    NavBar,
    Hero
  }
};
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#app > * {
  flex: 1;
}
</style>
