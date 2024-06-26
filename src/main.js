import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// importiamo il file router.js
import { router } from './router.js' 

createApp(App).use(router).mount('#app')
