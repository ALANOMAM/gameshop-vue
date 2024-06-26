<script>
import ProductApp from './components/ProductApp.vue';
import GameApp from './components/GameApp.vue'
import SponsorApp from './components/SponsorApp.vue';
import BlogApp from './components/BlogApp.vue';

export default{
  components:{
    ProductApp,
    GameApp,
    SponsorApp,
    BlogApp
  }
}

</script>

<template>
 <div class="container">
  <h1><u>APP VUE FILE</u></h1>

  <ProductApp></ProductApp>
  <GameApp></GameApp>
  <SponsorApp></SponsorApp>
  <BlogApp></BlogApp>


 </div>

 

</template>

<style scoped>

</style>
