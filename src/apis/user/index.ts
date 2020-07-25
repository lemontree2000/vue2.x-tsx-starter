import request from '@/utils/request'
// defined api
export const login = (data: LoginParam) => {
  return request<loginResData>({
    url: '/login',
    method: 'post',
    proxyPrefix: '__proxy__',
    isLoading: true,
    isMessage: true,
    data
  })
}
// use api
login({
  email: 'edward@qq.com',
  password: 'edward'
}).then((res) => {
  if (res.code === 200) {
    console.log(res.data.userId)
  }
})
// defined api
export const getUserInfo = (params: UserInfoParam) => {
  return request<UserInfoResData>({
    url: '/userInfo/:userId',
    proxyPrefix: '__user__',
    method: 'get',
    params
  })
}
// use api
getUserInfo({ userId: 1 }).then((res) => {
  if (res.code === 200) {
    console.log(res.data.address)
    console.log(res.data.userName)
  }
})
// defined api
export const saveUser = (data: SaveUserParam) => {
  return request.post<SaveUserResData>('/saveUser', data)
}
// use api
saveUser({ userName: 'edward', password: '1234' }).then((res) => {
  if (res) {
    console.log(res.data.userId)
  }
})

// defined
const getProductListById = (params: GetProductListParam) => {
  return request.get<GetProductListResData>('/productList/:storeId', {
    params,
    proxyPrefix: '__product__'
  })
}
// use api
getProductListById({ storeId: 1 }).then((res) => {
  console.log(res.data[0].productId)
  console.log(res.data[0].productName)
})
