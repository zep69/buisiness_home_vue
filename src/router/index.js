import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import {auth} from '../firebase'
import Login from '../views/Login.vue'
import MainPage from '../views/MainPage'
import About from '../views/About.vue'



const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
    meta:{
      requiresAuth:true
    },
    children:[
      {
        path: '/main/home',
        name: 'Home',
        component: Home,
        meta:{
          requiresAuth:true
        }
      },
      {
        path: '/main/about',
        name: 'About',
        component: About,
        meta:{
          requiresAuth:true
        }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: MainPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from,next)=>{
  if(to.path ==='/login' && auth.currentUser){
    next('/main/home')
    return
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/login')
    return;
  }
  next();
})

export default router