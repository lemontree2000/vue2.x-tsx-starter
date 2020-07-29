const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const path = require('path')

const prefixRE = /^VUE_APP_/
const argvMap = process.argv.slice(2).reduce((arg, argStr) => {
  const [key, value] = argStr.split('=')
  arg[key] = value
  return arg
}, {})

class DotenvPLugin {
  apply(compiler) {
    console.log(process.env)
    this.loadEnv()
    this.loadEnv(this.argvMap.env || 'sit')
  }

  loadEnv(mode) {
    const rootPath = process.cwd()
    const basePath = path.resolve(rootPath, `/config/.env${mode ? `.${mode}` : ``}`)
    const localPath = `${basePath}.local`

    const load = (envPath) => {
      try {
        const env = dotenv.config({ path: envPath, debug: process.env.DEBUG })
        dotenvExpand(env)
      } catch (error) {
        console.log(error)
      }
    }

    load(localPath)
    load(basePath)
  }
  get argvMap() {
    return process.argv.slice(2).reduce((arg, argStr) => {
      const [key, value] = argStr.split('=')
      arg[key] = value
      return arg
    }, {})
  }
}

module.exports = DotenvPLugin

module.resolveClientEnv = function (raw) {
  const env = {}
  Object.keys(process.env).forEach((key) => {
    if (prefixRE.test(key)) {
      env[key] = process.env[key]
    }
  })

  if (raw) {
    return env
  }

  for (const key in env) {
    env[key] = JSON.stringify(env[key])
  }
  return {
    'process.env': env
  }
}
