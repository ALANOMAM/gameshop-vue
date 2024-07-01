<script>
import axios from 'axios'
export default{
    name:'SponsorApp',
    data(){
        return{
            //creo un array vuoto dove salverò i miei sponsors. 
           sponsors:[],
        }
    },



    mounted() {
axios.get('http://127.0.0.1:8000/api/sponsors').then(res => {

    //salvo gli oggetti che rappresentano il miei sponsors dentro l'array "sponsors"
    this.sponsors = res.data.results;

    console.log(this.sponsors)
});
}
    
}

</script>

<template>


    <section id="sponsors-section">
    <div class="container">
        <h1 class="sponsor-section-title text-center"> OUR SPONSORS</h1>
    </div>

 
<!--carousel start-->
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

  <!--elemento singolo del carousel end-->
    <div class="carousel-item" :class="sponsor.id == 1 ? 'active' : ''" data-bs-interval="3000" v-for="(sponsor,index) in sponsors">
        <div class="item">
            <img src="/public/img/parallax.jpg" class="d-block w-100" alt="...">
            <div class="text">
                <div>{{ sponsor.name }}</div>
                
            </div>     
    </div>
    
    </div>
    <!--elemento singolo del carousel end-->
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <i class="fa-solid fa-hand-point-left left"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <i class="fa-solid fa-hand-point-right right "></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!--carousel end-->
</section>
</template>

<style lang="scss" scoped>
section{
background-color: rgba(29, 20, 39, 1) ;
}

.sponsor-section-title{
 color:rgba(249, 170, 1, 1) ;
}

.carousel{
 /*border: 2px solid red;*/
max-width: 800px;
margin-left: auto;
margin-right: auto;
height:500px;
}



.item {
    float: left;
    width:100%;
    height: 100%;
    position: relative;
}

.item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item .text {
    position: absolute;
    right: 20px;
    bottom: 20px;
    text-align: right;
    color: white;
}

.left , .right{
   font-size: 30px;  
}


</style>