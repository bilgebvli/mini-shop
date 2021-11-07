export default {
  setIsAppLoading(state, { isAppLoading = false }) {
    if (isAppLoading)
      document.getElementsByTagName('body')[0].classList.add('is-loading');
    else
      document.getElementsByTagName('body')[0].classList.remove('is-loading');

    state.isAppLoading = isAppLoading;
  },
};
