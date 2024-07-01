<script>
import axios from 'axios'

export default{
    name:'BlogApp',
    data(){
        return{
            //creo un array vuoto dove salverò i miei blogs. 
           blogs:[],
             // mi salvo una variabile dove memorizzo quale sia la slide attiva
             tabIndex: 0,
        }
    },

    mounted() {
axios.get('http://127.0.0.1:8000/api/blogs').then(res => {

    //salvo gli oggetti che rappresentano il miei blogs dentro l'array "blogs"
    this.blogs = res.data.results;
    //console.log(this.blogs)
});
},



}
</script>

<template>
   
<section id="blogs-section">

    <div class="container">
        <h1 class="blog-section-title text-center">OUR BLOGS</h1>
    </div>

    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner box">
     
    
      <!--for esterno start-->
    <div v-for="(blog,index) in blogs" class="carousel-item" :class="blog.id == 1 ? 'active' : ''" >
        
     <div class="item">
            <img src="/public/img/cms-banner-04.jpg" class="d-block w-100" alt="...">
            <div class="text">
                <div>{{ blog.description }}</div>
                <a :href="blog.link" class="btn btn-primary">Click to explore</a>
            </div>     
    </div>
               
    </div>
    <!--for esterno end-->   
    
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
     <i class="fa-solid fa-hand-point-left left"></i>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <i class="fa-solid fa-hand-point-right right "></i>
    <span class="visually-hidden">Next</span>
  </button>
</div>



</section>
  

</template>

<style lang="scss" scoped>

/*overlay immagine e backgroud color start*/
section{
 padding-top:20px;
 background-image: url('/public/img/Consequunt-magni-dolores.jpg');
 background-size: cover;
 background-repeat: no-repeat;
 position: relative;
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

.blog-section-title{
 position: relative; /* quetso fa in modo che il titolo stia sopra l'overlay del colore*/
 color:rgba(249, 170, 1, 1) ;
}


.carousel{
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
    right:30%;
    bottom:8%;
    text-align: center;
    color: white;
}

.left , .right{
   font-size: 30px;  
}

.box{
    border-radius: 10px;
    box-shadow: rgba(249, 170, 1, 0.4) 0px 5px 15px;
}

</style>