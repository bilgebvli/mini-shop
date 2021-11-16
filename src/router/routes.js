const routeOptions = [
  {
    name: 'pageNotFound',
    path: '*',
    pageTitle: 'errors.pageNotFound',
  },
  {
    name: 'products',
    path: '/',
    pageTitle: 'products.name',
  },
  {
    name: 'basket',
    path: '/basket',
    pageTitle: 'basket.name',
  },
];

const routes = routeOptions.map(({ name, path, pageTitle }) => ({
  name,
  path,
  component: () => import(`@/views/${name}`),
  meta: {
    pageTitle,
  },
}));
export default routes;
