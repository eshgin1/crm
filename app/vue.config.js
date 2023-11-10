const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
});
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       fallback: {
//         crypto: require.resolve('crypto-browserify'),
//       },
//     },
//   },
// };
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       fallback: {
//         http: require.resolve('http'),
//       },
//     },
//   },
// };

