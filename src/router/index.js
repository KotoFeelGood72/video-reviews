
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const routes = [
  {
    path: '/embed', component: () => import('@/views/VideoEmbed.vue')
  },
  {
    path: '/sign-up', component: () => import('@/views/SignUP.vue')
  },
  {
    path: '/',
    redirect: '/sign-up'
  }
];


const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router