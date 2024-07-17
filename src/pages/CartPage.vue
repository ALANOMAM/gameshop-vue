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

    computed: {
      // Calcolo il prezzo totale del carrello
       totalPrice() {
    return this.store.cart.reduce((total, item) => total + item.price, 0);
      }
    },

    methods:{
          // Metodo per rimuovere un articolo dal carrello
          removeFromCart(index) {
            this.store.cart.splice(index, 1);
           // this.updateLocalStorage();
        },

        // Metodo per aggiornare il carrello nel localStorage
        /*updateLocalStorage() {
            localStorage.setItem('cart_' + this.gameId, JSON.stringify(this.store.cart));
        }, */

        // Metodo per aggiornare la quantità di un articolo nel carrello
        updateCartItem(index, increment) {
            if (increment) {
                this.store.cart[index].quantity++;
            } else if (this.store.cart[index].quantity > 1) {
                this.store.cart[index].quantity--;
            } else {
                return;
            }
            this.store.cart[index].price = this.store.cart[index].quantity * (this.store.cart[index].price / (this.store.cart[index].quantity + (increment ? -1 : 1)));
            // this.updateLocalStorage();
        },

       
    }



    
}
</script>


<template>
    <section>
 <!--container start-->  
   <div class="container">
    <h1 class="title">CART PAGE</h1>
    <!--cart box start-->
<div class="cart_box">
    <div class="item_info" v-for="(cardItem,index) in store.cart" >
        <span>{{ cardItem.name }}</span>
        <span>{{ cardItem.quantity }}</span>
        <span>{{ cardItem.price }}$</span>

        <div class="comands">
        <i class="fa-solid fa-minus" @click="updateCartItem(index,false)"></i>
       <i class="fa-solid fa-plus" @click="updateCartItem(index,true)"></i>
       <i class="fa-solid fa-trash"  @click="removeFromCart(index)"></i>
        </div>
    </div>

     <!-- PREZZO TOTALE ORDINE -->
      <hr>
     <div class="d-flex justify-content-between align-items-center mx-4">
        <h2 class="fs-4 ms-2">Total</h2>
        <span class="fs-3 me-1">{{ totalPrice }} €</span>
        </div>
    
         <!--Il pulsante che mi fa  passare all vista dei pagamenti-->
         <router-link :to="{name: 'payment-page'}"  class="btn">
            Proceed With Payment
           </router-link>
    

</div>
<!--cart box end-->


<a href="http://localhost:5174/" class="back_home"><i class="fa-solid fa-arrow-left"></i> Back To Homepage</a>
   </div>
   <!--container end-->
</section>
</template>

<style lang="scss" scoped>
section{
    background-color:rgba(29, 20, 39, 1) ;
    height: 100vh;
}
.title{
    color:rgba(249, 170, 1, 1) ;
}
.cart_box{
    border-color:rgba(29, 20, 39, 1);
    padding: 10px;
    border-radius: 5px;
    max-width: 400px;
    height:auto;
    background-color: rgba(249, 170, 1, 1);
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    .item_info{
        //border:1px solid red;
        padding: 5px;
        margin-bottom: 20px;
        border-radius: 3px;
        display: flex;
        justify-content: space-between;
        color: rgba(29, 20, 39, 1);
        font-size: 20px;
        box-shadow: rgba(29, 20, 39, 0.4) 0px 5px 15px;

        .comands{
         //border:1px solid yellow;
          display: flex;
          gap: 20px;
          align-items: center;
        }
    }
    .item_info:hover{
        box-shadow: rgba(29, 20, 39, 0.8) 0px 5px 15px;       
}
}

.btn{
    background-color:rgba(29, 20, 39, 1) ;
    color: white;
    align-self: center;
}

.back_home{
    text-decoration: none;
    color: rgba(249, 170, 1, 1);
}
</style>