<script>

export default{
name:'IntroApp',

components:{

},

data(){
    return{

    }
}
}

</script>

<template>
  <section id="intro-section">
    
    <img class="image1" src="/public/img/loading.gif" alt="">

    <!--<img src="/public/img/Illo-inventore-veritatis-quasi.jpg" alt="">-->
  </section>  
</template>



<style lang="scss" scoped>

/*overlay immagine e backgroud color start*/
section{
 background-image: url('public/img/Illo-inventore-veritatis-quasi.jpg');
 background-position: center;
 background-size:cover;
 background-repeat: no-repeat;
 position:relative;
}

section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(29, 20, 39, 0.5); /* Adjust opacity as needed */
}
/*overlay immagine e backgroud color end*/

.image1{
 position: relative;/*cosi l'immagine sta sopra l'overlay del background color*/
}


</style>
