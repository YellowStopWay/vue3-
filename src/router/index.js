import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // layout
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/Layout.vue'),
    children: [{
      name: 'home', path: '/', component: () => import('@/views/home')
    },
    {
      path: '/category/:id', component: () => import('@/views/category/index')
    },
    {
      path: '/category/sub/:id', component: () => import('@/views/category/sub')
    }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
