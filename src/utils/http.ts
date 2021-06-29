import Axios from 'axios'
import { processHttpResponse, processHttpError } from './requestHelper'

const axiosInstance = Axios.create({
  baseURL: '',
  timeout: 1000 * 10,
  withCredentials: true,
  headers: {}
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return processHttpResponse(response)
  },
  (error) => {
    return processHttpError(error)
  }
)

export default axiosInstance

/**
 * 1.baseUrl ✅
 * 2.proxy ✅
 * 3./api/:id  ✅
 * 4.cancelToken
 * 5.url ✅
 * 6.method ✅
 * 7. 处理返回参数 ✅
 * 8. 处理报错 ✅
 * 9. 处理入参showmessage ， showloading ❌ 不处理了， 让组件自己处理
 *
 *
 */
