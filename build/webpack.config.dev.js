const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const path = require("path");
const webpack = require("webpack");
const { proxy } = require("./config");

module.exports = merge(config, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    publicPath: "/",
    https: false, // 开启https
    compress: true, // 开启gzip
    host: "0.0.0.0", // 可以使用本机ip访问
    disableHostCheck: false, // 是否开启检查host, 改了本地host需要开启
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true, // 使用HTML5 history API,
    hotOnly: true, // 在不支持热更新的时候不会刷新页面
    overlay: true, // 错误遮罩
    noInfo: true,
    proxy,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
