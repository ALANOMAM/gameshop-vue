import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
      //creo un array vuoto dove salverò tutti i miei giochi. 
      games:[],
      //creo un array vuoto dove salverò solo i giochi speciali. 
      specialGames:[],


      //creo un array vuoto dove salverò tutti  i miei prodotti. 
      products:[],
      //creo un array vuoto dove salverò i miei prodotti featured.
      featuredProducts:[],

      
       //creo un array vuoto dove salverò i miei blogs. 
       blogs:[],


      //creo un array vuoto dove salverò i miei sponsors. 
      sponsors:[],

     //qui salverò i miei articoli sotto forma di oggetti
     cart:[],

    
})