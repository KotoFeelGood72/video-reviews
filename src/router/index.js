
import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store';


Vue.use(VueRouter)

const routes = [
  {
    path: '/embed', 
    component: () => import('@/views/VideoEmbed.vue'),
    meta: {
      layout: 'default-layout',
      requiresAuth: true
    }
  },
  {
    path: '/register', 
    component: () => import('@/views/auth/moduleRegister.vue'),
    meta: {
      layout: 'default-layout',
      requiresAuth: false
    }
  },
  {
    path: '/login', 
    component: () => import('@/views/auth/moduleLogin.vue'),
    meta: {
      layout: 'default-layout',
      requiresAuth: false
    }
  },
  {
    path: '/not-found', 
    component: () => import('@/views/not-found.vue'),
    meta: {
      layout: 'default-layout',
      requiresAuth: false
    }
  },
  // {
  //   path: '/reviews', 
  //   component: () => import('@/views/api/module-reviews.vue'),
  //   meta: {
  //     layout: 'empty-layout'
  //   }
  // },
  {
    path: '/admin/dashboard', 
    component: () => import('@/views/admin/AdminDashboard.vue'),
    meta: {
      layout: 'admin-layout',
      requiresAuth: true
    }
  },
  {
    path: '/register/confirm', 
    component: () => import('@/views/auth/moduleConfirm.vue'),
    meta: {
      layout: 'default-layout',
      requiresAuth: false
    }
  },
  { 
    path: '*', 
    redirect: '/not-found' ,
    meta: {
      layout: 'default-layout',
      requiresAuth: true
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth; // Флаг, указывающий, требуется ли аутентификация для маршрута

  if (requiresAuth && !isAuthenticated()) {
    // Если требуется аутентификация и пользователь не аутентифицирован
    next('/login'); // Перенаправить на маршрут входа в систему
  } else {
    next(); // Продолжить нормальную навигацию
  }
});

function isAuthenticated() {
  return store.getters.isAuthenticated; 
}

export default router