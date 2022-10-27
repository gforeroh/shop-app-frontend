<template>
  <div class="home">
    <img class="logo" alt="Comercio Electrónico" src="../assets/comercio-electronico.png">
    <WelcomeComponent msg="Bienvenidos su tienda de comercio electrónico"/>
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeComponent from '@/components/WelcomeComponent.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeComponent
  }
}
</script>
<style>
  img.logo {
    width: 200px;
    margin-left: -35px;
    margin-bottom: 15px;
  }
</style>