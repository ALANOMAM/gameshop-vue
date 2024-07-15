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

    methods:{
        decrement(cartQuantity) {
            if (cartQuantity > 1) {
                cartQuantity--;
            }
        },

        increment(cartQuantity) {
            cartQuantity++;
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
    <div class="item_info" v-for="cardItem in store.cart" >
        <span>{{ cardItem.name }}</span>
        <span>{{ cardItem.quantity }}</span>
        <span>{{ cardItem.price }}$</span>

        <div class="comands">
        <i class="fa-solid fa-minus" @click="decrement(cardItem.quantity)"></i>
       <i class="fa-solid fa-plus" @click="increment(cardItem.quantity)"></i>
       <i class="fa-solid fa-trash"></i>
        </div>


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
    height: 50vh;
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