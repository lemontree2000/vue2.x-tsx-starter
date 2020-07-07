const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const path = require("path");
const webpack = require("webpack");

module.exports = merge(config, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {

    https: false, // 开启https
    compress: true, // 开启gzip
    host: "0.0.0.0", // 这样设置可以使用本机ip访问
    disableHostCheck: false, // 是否开启检查host, 改了本地host需要开启
    // contentBase: path.join(__dirname, "dist"),
    contentBase: '../dist',
    historyApiFallback: true, // 使用HTML5历史记录API,
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
