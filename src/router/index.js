import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
    meta: {
      requiresAuth: false
    }    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach((to, from, next) => {

  const isAuthenticated = store.getters['auth/authenticated'];

  if (to.matched.some(record => record.meta.requiresAuth)) {
    
    if (!isAuthenticated) {
      next("/login");
      
    } else {
      next();
    }
  } 
  else if (to.matched.some(record => !record.meta.requiresAuth)) {
    
    if (isAuthenticated) {
      next("/");
      
    } else {
      next();
    }
  } 
  
  else {
    next()

  }
})

export default router
