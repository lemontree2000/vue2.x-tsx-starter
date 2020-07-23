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

export const saveUser = () => {
  return axiosInstance({
    url: '/saveUser',
    method: 'post',
    data: {
      a: 1,
      b: 2
    }
  })
}

saveUser()
getUserInfo()

// export const authInfo = xxxx.get({
//   baseUrl: '',
//   url: '/baseInfo?abc=:id&',
//   proxy: '',
//   method: 'get',
//   // params: {
//   //   a: 1
//   // },
//   // data: {

//   // }
// })
