module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  // 代理配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // 去掉path前面的/api
        },
      }
    }
  }
}
