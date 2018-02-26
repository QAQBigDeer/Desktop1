<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view></router-view> -->
    <anttop></anttop>
    <mainleft></mainleft>
    <maincenten></maincenten>
    <mainright></mainright>
    <antfoot></antfoot>
  </div>
</template>

<script>

/* eslint-disable */

import anttop from './components/anTop.vue'
import antfoot from './components/anfoot.vue'
import mainleft from './components/mainLeft.vue'
import maincenten from './components/maincenten.vue'
import mainright from './components/mainright.vue'

export default {
  name: 'app',
  components:{anttop,antfoot,mainleft,maincenten,mainright}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
