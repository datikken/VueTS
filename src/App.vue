<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Hello msg="boy"/>
    <Checkbox :title="checkbox.title" v-model="checkbox.checked"/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Hello from './components/Hello.vue';
import { Component } from 'vue-property-decorator';
import Checkbox from './components/Checkbox.vue';

@Component({
  components: {
    Hello,
    Checkbox
  }
})

export default class App extends Vue {
  checkbox = {
    title: 'fancy way',
    value: 'check-id',
    checked: false

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
  margin-top: 60px;
}
</style>
