<template>
  <div id="app">
    <img style="text-align: left; margin-left: 15px" width="45px" alt="Vue logo" src="./assets/logo.png">
    <h1 style="text-align: left; margin-left: 15px">Feature under construction</h1>
    <Chat />
  </div>
</template>

<script>
import Chat from './components/Chat.vue'

export default {
  name: 'App',
  components: {
    Chat
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

body { 
  margin: 0; 
  padding-bottom: 3rem; 
}
</style>
