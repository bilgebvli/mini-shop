import api from '@/api';

export default {
  async fetchBasket({ commit }) {
    const item = await api
      .get('https://6182f8f991d76c00172d171e.mockapi.io/api/v1/basket')
      .then((res) => res.data);
    commit('setBasket', { basket: item });
  },
  async addBasket(context, { basket }) {
    return await api.post(
      'https://6182f8f991d76c00172d171e.mockapi.io/api/v1/basket',
      {
        ...basket,
      }
    );
  },
  async editBasket(context, { productId = null, basket }) {
    return await api.put(
      `https://6182f8f991d76c00172d171e.mockapi.io/api/v1/basket/${productId}`,
      { ...basket }
    );
  },
  async deleteBasket(context, { productId = null }) {
    return await api.delete(
      `https://6182f8f991d76c00172d171e.mockapi.io/api/v1/basket/${productId}`
    );
  },
};
