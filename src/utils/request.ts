import { AxiosRequestConfig, AxiosPromise } from 'axios'
import axiosInstance from './http'

interface RequestConfig extends AxiosRequestConfig {
  proxyPrefix?: string
  isLoading?: boolean
  isMessage?: boolean
}

interface Request {
  <T>(config: RequestConfig): AxiosPromise<T>
  get: () => any
  head: () => any
  delete: () => any
  patch: () => any
  post: () => any
  put: () => any
}
const request: Request = function (config: RequestConfig) {
  return axiosInstance(config)
}

request.get = function () {}
request.head = function () {}
request.delete = function () {}
request.post = function () {}
request.patch = function () {}
request.put = function () {}

function trasnformConfigForAxios(config: RequestConfig): AxiosRequestConfig {
  return {}
}

function axiosRequest(config: RequestConfig) {
  return axiosInstance(config)
}

export default request
