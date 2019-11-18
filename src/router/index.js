import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'data',
        name: 'demo',
        component: () => import ('../views/Demo.vue')
      }
    ]
  },
  {
    path: '/page/:teamId',
    name: 'chapter-two',
    component: () => import('../components/ChaperTwo.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/AppTodo.vue')
  },
  {
    path: '*',
    redirect: '/',
    name: '404',
    component: () => import('../views/404.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router