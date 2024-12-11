import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../components/Hero.vue') }, // 首页
  { path: '/about', component: () => import('../components/About.vue') }, // 关于我们
  { path: '/contact', component: () => import('../components/Contact.vue') }, // 联系我们
  { path: '/login', component: () => import('../components/Login.vue') }, // 登录页面
  { path: '/register', component: () => import('../components/Register.vue') }, // 注册页面
  { path: '/my-orders', component: () => import('../components/MyOrders.vue') }, // 我的订单页面
  { path: '/profile', component: () => import('../components/Profile.vue') } // 个人信息页面
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;