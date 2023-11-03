<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js 2222222App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../../../general/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
