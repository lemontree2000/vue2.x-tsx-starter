module.exports = {
  port: 9999,
  documentTitle: 'Hello Vue Starter',
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
