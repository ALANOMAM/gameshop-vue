<script>
import axios from 'axios';
export default{
  name:'GameApp',

    data(){
        return{
          //creo un array vuoto dove salverò i miei giochi.  
          games:[],

        }
    },

mounted() {
axios.get('http://127.0.0.1:8000/api/games').then(res => {

    //salvo gli oggetti che rappresentano il miei giochi dentro l'array "games"
    this.games = res.data.results;

    console.log(this.games)
});


},
     

}
</script>

<template>
<h1>GAME COMPONENT</h1>
<ul v-for="game in games">
    <li>{{ game.name }}</li>
</ul>
</template>

<style>


</style>
