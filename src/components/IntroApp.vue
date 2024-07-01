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

     <div class="container d-flex justify-content-between align-items-center">
        <img class="image1" src="/public/img/loading.gif" alt="">
         
        <div class="intro-desc">
            <h1>WELCOME TO OUR PAGE </h1>
            <P>Here we dont just provide games and products, we provide a unique experience! </P>
        </div>
        
     </div>
    

   
  </section>  
</template>



<style lang="scss" scoped>


.intro-desc{
    position: relative;/*cosi questo div sta sopra l'overlay del background color*/
    color:white;

    h1{
        text-shadow: 2px 2px 5px  rgba(249, 170, 1, 1) ;
    }

    p{
        font-size: 20px;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
}

/*overlay immagine e backgroud color start*/
section{
 background-image: url('public/img/Illo-inventore-veritatis-quasi.jpg');
 background-position: center;
 background-size:cover;
 background-repeat: no-repeat;
 position:relative;
 padding-bottom: 100px;
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
