import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/CreateTask.vue'
import Modif from '../views/modifTask.vue'

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
    },
    {
      path: '/modification',
      name: 'Modifier tâche',
      component: Modif
    }
  ]
})

export default router
