import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../components/Hero.vue') }, // 首页
  { path: '/about', component: () => import('../components/About.vue') }, // 关于我们
  { path: '/contact', component: () => import('../components/Contact.vue') } // 联系我们
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
