<script>
//importo il file store
import {store} from '../store.js'
import axios from 'axios'
export default{
    name:'CartPage',
    data(){
        return{
           store,
        }
    },



    
}
</script>


<template>
   <h1>CART PAGE</h1>
   <div class="container">
    <!--cart test start-->
<ul class="list-group" v-for="cardItem in store.cart" >
  <li class="list-group-item"> <strong>Element name: </strong>{{ cardItem.name }}</li>
  <li class="list-group-item"><strong>Element quantity: </strong>{{ cardItem.quantity }}</li>
  <li class="list-group-item"><strong>Element Total price: </strong>{{ cardItem.price }}$</li>
  <li class="list-group-item"><strong>Element id: </strong>{{ cardItem.id }}</li>
</ul>
<!--cart test end-->
   </div>
   <a href="http://localhost:5174/" class="back_home"><i class="fa-solid fa-arrow-left"></i> Back To Homepage</a>
</template>

<style lang="scss" scoped>
.back_home{
    text-decoration: none;
    color: rgba(249, 170, 1, 1);
}
</style>