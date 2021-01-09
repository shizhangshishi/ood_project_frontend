module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    host: 'localhost',
    port: 80,
    // open: true
  },
  "configureWebpack": {
    // for debugging in VSCode
    // see: https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html
    "devtool": "source-map"
  },
  "transpileDependencies": [
    "vuetify"
  ]
};
