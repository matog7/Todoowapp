import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/CreateTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Home
    }, 
    {
      path: '/creation',
      name: 'Créer tâche',
      component: Create
    }
  ]
})

export default router
