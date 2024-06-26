
<script>
import axios from 'axios'
export default{
  name:'ProductApp',

  data(){
    return{
      //creo un array vuoto dove salverò i miei prodotti. 
        products:[],
    }

},

mounted() {
axios.get('http://127.0.0.1:8000/api/products').then(res => {

    //salvo gli oggetti che rappresentano il miei prodotti dentro l'array "products"
    this.products = res.data.results;

    console.log(this.products)
});


},


}

</script>

<template>
 
 <h1>PRODUCT COMPONENT</h1>
 <ul v-for="product in products">
    <li>{{ product.name }}</li>
    <!--Il pulsante che mi fa  passare all vista delle show-->
    <router-link :to="{name: 'single-product', params: {id: product.id}}"  class="btn btn-primary">Show the product</router-link>
</ul>
</template>


<style>


</style>