import Vue from 'vue';
import VueRouter from 'vue-router';
import Products from '@/views/products';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "pageNotFound" */ '@/views/pageNotFound'),
  },
  {
    name: 'products',
    path: '/',
    component: Products,
  },
  {
    name: 'product',
    path: '/product',
    component: () =>
      import(/* webpackChunkName: "product" */ '@/views/product'),
  },
  {
    name: 'basket',
    path: '/basket',
    component: () => import(/* webpackChunkName: "basket" */ '@/views/basket'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
