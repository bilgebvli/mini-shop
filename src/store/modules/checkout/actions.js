import api from "@/api";

export default {
  async placeOrder(context, { basket }) {
    return await api.post("/order", basket);
  },
};
