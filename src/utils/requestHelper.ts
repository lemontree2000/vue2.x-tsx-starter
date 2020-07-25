import request, { RequestConfig } from './request'
import { AxiosRequestConfig, Method } from 'axios'

const methodsNoData = ['delete', 'get', 'head', 'options']

export function transformProxyPrefix(config: RequestConfig) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  if (config.proxyPrefix && isDevelopment) {
    config.url = config.proxyPrefix + config.url
  }
}

export function transformUrlParam(config: RequestConfig) {
  if (config.url) {
    const paramkeys = config.url.match(/:\w+/g) || []
    const method = (config.method || 'get').toLowerCase()
    const hasNoData = methodsNoData.includes(method)

    paramkeys.forEach((k) => {
      const key = k.substring(1)
      if (hasNoData) {
        const paramValue = config.params[key]
        config.url = config.url?.replace(k, paramValue || k)
        delete config.params[key]
      } else {
        const paramValue = config.data[key]
        config.url = config.url?.replace(k, paramValue || k)
        delete config.data[key]
      }
    })
  }
}

export function transformConfigForAxios(config: RequestConfig): AxiosRequestConfig {
  transformUrlParam(config)
  transformProxyPrefix(config)
  return config
}

export function requestWidthData(
  method: Method,
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) {
  return request(
    Object.assign(config || {}, {
      method,
      url,
      data
    })
  )
}

export function requestWidthoutData(method: Method, url: string, config?: AxiosRequestConfig) {
  return request(
    Object.assign(config || {}, {
      method,
      url
    })
  )
}
