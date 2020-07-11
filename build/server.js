const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const colors = require("colors");
const open = require("open");
const os = require("os");

const webpackConfig = require("./webpack.config.dev");
const compiler = webpack(webpackConfig);
const config = require("./config");

let isFirst = true;

webpackDevServer.addDevServerEntrypoints(
  webpackConfig,
  webpackConfig.devServer
);

const server = new webpackDevServer(compiler, webpackConfig.devServer);

server.listen(config.port, webpackConfig.devServer.host, (error) => {
  if (error) {
    return console.log(`webpack devServer error: ${error.message}`.red, error);
  }

  const serverUrl = getServerUrl();
  // const msg = `Please access to ${serverUrl.local.green} with your browser started by webpack-dev-server or ${serverUrl.ip.green} with your ip address!`;
  // console.log(msg);

  const msg = `App running at:
    -Local: ${serverUrl.local.green}
    -Network: ${serverUrl.ip.green}
  `
  console.log(msg)

  // 编译完成
  compiler.hooks.done.tap("compiler done", () => {
    console.log("Compiled successfully".green);
    if (isFirst) {
      open(serverUrl.local).then(() => {
        isFirst = false;
      });
    }
  });
});

function getServerUrl() {
  const ip = getLocalIpAddress();
  const protocol = webpackConfig.devServer.https ? "https" : "http";
  const port = config.port;
  return {
    local: protocol + `://localhost:${port}`,
    ip: protocol + `://${ip}:${port}`,
  };
}

/**
 * 获取本地ip
 */
function getLocalIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const n in interfaces) {
    const iface = interfaces[n];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
  return "127.0.0.1";
}
