<script>

export default{
    name:'HeaderApp',

}

</script>

<template>
    <header>
       
<nav class="navbar navbar-expand-lg ">
  <div class="container">
    
   <!-- Logo con link -->
   <router-link :to="'/'">
    <div class="logo">
    <img src="" alt="Logo Game Shop">
    </div>
    </router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link  options" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link options" href="#">Games</a>
        </li>
        <li class="nav-item">
          <a class="nav-link options" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link options" href="#">Blogs</a>
        </li>
      </ul>

      <!--perte destra inizio-->
      <div class="d-flex  align-items-center gap-3">
        <!--form di ricerca-->
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn search-button" type="submit">
          <i class="fa-solid fa-magnifying-glass search-button-icon"></i>
        </button>
        </form>
        <!-- link accesso parte admin-->
        <a class="nav-link options" href="http://127.0.0.1:8000/admin" target="_blank">
            <i class="fa-solid fa-user"></i>
        </a>
        <!--link per il carello-->
        <a class="nav-link options" href="#">
            <i class="fa-solid fa-bag-shopping"></i>
        </a>  
    </div>
    <!--parte destra fine-->

    </div>
  </div>
</nav>








    </header>
</template>

<style lang="scss" scoped>
 nav{
  background-color: rgba(29, 20, 39, 1);
  padding-top: 20px;
  padding-bottom: 20px;

  .options{
    color: white;
  }
  .options:hover{
      color:rgba(249, 170, 1, 1) ;
    }



  .search-button{
    border-color: rgba(249, 170, 1, 1);

    .search-button-icon{
      color:white; 
    }
  }
  .search-button:hover{
    background-color:rgba(249, 170, 1, 1) ;
  }



 .navbar-toggler{
  background-color: white;
 }


 }


</style>