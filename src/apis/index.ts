// import request from '@/utils/http'

import request from '@/utils/request'

const login =(data: any) => {
  return request({
    url: '/login',
    method: 'post',
    proxyPrefix: '__login__',
    isLoading: true,
    isMessage: true,
    data
  })
}


login({}).then



// export const getUserInfo = (config?: any) => {
//   return request({
//     url: '/userInfo/:id',
//     method: 'post',
//     params: {
//       a: 1,
//       id: 0
//     },
//     data: {
//       b: 2,
//       id: 'ok'
//     },
//     ...config
//   })
// }

// export const saveUser = () => {
//   return request({
//     url: '/saveUser',
//     method: 'post',
//     data: {
//       a: 1,
//       b: 2
//     }
//   })
// }

// saveUser()
// getUserInfo()

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

// 正常情况
// const getName = request.get('/getName')
// use: getName

// //
// interface ProductListParam {
//   id: string
// }

// const getProductListById = (params: ProductListParam) => {
//   return request({
//     method: 'get',
//     url: '/taskmanage/comment/delete/',
//     proxyPrefix: '__login__',
//     params
//   })
// }

// getProductListById({ id: '1' })
