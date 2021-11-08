const basketMixin = {
  props: {
    basketLoader: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    basket() {
      return this.$store.getters["basket/getBasket"];
    },
  },
  methods: {
    async fetchBasket() {
      await this.$store.dispatch("basket/fetchBasket");
    },
  },
};
export default basketMixin;
