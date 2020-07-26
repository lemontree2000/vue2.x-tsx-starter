module.exports = {
  port: 9999,
  https: false,
  documentTitle: 'Hello Vue Starter',
  proxy: {
    '/__proxy__': {
      target: 'https://example.com/api',
      pathRewrite: {
        '^/__proxy__': ''
      },
      changeOrigin: true,
      logLevel: 'debug'
    },
    '/__product__': {
      target: 'http://localhost:9898',
      pathRewrite: {
        '^/__product__': ''
      },
      changeOrigin: true,
      logLevel: 'debug'
    }
  }
}
