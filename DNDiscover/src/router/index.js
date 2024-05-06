// import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../views/HomePage.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomePage,
//       meta: { transition: 'fade' }
//     },
//     {
//       path: '/map',
//       name: 'map',
//       component: () => import('../views/MapPage.vue'),
//       meta: { transition: 'fade' }
//     },
//     {
//       path: '/about',
//       name: 'about',
//       component: () => import('../views/AboutPage.vue'),
//       meta: { transition: 'fade' }
//     },

//   ]
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'splash',
    component: () => import('../views/SplashScreen.vue'),
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/MapPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
