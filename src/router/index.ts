import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('@/views/dashboard/analysis/index.vue')
        },
        {
          path: '/uikit/button',
          name: 'button',
          component: () => import('@/views/uikit/button/index.vue')
        },
        {
          path: '/uikit/tree',
          name: 'tree',
          component: () => import('@/views/uikit/tree/index.vue')
        },
        {
          path: '/blocks',
          name: 'blocks',
          component: () => import('@/views/utilities/blocks/index.vue')
        }
      ]
    }
  ]
});

export default router;
