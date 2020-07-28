import request, { RequestConfig, ResponseBodyData } from './request'
import { AxiosRequestConfig, Method, AxiosResponse, AxiosError } from 'axios'
import {
  HTTP_FORBIDDEN_CODE_ERROR,
  HTTP_NO_LOGIN_ERROR,
  HTTP_UNKNOWN_ERROR,
  HTTP_NOT_FOUND_ERROR,
  HTTP_SERVER_ERROR,
  HTTP_NETWORK_ERROR
} from '@/config/httpMessage.constant'
import { message } from 'ant-design-vue'

const methodsNoData = ['delete', 'get', 'head', 'options']
const SUCCESS_CODES = ['200', '20000', '00', '0']
const FORBIDDEN_CODE = '40300'
const UNAUTHORIZED_CODE = '30100'

export function transformProxyPrefix(config: RequestConfig) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  if (config.proxyPrefix && isDevelopment) {
    config.url = config.proxyPrefix + config.url
    delete config.baseURL
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

function handleShowError(finalRes: ResponseBodyData) {
  if (finalRes.error) {
    message.error(finalRes.msg)
  }
}

export function processHttpResponse(response: AxiosResponse) {
  const responseData = response.data
  const data = responseData.data || responseData
  let code = responseData.code || responseData.status
  let msg = responseData.msg || responseData.message
  let error = true

  // 返回类型是普通对象
  if (Object.prototype.toString.call(responseData) === '[object Object]') {
    if (SUCCESS_CODES.includes(String(code))) {
      error = false
    } else if (String(code) === FORBIDDEN_CODE) {
      msg = HTTP_FORBIDDEN_CODE_ERROR
    } else if (String(code) === UNAUTHORIZED_CODE) {
      msg = HTTP_NO_LOGIN_ERROR
    } else {
      // 不合规的result 格式，没有code
      msg = msg || HTTP_UNKNOWN_ERROR
      code = response.status
    }
  } else if (response.config.responseType) {
    // 返回类型是其他对象，但是客户端设置了responseType 说明是可以预测的返参
    error = false
    code = response.status
    msg = response.statusText
  }
  const resProto = Object.create({ response })
  const finalRes: ResponseBodyData = Object.assign(resProto, {
    code,
    msg,
    data,
    error
  })

  // resolve 处理器
  handleShowError(finalRes)
  // TODO 处理登录失效
  if (error) throw finalRes
  return (finalRes as unknown) as AxiosResponse
}

export function processHttpError(err: any) {
  let msg = err.message
  let data
  const code = 500
  const error = true
  if (err.isAxiosError) {
    const { status } = ((err as AxiosError).response as AxiosResponse) || {}
    switch (status) {
      case 0:
        msg = HTTP_NETWORK_ERROR
        break
      case 403:
        msg = HTTP_FORBIDDEN_CODE_ERROR
        break
      case 404:
        msg = HTTP_NOT_FOUND_ERROR
        break
      default:
        msg = HTTP_SERVER_ERROR
        break
    }
  }
  const resProto = Object.create({ response: (err as AxiosError).response })
  const finalRes: ResponseBodyData = Object.assign(resProto, {
    code,
    msg,
    data,
    error
  })
  // reject 处理器
  handleShowError(finalRes)
  return Promise.reject(finalRes)
}
