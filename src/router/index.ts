import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/paginas/home.vue'
import Inventario from '@/paginas/inventario.vue'
import Reportes from '@/paginas/Reportes.vue'
import Login from '@/paginas/login.vue'
import Register from '@/paginas/register.vue'
import Carrito from '@/paginas/carrito.vue'
import Acerca from '@/paginas/acerca.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/inventario', name: 'inventario', component: Inventario },
    { path: '/reportes', name: 'reportes', component: Reportes },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/carrito', name: 'carrito', component: Carrito },
    { path: '/acerca', name: 'acerca', component: Acerca },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
})

export default router



