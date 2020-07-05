//vue-loader/lib/plugin
module.exports = {
  indexPath: 'index.html',
  chainWebpack: (config) => {
    config.resolve.symlinks(false);
  }
};
