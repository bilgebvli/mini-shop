import Vue from 'vue';

const helpers = {
  deepClone(value) {
    return JSON.parse(JSON.stringify(value));
  },
  kebabCase(str) {
    const regex =
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;
    return (
      str &&
      str
        .match(regex)
        .map((x) => x.toLowerCase())
        .join('-')
    );
  },
  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },
};

Vue.prototype.$helpers = helpers;

export default helpers;
