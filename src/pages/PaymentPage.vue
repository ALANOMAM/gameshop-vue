<script>
export default{
    name:'PaymentPage',
    data(){
        return{

        }
    }
}
</script>

<template>
<h1>Payment Page</h1>

<!--Il pulsante che mi fa tornare all vista delle cart SENZA REFRESHARE TUTTO,per questo non uso a-->
<router-link :to="{name: 'cart-page'}"  class="back_cart">
    <i class="fa-solid fa-arrow-left"></i>
    Back To Cart
</router-link>

</template>

<style lang="scss" scoped>
.back_cart{
    text-decoration: none;
    color: rgba(249, 170, 1, 1);
}
</style>