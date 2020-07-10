const path = require('path');

module.exports = {
  indexPath: 'index.html',
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  },
  configureWebpack: {
    resolve: {
      alias: {
        // Fix all vue module to an absolute path
        "vue": path.resolve(__dirname, "node_modules/lib/node_modules/vue")
      }
    }
  }
};
