const { merge } = require('webpack-merge')
const config = require('./webpack.config')
const path = require('path')
const webpack = require('webpack')
const { proxy, https } = require('./config')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    publicPath: '/',
    https, // 开启https
    compress: true, // 开启gzip
    host: '0.0.0.0', // 可以使用本机ip访问
    disableHostCheck: false, // 是否开启检查host, 改了本地host需要开启
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true, // 使用HTML5 history API,
    hot: true, // 在不支持热更新的时候不会刷新页面
    overlay: true, // 错误遮罩
    writeToDisk: false, // true文件写入硬盘，false写入内存文件系统里面
    stats: {
      builtAt: false,
      assets: false,
      modules: false,
      chunkModules: false,
      chunks: false,
      // 添加 chunk 和 chunk merge 来源的信息
      chunkOrigins: false,
      entrypoints: false
    },
    watchOptions: {
      // 延迟构建响应，即将多个文件更改的多次构建合成到一次重构建(rebuild)
      aggregateTimeout: 1000, // in ms
      poll: 500, // 间隔单位 ms
      // 忽略指定目录的监听
      ignored: ['node_modules']
    },
    proxy
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
