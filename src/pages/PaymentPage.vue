<script>

import axios from 'axios'
export default{
     name:'PaymentPage',
    components: {
      
  },
   
  data () {

    return {
            formData: {
              customer_name: '',
              customer_surname: '',
              customer_email:'',
              customer_address: '',
              customer_phone:'',
              message:'',
              total_price:10.5,
            },
        }

           /* $table->string('customer_name');
            $table->string('customer_surname');
            $table->string('customer_email')->unique();
            $table->string('customer_address');
            $table->string('customer_phone');
            $table->text('message')->nullable();
            $table->decimal('total_price',5,2);*/
    
  },

  methods: {
  
    sendContactRequest() {
            // azioni da eseguire per inviarci la richiesta di contatto
            // console.log(this.formData)


            // quando facciamo delle richieste post ci servono due parametri: il primo e l'endpoint, il secondo è l'oggetto di dati che stiamo inviando
            axios.post('http://127.0.0.1:8000/api/new-order', this.formData).then(res => {
                console.log('Risposta API:', res)
            });
        }
        

        

  }

}

</script>

<template>
    <section>
<div class="container">       
<h1 class="title">Payment Page</h1>


<form @submit.prevent="sendContactRequest()">

<div class="mb-3">
    <label for="customer_name" class="form-label">Name</label>
    <input type="text" class="form-control" id="customer_name" name="customer_name" v-model="formData.customer_name" required>
</div>

<div class="mb-3">
    <label for="customer_surname" class="form-label">Surname</label>
    <input type="text" class="form-control" id="customer_surname" name="customer_surname" v-model="formData.customer_surname" required>
</div>

<div class="mb-3">
    <label for="customer_email" class="form-label">Email</label>
    <input type="email" class="form-control" id="customer_email" name="customer_email" aria-describedby="emailHelp" v-model="formData.customer_email" required>
    <div id="emailHelp" class="form-text">Non condivideremo la tua mail con terzi.</div>
</div>

<div class="mb-3">
    <label for="customer_address" class="form-label">Address</label>
    <input type="text" class="form-control" id="customer_address" name="customer_address" v-model="formData.customer_address" required>
</div>

<div class="mb-3">
    <label for="customer_phone" class="form-label">Phone</label>
    <input type="text" class="form-control" id="customer_phone" name="customer_phone" v-model="formData.customer_phone" required>
</div>


<div class="mb-3">
    <label for="total_price" class="form-label">Price</label>
    <input type="text" class="form-control" id="total_price" name="total_price" v-model="formData.total_price" required>
</div>

<div class="form-floating mb-3">
    <textarea class="form-control" placeholder="Inserisci il tuo messaggio" id="message" name="message" style="height: 200px" v-model="formData.message"></textarea>
    <label for="message">Messaggio</label>
</div>


<button type="submit" class="btn btn-primary">Invia</button>

</form>













<!--Il pulsante che mi fa tornare all vista delle cart SENZA REFRESHARE TUTTO,per questo non uso a-->
<router-link :to="{name: 'cart-page'}"  class="back_cart">
    <i class="fa-solid fa-arrow-left"></i>
    Back To Cart
</router-link>
</div> 
</section>
</template>

<style lang="scss" scoped>
form{
  color: red;
}

section{
    background-color:rgba(29, 20, 39, 1) ;
    height:130vh;
}

.title{
    color:rgba(249, 170, 1, 1) ;
}

.back_cart{
    text-decoration: none;
    color: rgba(249, 170, 1, 1);
}
</style>


