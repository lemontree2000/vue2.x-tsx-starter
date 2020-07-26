import Axios from 'axios'
// import { message } from 'ant-design-vue'
import { ResponseBodyData } from './request'

// const showError = (msg: string) => {
//   message.error({
//     content: msg
//   })
// }

// showError('网络错误，请稍后再试')

const axiosInstance = Axios.create({
  baseURL: '',
  timeout: 1000 * 10,
  withCredentials: true,
  responseType: 'json',
  headers: {}
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    // console.log('request:error=>', error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    const code = 0,
      msg = '',
      data = null
    console.log('response===>>>', response)
    const finalResponse: ResponseBodyData = {
      response,
      code,
      msg,
      data
    }
    console.log(finalResponse)
    return response
  },
  (error) => {
    console.log('response:error=>', JSON.stringify(error))
    // showError(error.message)
    return Promise.reject(error)
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
 * 7. 处理返回参数
 * 8. 处理报错
 * 9. 处理入参showmessage ， showloading
 *
 *
 */
