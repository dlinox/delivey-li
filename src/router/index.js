import Vue from 'vue'
import VueRouter from 'vue-router'
import Setting from '../views/Configuraciones/'

Vue.use(VueRouter)

const routes = [{
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login/')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/'),
    children: [
      {
        path: '/dashboard/',
        component: () => import('../views/Dashboard/Inicio/')
      },
      {
        path: '/dashboard/usuarios',
        component: () => import('../views/Dashboard/Usuarios/')
      },
      {
        path: '/dashboard/articulos',
        component: () => import('../views/Dashboard/Articulos/')
      },
      {
        path: '/dashboard/pedidos',
        component: () => import('../views/Dashboard/Pedidos/')
      },

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router