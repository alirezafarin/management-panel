import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import NavigationView from '@/views/NavigationView.vue';
import CreateView from '@/views/CreateView.vue';
import ArticlesView from '@/views/ArticlesView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { isAuthenticated } from '@/helper';
import EditView from '@/views/EditView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { authPath: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { authPath: true }
    },
    {
      path: '/articles/create',
      name: 'createArticle',
      components: {
        navigation: NavigationView,
        main: CreateView
      },
      meta: { requiresAuth: true }
    },
    {
      path: '/articles/edit/:slug',
      name: 'editArticle',
      components: {
        navigation: NavigationView,
        main: EditView
      },
      meta: { requiresAuth: true }
    },
    {
      path: '/articles/:page?',
      name: 'home',
      components: {
        navigation: NavigationView,
        main: ArticlesView
      },
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      redirect: (to) => {
        return { name: 'home' };
      }
    }
  ]
});

router.beforeEach((to, from) => {
  const isAuth = isAuthenticated();
  if (to.meta.requiresAuth && !isAuth) {
    return {
      name: 'login',
      query: { redirect: to.fullPath }
    };
  }
  if (to.meta.authPath && isAuth) {
    return {
      path: from.fullPath
    };
  }
});

export default router;
