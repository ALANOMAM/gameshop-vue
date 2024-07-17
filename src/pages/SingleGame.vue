<script>
//importo il file store
import {store} from '../store.js'
import axios from 'axios'
export default{
    name:'SingleGame',
    data(){
        return{
          //qui salverò i miei articoli sotto forma di oggetti
            //cart:[],

            //qui ho salvato la cart
            store,
            //creo una variabile dove salverò il mio oggetto 
            game: null,
            //creo una variabile dpve salverò l'id dell'elemento selezionato 
            gameId: null,
            
            //salvo la parte statica della mia chiamata api dentro una variabile.
            apiBaseUrl: 'http://127.0.0.1:8000/api',
           
            //assegno una quantità iniziale di 1 per il modale.
            quantity:1,
           

            //è collegata alla funzione "openModal()" sotto che mi collega l'id del gioco selezionato.
            currentGame : null,
           
        }
    },

      //dove farò la mia chiamta API e salverò sentro una variabile 
    mounted() {
        //assegno alla mia variabile il numero dell'id selezionato 
        this.gameId = this.$route.params.id;
        
        axios.get(this.apiBaseUrl + '/games/' + this.gameId).then(res => {

            if(res.data.success) {
                
                // se troviamo il post lo salviamo
                this.game = res.data.game
                
                //console.log(this.game)

            } else {
                // altrimenti torniamo alla home
                this.$router.push({name: 'home'})
            }
        })
    },

    methods:{

        decrement() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
            
        increment() {
            this.quantity++;
        },





  //ADD TO CART START      
        addToCart() {
            const cartItem = {
                name: this.game.name,
                quantity: this.quantity,
                price: this.game.price * this.quantity,
                id: this.game.id,
            };
            
        //Controlla se il piatto esiste già nel carrello
       const existingItemIndex = this.store.cart.findIndex(item => item.name === cartItem.name);

        if (existingItemIndex !== -1) {
            //Aggiorna il piatto esistente
            this.store.cart[existingItemIndex].quantity += this.quantity;
            this.store.cart[existingItemIndex].price += cartItem.price;

        } else {
            //Aggiungi il nuovo piatto
            this.store.cart.push(cartItem);
            //console.log(this.store.cart);
        } 
        
         //this.updateLocalStorage();
                            
                },
 //ADD TO CART END 

 /*updateLocalStorage() {
            localStorage.setItem('cart_' + this.gameId, JSON.stringify(this.cart));
        }, */


        //fa in modo che quando apro il modale, esso sia associato solo al gioco aperto
        openModal(game) {
            this.currentGame = game;
            this.quantity = 1;
            //new bootstrap.Modal(document.getElementById('addGame')).show();
        },


        
      

    },
// Osserva i cambiamenti del ristorante e aggiorna il carrello di conseguenza
 /*watch: {
        $route(to, from) {
            // Salva il carrello corrente
            this.updateLocalStorage();

            // Aggiorna l'ID del ristorante e carica il nuovo carrello
            this.gameId = to.params.id;
            this.loadCart();

            // Ricarica i dati del ristorante
            axios.get(`${this.apiBaseUrl}/games/${this.gameId}`).then(res => {
                this.game = res.data.game;
            });
        }
    } */

 


}
</script>


<template>
    <section>

<!--container start-->
<div class="container">

   <h1 class="title"><div v-if="game">{{game.name }}</div></h1>

    <!--come riesco a prendere le proprià dentro il mio elemento "game" ricavato dalla chiamata API sopra -->
    <div class="card mb-3" style="max-width: 800px;" v-if="game">
  <div class="row g-0">
    <div class="col-md-4 image-discount">

      <img src="/public/img/cms-banner-04.jpg" class="img-fluid rounded-start" alt="...">
      <div class="discount"><span><strong>{{game.discount}}% Discount</strong></span></div>

    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{game.name }}</h5>
        <p class="card-text">{{game.description}}</p>
        <p class="card-text"><strong>Price : {{game.price }}$</strong></p>

        <!--sezione modale start-->
           <!-- Button trigger modal -->
<button type="button" class="modal_btn btn" data-bs-toggle="modal" data-bs-target="#addGame" @click="openModal(game)">
  Add to cart
</button>

<!-- Modal -->
<div class="modal fade" id="addGame" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="addGameLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addGameLabel">Number Of Items</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <!--modal body start-->
      <div class="modal-body">
        <span>{{ this.quantity }}</span>

        <div class="counter">
            <button type="button" class="btn" @click="decrement()"><i class="fa-solid fa-minus"></i></button>
            <button type="button" class="btn" @click="increment()"><i class="fa-solid fa-plus"></i></button>
        </div>

      </div>
      <!--modal body end-->
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal"  @click="addToCart()">Add To Cart</button>
      </div>
    </div>
  </div>
</div>
        <!--sezione modale end-->

      </div>
    </div>
  </div>
</div>

<a href="http://localhost:5174/#games-section" class="back_home"><i class="fa-solid fa-arrow-left"></i> Back To Homepage</a>

<!--cart test start-->
<ul class="list-group" v-for="(cardItem,index) in store.cart" >
  <li class="list-group-item"> <strong>Element name: </strong>{{ cardItem.name }}</li>
  <li class="list-group-item"><strong>Element quantity: </strong>{{ cardItem.quantity }}</li>
  <li class="list-group-item"><strong>Element Total price: </strong>{{ cardItem.price }}$</li>
  <li class="list-group-item"><strong>Element id: </strong>{{ cardItem.id }}</li>
</ul> 
<!--cart test end-->




</div>
<!--container end-->
</section>


</template>

<style lang="scss" scoped>
section{
    background-color:rgba(29, 20, 39, 1) ;
    height:100vh;
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

 /* MODAL SECTION START*/ 
.modal_btn{
    background-color:rgba(249, 170, 1, 1) ; 
    color: white;
}

.modal-body{
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
    background-color: rgba(249, 170, 1, 1);
    color: white;
  }
}

.counter{
  display: flex;
  gap:40px;
}

.modal-footer{
  button{
    background-color: rgba(249, 170, 1, 1);
    color: white;
  }
}

/* MODAL SECTION END*/ 


</style>