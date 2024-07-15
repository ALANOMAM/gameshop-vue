import { createRouter, createWebHistory } from "vue-router";

// components

// qui importo le mie viste 
import HomePage from './pages/HomePage.vue';
import SingleGame from './pages/SingleGame.vue';
import SingleProduct from './pages/SingleProduct.vue';
import CartPage from './pages/CartPage.vue';

const router = createRouter({
    history: createWebHistory(),

    // qui definisco le rotte delle mie viste 
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
         {
            path: '/game/:id',
            name: 'single-game',
            component: SingleGame,
        },

        {
            path: '/product/:id',
            name: 'single-product',
            component: SingleProduct,
        },

        {
            path: '/cart',
            name: 'cart-page',
            component: CartPage,
        },
    ]
});

export { router };