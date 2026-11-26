const { defineConfig } = require('@vue/cli-service');
const { VuetifyPlugin } = require('webpack-plugin-vuetify');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // Disable linting during build
  pluginOptions: {
    vuetify: {}, // Ensure this is present for vue-cli-plugin-vuetify
  },
  configureWebpack: {
    stats: {
      children: true, // Enable detailed child compilation stats
    },
    plugins: [
      new VuetifyPlugin({
        autoImport: true, // Enable auto-import for Vuetify components
        styles: { configFile: 'src/styles/variables.scss' }, // Adjust path if needed
      }),
    ],
  },
});