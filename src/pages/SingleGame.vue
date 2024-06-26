<script>
import axios from 'axios'
export default{
    name:'SingleGame',
    data(){
        return{
            //creo una variabile dove salverò il mio oggetto 
            game: null,
            //creo una variabile dpve salverò l'id dell'elemento selezionato 
            gameId: null,
            
            //salvo la parte statica della mia chiamata api dentro una variabile.
            apiBaseUrl: 'http://127.0.0.1:8000/api',
           
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



}
</script>


<template>

   <h1>SINGLE GAME PAGE</h1>

    <!--come riesco a prendere le proprià dentro il mio elemento "game" ricavato dalla chiamata API sopra -->
    <ul v-if="game">
        <li><span><strong>NAME : </strong></span> {{game.name }}</li>
        <li><span><strong>DISCOUNT : </strong></span>{{game.discount }}</li>
        <li><span><strong>PRICE : </strong></span>{{game.price }}</li>
    </ul>
    
   
</template>

<style>

</style>