import { isAuthenticated } from '@/helper';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: import('@/views/RegisterView.vue'),
      meta: { authPath: true },
    },
    {
      path: '/login',
      name: 'login',
      component: import('@/views/LoginView.vue'),
      meta: { authPath: true },
    },
    {
      path: '/articles/create',
      name: 'createArticle',
      components: {
        navigation: import('@/views/NavigationView.vue'),
        main: import('@/views/CreateView.vue'),
      },
      meta: { requiresAuth: true },
    },
    {
      path: '/articles/edit/:slug',
      name: 'editArticle',
      components: {
        navigation: import('@/views/NavigationView.vue'),
        main: import('@/views/EditView.vue'),
      },
      meta: { requiresAuth: true },
    },
    {
      path: '/articles/:page?',
      name: 'home',
      components: {
        navigation: import('@/views/NavigationView.vue'),
        main: import('@/views/ArticlesView.vue'),
      },
      meta: { requiresAuth: true },
    },
    {
      path: '/:notFound',
      redirect: () => {
        return { name: 'home' };
      },
    },
  ],
});

router.beforeEach((to, from) => {
  const isAuth = isAuthenticated();
  if (to.meta.requiresAuth && !isAuth) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    };
  }
  if (to.meta.authPath && isAuth) {
    return {
      path: from.fullPath,
    };
  }
});

export default router;
