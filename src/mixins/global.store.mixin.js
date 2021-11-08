const globalStoreMixin = {
  methods: {
    async showAppLoading() {
      await this.$store.commit('setIsAppLoading', { isAppLoading: true });
    },
    async hideAppLoading() {
      await this.$store.commit('setIsAppLoading', { isAppLoading: false });
    },
  },
};

export default globalStoreMixin;
