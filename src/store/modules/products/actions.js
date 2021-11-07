import api from "@/api";

export default {
  async fetchProducts({ commit }) {
    const products = await api
      .get("https://6182f8f991d76c00172d171e.mockapi.io/api/v1/products")
      .then((res) => res.data);
    commit("setProducts", { products });
  },
};
