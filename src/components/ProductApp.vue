
<script>
import axios from 'axios'
export default{
  name:'ProductApp',

  data(){
    return{
      //creo un array vuoto dove salverò tutti  i miei prodotti. 
        products:[],
        //creo un array vuoto dove salverò i miei prodotti featured.
        featuredProducts:[],

         // mi salvo una variabile dove memorizzo quale sia la slide attiva
         tabIndex: 0,
    }

},

mounted() {
axios.get('http://127.0.0.1:8000/api/products').then(res => {

    //salvo gli oggetti che rappresentano il miei prodotti dentro l'array "products"
    this.products = res.data.results;
    console.log(this.products)


     //filtro per i giochi che vanno nella categria speciale
  this.products.forEach(product => {
      if(product.featured == true){
        this.featuredProducts.push(product)
      }
  });
  console.log(this.featuredProducts)

});


},

methods: {
    //methods for the inner carousel start

    //gestione delle frecce per la categoria prodotti featured start
    featuredForward(){
     this.tabIndex++
   if(this.tabIndex >= this.featuredProducts.length){
     this.tabIndex = 0
   }
    },

    featuredBackward(){
     this.tabIndex--

     if (this.tabIndex < 0) {
         this.tabIndex = this.featuredProducts.length - 1;
     }
    },

    clickSlide(index){
     this.tabIndex = index
    },
     //gestione delle frecce per la categoria prodotti featured end

    //methods for the inner carousel start



 }





}

</script>

<template>
  <section id="products-section">

  <div class="container">
    <h1 class="text-center product-section-title">OUR PRODUCTS</h1>
  </div>
    
<!--outer carousel start-->
<div id="carouselExampleIndicators2" class="carousel slide box">
  <div class="carousel-indicators gap-3">

    <div class="outer-carousel-switch">
      <span>Featured</span>
      <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    </div>
    
    <div class="outer-carousel-switch">
      <span>New Arrival</span>
      <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>

    <div class="outer-carousel-switch">
      <span>Best Seller</span>
      <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

  </div>
  <!--outer carousel item list container start-->
  <div class="carousel-inner">
    <!--outer carousel item from item list start-->
    <div class="carousel-item active">

  <!--inner carousel start-->
<div class="inner-container yellow">
<div  class="slider-wrapper" > <!--tabindex="0"-->

    <div  v-for="(featuredProduct,index) in featuredProducts"  v-show="tabIndex === index" class="item " >

      <!--thumbs start-->
    <div class="thumbs">
        <div class="finger-container">
          <i class="fa-solid fa-hand-point-left " @click="featuredBackward()" ></i>
          <i class="fa-solid fa-hand-point-right " @click="featuredForward()"></i>
        </div>
    </div>
    <!--thumbs end-->
        
      
        <img src='/public/img/cms-banner-01.jpg' :alt=" 'image' + (index +1)"/>
        <div class="text">
            <h3>{{featuredProduct.name}}</h3>
            <p>
             {{featuredProduct.description}}
            </p>
            <!--Il pulsante che mi fa  passare all vista delle show-->
           <router-link :to="{name: 'single-product', params: {id: featuredProduct.id}}"  class="btn btn-primary product-button">Show the product</router-link>
        </div>
       

  </div>
  
</div>
</div>
<!--inner carousel end-->

    </div>
    <!--outer carousel item from item list end-->
    <div class="carousel-item">
      <img src="/public/img/parallax.jpg" class="d-block w-100" alt="..">
    </div>
    <div class="carousel-item">
      <img src="/public/img/parallax.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <!--outer carousel item list container end-->
</div>
<!--outer carousel end-->

  </section>
  
  </template>

<style lang="scss" scoped>

section{
padding-top:20px;
background-color: rgba(29, 20, 39, 1) ;
}

.product-section-title{
 color:rgba(249, 170, 1, 1) ;
}

.carousel{
max-width: 800px;
margin-left: auto;
margin-right: auto;
height:500px;
}

.outer-carousel-switch{
  //border: 1px solid pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    color: white;
  }

}

.image-desc{
  /* border: 1px solid blue;*/
  position: relative;

 /*.product-name{
  position: absolute;
  top:10px;
  left:200px;
  color: red;
 }

 .product-button{
  position: absolute;
  top:40px;
  left:200px;
 }*/

}


.black{
  color:black;
}

.red{
  color:red;
}

.box{
  border: 2px solid blue;
}
.yellow{
  border: 2px yellow solid;
}

//parte aggiunta 
.inner-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider-wrapper{
  width: 100%;
  height: 100%;
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

.thumbs{
  //border: 1px solid red;
  //background-color: pink;
  position: absolute;
  width:100% ;
  top:50%;
  padding-left: 20px;
  padding-right: 20px;
  
  .finger-container{
    //border: 5px solid violet;
    display: flex;
    justify-content: space-between;
  }

  i{
  color:white;
  font-size: 30px;
  }

 

}

.thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.thumb.active {
    border: 2px solid #ccc;
    opacity: 1;
}

</style>