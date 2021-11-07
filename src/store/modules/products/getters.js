export default {
  getProducts: (state) =>
    state.products.map((item) => ({ ...item, productId: item.id })),
};
