import Vue from 'vue';
import i18n from '@/locales';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

//Set Page Title
router.afterEach((to) => {
  setTimeout(() => {
    const { pageTitle } = to.meta;
    document.title = `${i18n.t(pageTitle)} | ${process.env.VUE_APP_TITLE}`;
  }, 250);
});
export default router;
