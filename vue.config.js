const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  css: {
    sourceMap: isDev,
    loaderOptions: {
      scss: {
        prependData: (() => {
          let scssVariables = '';

          for (let e in process.env) {
            if (/VUE_APP_/i.test(e)) {
              scssVariables += `$${e}: "${process.env[e]}";`;
            }
          }

          return scssVariables;
        })(),
      },
    },
  },
};
