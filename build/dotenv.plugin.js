const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
const path = require('path')
const { DefinePlugin } = require('webpack')

const prefixRE = /^VUE_APP_/

class DotevnPlugin {
  constructor() {
    this.loadEnv()
    this.loadEnv(process.env.env || 'test')

    return new DefinePlugin(this.resolveClientEnv())
  }

  loadEnv(mode) {
    const rootPath = process.cwd()
    const basePath = path.resolve(rootPath, `./config/.env${mode ? `.${mode}` : ``}`)
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

  resolveClientEnv(raw) {
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
}

module.exports = DotevnPlugin
