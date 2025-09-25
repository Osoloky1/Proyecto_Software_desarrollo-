import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // <- default export
import './style.css'

createApp(App).use(router).mount('#app')  // <- monta en #app (igual que index.html)
