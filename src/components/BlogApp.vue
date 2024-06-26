<script>
import axios from 'axios'

export default{
    name:'BlogApp',
    data(){
        return{
            //creo un array vuoto dove salverò i miei blogs. 
           blogs:[],
        }
    },

    mounted() {
axios.get('http://127.0.0.1:8000/api/blogs').then(res => {

    //salvo gli oggetti che rappresentano il miei blogs dentro l'array "blogs"
    this.blogs = res.data.results;

    console.log(this.blogs)
});
}

}
</script>

<template>
 <h1>BLOG COMPONENT</h1>
 <ul v-for="blog in blogs">
    <li>{{ blog.description}}</li>
</ul>
</template>

<style>

</style>