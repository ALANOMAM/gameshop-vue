<script>
import axios from 'axios'
export default{
    name:'SingleProduct',
    data(){
        return{
          //creo una variabile dove salverò il mio oggetto 
          product: null,
            //creo una variabile dpve salverò l'id dell'elemento selezionato 
            productId: null,
            
            //salvo la parte statica della mia chiamata api dentro una variabile.
            apiBaseUrl: 'http://127.0.0.1:8000/api',
        }
    },

      //dove farò la mia chiamta API e salverò sentro una variabile 
      mounted() {
        //assegno alla mia variabile il numero dell'id selezionato 
        this.productId = this.$route.params.id;
        
        axios.get(this.apiBaseUrl + '/products/' + this.productId).then(res => {

            if(res.data.success) {
                
                // se troviamo il post lo salviamo
                this.product = res.data.product
                
                //console.log(this.product)

            } else {
                // altrimenti torniamo alla home
                this.$router.push({name: 'home'})
            }
        })
    },

    
}
</script>


<template>
       <section>

<!--container start-->
<div class="container">

   <h1 class="title"><div v-if="product">{{product.name }}</div></h1>

    <!--come riesco a prendere le proprià dentro il mio elemento "product" ricavato dalla chiamata API sopra -->
    <div class="card mb-3" style="max-width: 800px;" v-if="product">
  <div class="row g-0">
    <div class="col-md-4 image-discount">

      <img src="/public/img/cms-banner-04.jpg" class="img-fluid rounded-start" alt="...">
      <div class="discount"><span><strong>{{product.discount}}% Discount</strong></span></div>

    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{product.name }}</h5>
        <p class="card-text">{{product.description}}</p>
        <p class="card-text"><strong>Price : {{product.price }}$</strong></p>

        <!--sezione modale start-->
           <!-- Button trigger modal -->
<button type="button" class="modal_btn btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add to cart
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
        <!--sezione modale end-->

      </div>
    </div>
  </div>
</div>

<a href="http://localhost:5174/#products-section" class="back_home"><i class="fa-solid fa-arrow-left"></i> Back To Homepage</a>
</div>
<!--container end-->
</section>
   
</template>

<style lang="scss" scoped>
section{
    background-color:rgba(29, 20, 39, 1) ;
    height: 50vh;
}

.title{
    color:rgba(249, 170, 1, 1) ;
}

.card{
border-color:rgba(29, 20, 39, 1) ;
box-shadow: rgba(249, 170, 1, 0.4) 0px 5px 15px;
background-color:whitesmoke;
}
.card:hover{
box-shadow: rgba(249, 170, 1, 0.8) 0px 5px 15px;
}

.image-discount{
   position: relative;
    .discount{
      position: absolute;  
      bottom:10px;
      right: 10px;
      padding: 5px;
      border-radius: 5px;
      background-color:rgba(249, 170, 1, 1) ;
      color:white;
    }

    img{
        height: 100%;
    }
} 

.back_home{
    text-decoration: none;
    color: rgba(249, 170, 1, 1);
}

.modal_btn{
    background-color:rgba(249, 170, 1, 1) ; 
    color: white;
}
</style>