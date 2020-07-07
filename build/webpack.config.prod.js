const webpackMerge = require("webpack-merge");
const config = require("./webpack.config");

module.exports = webpackMerge(config, {
  mode: "production",
  devtool: "source-map",
});
