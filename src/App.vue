<script setup lang="ts">
import services from './apis'
services.get({url: '/'}).then(res => {
  console.log(res)
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>tpvue</h1>
  <h3>vue3+pinia+vue-router+axios+naive-ui</h3>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
