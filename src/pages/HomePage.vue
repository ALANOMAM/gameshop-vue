<script>

import ProductApp from '../components/ProductApp.vue';
import GameApp from '../components/GameApp.vue'
import SponsorApp from '../components/SponsorApp.vue';
import BlogApp from '../components/BlogApp.vue';

export default{
    name:'HomePage',
  components:{
    ProductApp,
    GameApp,
    SponsorApp,
    BlogApp
  },

  data(){
    return{

    };
  },

}

</script>

<template>
 <div class="container">
  <h1><u>HOMEPAGE</u></h1>
  <ProductApp></ProductApp>
  <GameApp></GameApp>
  <SponsorApp></SponsorApp>
  <BlogApp></BlogApp>
 </div>

 

</template>

<style scoped>

</style>