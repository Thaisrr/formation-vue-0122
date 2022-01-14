<template>
      <!-- En vue 3 : pas d'obligation de n'avoir qu'une div à la racine -->
      <Navigation/>
      <h1>Formation VueJS</h1>
      <router-view/>

</template>

<script>

import Navigation from "./components/Navigation";
export default {
  name: 'App',
  components: {Navigation},
  mounted() {
        this.$store.dispatch('getJoke');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
