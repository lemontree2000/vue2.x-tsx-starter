const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");

const config = require("./webpack.config.dev");
const compiler = webpack(config);

webpackDevServer.addDevServerEntrypoints(config, config.devServer);
const server = new webpackDevServer(compiler, config.devServer);

server.listen(9999, () => {
  console.log("9999");
});
