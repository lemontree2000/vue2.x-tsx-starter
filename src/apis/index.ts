import axiosInstance from '@/utils/http'

export const getUserInfo = (config?: any) => {
  return axiosInstance({
    url: '/userInfo/:id',
    method: 'post',
    params: {
      a: 1,
      id: 0
    },
    data: {
      b: 2,
      id: 'ok'
    },
    ...config
  })
}


getUserInfo()