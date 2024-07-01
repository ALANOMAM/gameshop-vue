<script>
import IntroApp from '../components/IntroApp.vue';
import ProductApp from '../components/ProductApp.vue';
import GameApp from '../components/GameApp.vue'
import SponsorApp from '../components/SponsorApp.vue';
import BlogApp from '../components/BlogApp.vue';

export default{
    name:'HomePage',
  components:{
    IntroApp,
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
  <IntroApp></IntroApp>
  <GameApp></GameApp>
  <ProductApp></ProductApp>
  <BlogApp></BlogApp>
  <SponsorApp></SponsorApp>
</template>

<style scoped>

</style>