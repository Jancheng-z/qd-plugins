<template>
  <div id="app">
    <img alt="Vue logo" class="qd-logo" src="./assets/qd-logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './views/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .qd-logo{
    width: 100px;
  }
}
</style>
