import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: '',
  timeout: 0
})

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log('request:error=>', error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.log('response:error=>', error)
    return Promise.reject(error)
  }
)

export default axiosInstance


/**
 * 1.baseUrl
 * 2.proxy
 * 3./api/:id
 * 4.cancelToken
 * 5.url
 * 6.method
 * 7.
 * 
 * 
 */