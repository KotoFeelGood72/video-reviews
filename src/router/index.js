
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const routes = [
  {
    path: '/embed', 
    component: () => import('@/views/VideoEmbed.vue'),
    meta: {
      layout: 'empty-layout'
    }
  },
  {
    path: '/register', 
    component: () => import('@/views/auth/moduleRegister.vue'),
    meta: {
      layout: 'default-layout'
    }
  },
  {
    path: '/login', 
    component: () => import('@/views/auth/moduleLogin.vue'),
    meta: {
      layout: 'default-layout'
    }
  },
  {
    path: '/not-found', 
    component: () => import('@/views/not-found.vue'),
    meta: {
      layout: 'default-layout'
    }
  },
  {
    path: '/reviews', 
    component: () => import('@/views/api/module-reviews.vue'),
    meta: {
      layout: 'empty-layout'
    }
  },
  {
    path: '/admin/dashboard', 
    component: () => import('@/views/admin/AdminDashboard.vue'),
    meta: {
      layout: 'admin-layout'
    }
  },
  {
    path: '/register/confirm', 
    component: () => import('@/views/auth/moduleConfirm.vue'),
    meta: {
      layout: 'default-layout'
    }
  },
  { 
    path: '*', 
    redirect: '/not-found' ,
    meta: {
      layout: 'default-layout'
    }
  },
  {
    path: '/',
    redirect: '/register',
    // meta: {
    //   layout: 'empty-layout'
    // }
  }
];


const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router