const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
  ? '/2023.The.F2E.LEOW/'
  : '/',
  transpileDependencies: true,
});
