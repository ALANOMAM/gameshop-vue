<script>
import axios from 'axios'
export default{
    name:'SponsorApp',
    data(){
        return{
            //creo un array vuoto dove salverò i miei sponsors. 
           sponsors:[],
        }
    },



    mounted() {
axios.get('http://127.0.0.1:8000/api/sponsors').then(res => {

    //salvo gli oggetti che rappresentano il miei sponsors dentro l'array "sponsors"
    this.sponsors = res.data.results;

    console.log(this.sponsors)
});
}
    
}

</script>

<template>
<h1>SPONSOR COMPONENT</h1>

<ul v-for="sponsor in sponsors">
    <li>{{ sponsor.name }}</li>
</ul>

</template>

<style>


</style>