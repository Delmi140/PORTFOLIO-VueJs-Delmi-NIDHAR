import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '@/views/Portfolio.vue'
import NotFound from '@/views/NotFound.vue'
import Cvenligne from '@/views/CvEnLigne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/Cvenligne',
      name: 'Cvenligne',
      component: Cvenligne
    },
    
    {
      path: '/:pathMatch(.*)*', component: NotFound
      
    },
  ]
})

export default router
