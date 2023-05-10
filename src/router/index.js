
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const routes = [
  {
    path: '/embed', component: () => import('@/views/VideoEmbed.vue')
  },
  {
    path: '/register', component: () => import('@/views/auth/moduleRegister.vue')
  },
  {
    path: '/login', component: () => import('@/views/auth/moduleLogin.vue')
  },
  {
    path: '/not-found', component: () => import('@/views/not-found.vue')
  },
  { 
    path: '*', 
    redirect: '/not-found' 
  },
  {
    path: '/',
    redirect: '/register'
  }
];


const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router