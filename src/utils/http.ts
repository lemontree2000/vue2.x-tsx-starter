import Axios from 'axios'
// import { message } from 'ant-design-vue'
import { ResponseBodyData } from './request'

// const showError = (msg: string) => {
//   message.error({
//     content: msg
//   })
// }

// showError('网络错误，请稍后再试')
const SUCCESS_CODES = ['200', '20000', '00', '0']

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
    const responseData = response.data
    const code = responseData.code || responseData.status
    const msg = responseData.msg || responseData.message
    const data = responseData.data || responseData
    let success = true
    // 1、data 不是json
    // 2、未登录校验 40300，30100

    // if (SUCCESS_CODES.includes(String(code))) {
    // } else {
    // }
    if (SUCCESS_CODES.includes(String(code))) {
    }
    console.log('response===>>>', response)
    const finalResponse: ResponseBodyData = Object.assign(Object.create({ response }), {
      code,
      msg,
      data
    })

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
