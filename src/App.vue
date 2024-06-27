<script>
import FooterApp from './components/FooterApp.vue';
import HeaderApp from './components/HeaderApp.vue'; 
export default{
  components:{
    FooterApp,
    HeaderApp,
  }
}

</script>

<template>
  <HeaderApp></HeaderApp>
  <router-view></router-view>
  <FooterApp></FooterApp>

</template>

<style scoped>

</style>
