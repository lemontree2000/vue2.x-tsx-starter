import { AxiosRequestConfig, AxiosResponse } from 'axios'
import axiosInstance from './http'
import { requestWidthoutData, transformConfigForAxios, requestWidthData } from './requestHelper'

export interface RequestConfig extends AxiosRequestConfig {
  proxyPrefix?: string
  isLoading?: boolean
  isMessage?: boolean
}

export interface RequestBodyData<T = any> {
  data: T
  code: number | string
  msg: string
  response: AxiosResponse<T>
}

export type RequestPromise<T = any> = Promise<RequestBodyData<T>>

export interface Request {
  <T = any>(config: RequestConfig): RequestPromise<T>
  get: <T = any>(url: string, config?: RequestConfig) => RequestPromise<T>
  head: <T = any>(url: string, config?: RequestConfig) => RequestPromise<T>
  delete: <T = any>(url: string, config?: RequestConfig) => RequestPromise<T>
  patch: <T = any>(url: string, data: any, config?: RequestConfig) => RequestPromise<T>
  post: <T = any>(url: string, data: any, config?: RequestConfig) => RequestPromise<T>
  put: <T = any>(url: string, data: any, config?: RequestConfig) => RequestPromise<T>
}

const axiosRequest = function (config: RequestConfig): RequestPromise {
  return (axiosInstance(config) as unknown) as RequestPromise
}

const request: Request = function (config) {
  config = transformConfigForAxios(config)
  return axiosRequest(config)
}

request.get = function (url: string, config?: AxiosRequestConfig) {
  return requestWidthoutData('get', url, config)
}
request.head = function (url: string, config?: AxiosRequestConfig) {
  return requestWidthoutData('head', url, config)
}
request.delete = function (url: string, config?: AxiosRequestConfig) {
  return requestWidthoutData('delete', url, config)
}
request.post = function (url: string, data: any, config?: AxiosRequestConfig) {
  return requestWidthData('post', url, data, config)
}
request.patch = function (url: string, data: any, config?: AxiosRequestConfig) {
  return requestWidthData('post', url, data, config)
}
request.put = function (url: string, data: any, config?: AxiosRequestConfig) {
  return requestWidthData('post', url, data, config)
}

export default request
