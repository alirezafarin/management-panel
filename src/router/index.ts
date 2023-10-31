import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NavigationView from '@/views/NavigationView.vue'
import CreateView from '@/views/CreateView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/create',
      name: 'create',
      components: {
        navigation: NavigationView,
        main: CreateView
      }
    }
  ]
})

export default router
