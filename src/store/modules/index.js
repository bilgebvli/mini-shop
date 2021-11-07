/**
 * Automatic Module Registration
 */
const requireModule = require.context('.', true, /index\.js$/);
const modules = {};
requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return;
  const moduleName = fileName.replace(/\.\/(.+)(\/index\.js$)/g, '$1');
  modules[moduleName] = {
    ...requireModule(fileName).default,
  };
});
export default modules;
