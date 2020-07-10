module.exports = {
  port: 9999,
  proxy: {
    "/__proxy__": {
      target: "https://example.com/api",
      pathRewrite: {
        "^/__proxy__": "",
      },
      changeOrigin: true,
      logLevel: "debug",
    },
  },
};
