const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");

const config = require("./webpack.config.dev");
const compiler = webpack(config);

webpackDevServer.addDevServerEntrypoints(config, {});

const server = new webpackDevServer(compiler, {});

server.listen(9999, () => {
  console.log("9999");
});
